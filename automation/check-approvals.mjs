/**
 * Flowstate Search — Approval Checker
 *
 * What this does:
 * 1. Reads pending contacts from data/pending.json
 * 2. Checks Slack channel for "yes X", "no X", "yes all", "no all" replies
 * 3. Pushes approved contacts to Lemlist
 * 4. Updates pending.json with results
 *
 * Run manually: node automation/check-approvals.mjs
 * Or set up to run every few hours via cron
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PENDING_FILE = path.join(__dirname, 'data', 'pending.json');
const LAST_CHECKED_FILE = path.join(__dirname, 'data', 'last-checked.json');

const LEMLIST_CAMPAIGN_ID = 'cam_f4uQfhXCpv7hhJwhP'; // Cold BD campaign

// ─── Helpers ──────────────────────────────────────────────────────────────────

function loadJSON(file) {
  if (!fs.existsSync(file)) return [];
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function saveJSON(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

// ─── Slack ────────────────────────────────────────────────────────────────────

function getLastChecked() {
  if (!fs.existsSync(LAST_CHECKED_FILE)) return null;
  return JSON.parse(fs.readFileSync(LAST_CHECKED_FILE, 'utf8')).ts || null;
}

function saveLastChecked(ts) {
  fs.writeFileSync(LAST_CHECKED_FILE, JSON.stringify({ ts }));
}

async function getRecentMessages() {
  const lastChecked = getLastChecked();
  // Only read messages since last run — prevents old "yes all" replies from re-firing
  const oldest = lastChecked || (Date.now() / 1000 - 60 * 60).toFixed(0); // fallback: last 1 hour

  const response = await fetch(
    `https://slack.com/api/conversations.history?channel=${process.env.SLACK_CHANNEL_ID}&oldest=${oldest}&limit=100`,
    {
      headers: { Authorization: `Bearer ${process.env.SLACK_BOT_TOKEN}` },
    }
  );

  const data = await response.json();
  return data.messages || [];
}

function parseApprovals(messages) {
  const approvals = {};

  for (const msg of messages) {
    const text = (msg.text || '').toLowerCase().trim();

    if (text === 'yes all') {
      approvals['all'] = 'approved';
    } else if (text === 'no all') {
      approvals['all'] = 'skipped';
    } else {
      const yesMatch = text.match(/^yes\s+(\d+)$/);
      const noMatch = text.match(/^no\s+(\d+)$/);
      if (yesMatch) approvals[yesMatch[1]] = 'approved';
      if (noMatch) approvals[noMatch[1]] = 'skipped';
    }
  }

  return approvals;
}

// ─── Lemlist ──────────────────────────────────────────────────────────────────

async function pushToLemlist(contact) {
  // All 6 template variables passed as top-level fields — Lemlist maps them to {{variable}} in emails
  const body = {
    firstName: contact.firstName,
    lastName: contact.lastName || '',
    companyName: contact.company,
    jobTitle: contact.triggerRole,
    jobLocation: contact.jobLocation || [contact.city, contact.state].filter(Boolean).join(', '),
    roleChallenge: contact.roleChallenge,
    companyInsight: contact.companyInsight || '',
    linkedinUrl: contact.linkedinUrl || '',
  };

  const res = await fetch(
    `https://api.lemlist.com/api/campaigns/${LEMLIST_CAMPAIGN_ID}/leads/${encodeURIComponent(contact.email)}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${Buffer.from(`:${process.env.LEMLIST_API_KEY}`).toString('base64')}`,
      },
      body: JSON.stringify(body),
    }
  );

  const data = await res.json();
  if (!res.ok) console.error('  Lemlist error:', JSON.stringify(data));
  return res.ok;
}

async function postSlackConfirmation(text) {
  await fetch('https://slack.com/api/chat.postMessage', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.SLACK_BOT_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      channel: process.env.SLACK_CHANNEL_ID,
      text,
    }),
  });
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function run() {
  console.log('🔎 Checking approvals at', new Date().toISOString());

  const pending = loadJSON(PENDING_FILE);
  const pendingContacts = pending.filter((c) => c.status === 'pending');

  if (pendingContacts.length === 0) {
    console.log('No pending contacts.');
    return;
  }

  const messages = await getRecentMessages();
  const approvals = parseApprovals(messages);

  if (Object.keys(approvals).length === 0) {
    console.log('No approvals or skips found yet.');
    return;
  }

  let approved = 0;
  let skipped = 0;

  for (const contact of pending) {
    if (contact.status !== 'pending') continue;

    const indexStr = String(contact.slackIndex);
    const decision = approvals['all'] || approvals[indexStr];

    if (!decision) continue;

    if (decision === 'approved') {
      if (!contact.email) {
        console.log(`  Skipping ${contact.firstName} at ${contact.company} — no email found`);
        contact.status = 'skipped_no_email';
        continue;
      }

      const success = await pushToLemlist(contact);
      if (success) {
        console.log(`  ✅ Pushed ${contact.firstName} at ${contact.company} to Lemlist`);
        contact.status = 'pushed_to_lemlist';
        approved++;
      } else {
        console.log(`  ⚠️ Failed to push ${contact.firstName} at ${contact.company}`);
        contact.status = 'lemlist_error';
      }
    } else {
      console.log(`  ❌ Skipped ${contact.firstName} at ${contact.company}`);
      contact.status = 'skipped';
      skipped++;
    }

    await new Promise((r) => setTimeout(r, 500));
  }

  saveJSON(PENDING_FILE, pending);
  saveLastChecked((Date.now() / 1000).toFixed(6)); // mark this moment so next run ignores older messages

  if (approved > 0 || skipped > 0) {
    await postSlackConfirmation(
      `:white_check_mark: Processed: *${approved} approved* → pushed to Lemlist | *${skipped} skipped*`
    );
  }

  console.log(`\nDone. Approved: ${approved} | Skipped: ${skipped}`);
}

run().catch(console.error);
