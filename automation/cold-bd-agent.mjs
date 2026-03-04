/**
 * Flowstate Search — Cold BD Monitoring Agent
 *
 * Flow:
 * 1. Apollo People Search — finds contacts at companies posting trigger roles (no credits used)
 * 2. Apollo Enrichment — gets full name, verified email, LinkedIn URL (uses export credits)
 * 3. Industry filter — pure construction companies only
 * 4. Claude — writes personalized outreach in Jordan's voice
 * 5. Slack — posts to #outreach-approvals for yes/no approval
 *
 * Run: node --env-file=.env automation/cold-bd-agent.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PENDING_FILE = path.join(__dirname, 'data', 'pending.json');
const PROCESSED_FILE = path.join(__dirname, 'data', 'processed.json');

// ─── Config ───────────────────────────────────────────────────────────────────

const TRIGGER_ROLES = [
  'Superintendent',
  'Director of Construction',
  'VP of Construction',
  'Director of Operations',
  'Director of Sales',
];

const TIER_1_STATES = ['Texas', 'Florida', 'Georgia', 'North Carolina', 'Arizona'];

const ICP = { minEmployees: 600, maxEmployees: 3500 };

const MAX_CONTACTS_PER_RUN = 5;

// Pure construction industries as returned by Apollo
const CONSTRUCTION_INDUSTRIES = [
  'construction',
  'civil engineering',
  'building materials',
  'architecture & planning',
  'mechanical or industrial engineering',
];

// Fallback: construction keywords in company name or Apollo keywords
const CONSTRUCTION_KEYWORDS = [
  'construction', 'contractor', 'builders', 'building',
  'subcontractor', 'mechanical', 'electrical', 'plumbing',
  'hvac', 'civil', 'infrastructure', 'design-build', 'epc',
];

// Companies to always exclude regardless of other filters
const EXCLUDED_KEYWORDS = [
  'golf', 'resort', 'hotel', 'hospitality', 'retail', 'grocery',
  'convenience store', 'restaurant', 'casino',
  'facility solutions', 'facilities management', 'facilities services',
];

// If Apollo returns one of these industries, hard reject — not construction
const EXCLUDED_INDUSTRIES = [
  // Tech / IT
  'information technology', 'computer', 'software', 'cybersecurity',
  'internet', 'saas', 'cloud', 'semiconductor', 'telecommunications',
  'network security', 'data', 'artificial intelligence', 'machine learning',
  // Healthcare
  'hospital', 'health care', 'healthcare', 'medical', 'pharmaceutical',
  'biotechnology', 'mental health', 'wellness', 'dental', 'veterinary',
  'senior living', 'assisted living', 'home health',
  // Finance / Legal / Insurance
  'financial services', 'banking', 'investment', 'venture capital',
  'private equity', 'accounting', 'insurance', 'legal services', 'law firm',
  // HR / Staffing / Consulting
  'staffing', 'human resources', 'recruiting', 'consulting',
  'management consulting', 'outsourcing',
  // Marketing / Media / Entertainment
  'marketing', 'advertising', 'public relations', 'media', 'entertainment',
  'publishing', 'broadcast', 'music', 'film', 'gaming',
  // Sports / Education / Non-profit
  'sports', 'recreation', 'fitness', 'education', 'higher education',
  'e-learning', 'non-profit', 'religious', 'government',
  // Retail / Food / Consumer
  'retail', 'e-commerce', 'food', 'beverage', 'restaurant', 'apparel',
  'consumer goods', 'luxury goods', 'cosmetics',
  // Testing / Research / Lab
  'testing', 'laboratory', 'research', 'scientific',
  // Logistics / Transportation
  'logistics', 'transportation', 'shipping', 'airlines', 'railroad',
  // Other clearly non-construction
  'automotive', 'aerospace', 'agriculture', 'farming',
];

// Who to reach out to based on the role being posted
const CONTACT_TARGETS = {
  'Superintendent':           ['Director of Construction', 'VP of Construction', 'COO', 'Chief Operating Officer'],
  'Director of Construction': ['VP of Construction', 'COO', 'Chief Operating Officer', 'CEO', 'President'],
  'VP of Construction':       ['COO', 'Chief Operating Officer', 'CEO', 'President'],
  'Director of Operations':   ['COO', 'Chief Operating Officer', 'CEO', 'President'],
  'Director of Sales':        ['VP of Sales', 'Chief Revenue Officer', 'CEO', 'President'],
};

// ─── Role Challenge Library ────────────────────────────────────────────────────
// These lines are PRE-APPROVED by Jordan. They are LOCKED.
// Do NOT rewrite, paraphrase, or improve them. Use them exactly as written.
// They are pulled by trigger role and used as {{roleChallenge}} in Lemlist campaigns.
const ROLE_CHALLENGE = {
  'Superintendent':           "The supers worth hiring are on a jobsite right now. They're not on Indeed or job boards. The only way to find them is to go recruit them directly.",
  'Director of Construction': "This role is hard to fill because you need someone who can run operations and lead people at the same time. The ones who can do both aren't looking. They're too busy winning somewhere else.",
  'VP of Construction':       "There are only a handful of people in any market who've actually operated at this level. Every one of them is already locked in somewhere. You have to go get them.",
  'Director of Operations':   "Companies usually hire for process and get someone who can't lead, or hire for leadership and get someone who can't build a system. Finding both in one person is the whole challenge.",
  'Director of Sales':        "You need someone who can sell but also talk to a super or a PM without losing credibility. That's a rare profile. And they're almost never the ones applying to your job posting.",
};

const VOICE_BRIEF = `
You are writing outreach emails on behalf of Jordan, founder of Flowstate Search — a construction executive recruiting firm.
Voice: direct, casual, construction-native, no corporate fluff. Sounds like a real person, not a recruiter pitch.
Value prop: "We Recruit The High-Performing Construction Leaders Your Competitors Fear Losing."
Non-negotiables: reference something specific about the company, respect their time, don't assume they're interested — open a door.
Never use: synergy, leverage, solutions, rockstar, ninja, passionate/dedicated (without story), world-class.
Structure: hard hook on first line, short paragraphs, single low-pressure CTA at the end asking for 15 minutes.
Signature: Jordan / Flowstate Search
HARD RULE: The "why this role is hard to fill" line provided to you is pre-approved by Jordan. Do not rewrite, paraphrase, or improve it. You may use it as context to write a stronger email, but reproduce it exactly if you reference it directly.
`.trim();

const DREAM100_SHEET_ID = '1t0RYzKXyZW4BeQp-x8bbOUhN1wEo-iLJ';
// Tab: "Bot Exclusions" — Column A: Company Name, Column B: Domain

// ─── Dream 100 ────────────────────────────────────────────────────────────────

async function loadDream100() {
  const url = `https://docs.google.com/spreadsheets/d/${DREAM100_SHEET_ID}/gviz/tq?tqx=out:json&sheet=Bot%20Exclusions`;
  const res = await fetch(url);
  const text = await res.text();
  const json = JSON.parse(text.replace('/*O_o*/\ngoogle.visualization.Query.setResponse(', '').replace(');', ''));

  const companies = new Set();
  const domains = new Set();

  for (const row of (json.table?.rows || [])) {
    const name = row.c?.[0]?.v?.toString().trim().toLowerCase(); // Column A: Company Name
    const site = row.c?.[1]?.v?.toString().trim().toLowerCase()  // Column B: Domain
      ?.replace(/https?:\/\//, '').replace(/www\./, '').split('/')[0];
    if (name) companies.add(name);
    if (site) domains.add(site);
  }

  return { companies, domains };
}

function isDream100(contact, dream100) {
  const name = (contact.company || '').toLowerCase();
  const domain = (contact.companyDomain || '').toLowerCase();
  return dream100.companies.has(name) || dream100.domains.has(domain);
}

async function postDream100Alert(contacts) {
  if (contacts.length === 0) return;
  const lines = contacts.map((c) => `• *${c.company}* — posting for ${c.triggerRole}`);
  const text = `:dart: *Dream 100 Activity — ${contacts.length} compan${contacts.length > 1 ? 'ies' : 'y'} actively hiring*\n\n${lines.join('\n')}\n\n_Excluded from cold outreach. Handle via your Dream 100 playbook._`;
  await fetch('https://slack.com/api/chat.postMessage', {
    method: 'POST',
    headers: { Authorization: `Bearer ${process.env.SLACK_BOT_TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ channel: process.env.SLACK_DREAM100_CHANNEL_ID, text }),
  });
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function cleanFirstName(name) {
  if (!name) return '';
  // Take only the first word (drop anything after a space, comma, or period)
  const first = name.split(/[\s,\.]/)[0];
  // Remove any non-alpha characters (certifications like "MBA", "PMP", emojis, etc.)
  const alpha = first.replace(/[^a-zA-Z]/g, '');
  // Capitalize first letter, lowercase the rest
  return alpha.charAt(0).toUpperCase() + alpha.slice(1).toLowerCase();
}

function loadJSON(file) {
  if (!fs.existsSync(file)) return [];
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function saveJSON(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

function alreadyProcessed(apolloId) {
  return loadJSON(PROCESSED_FILE).includes(apolloId);
}

function markProcessed(apolloId) {
  const processed = loadJSON(PROCESSED_FILE);
  processed.push(apolloId);
  saveJSON(PROCESSED_FILE, processed);
}

function isConstructionCompany(org) {
  if (!org) return false;

  const name = (org.name || '').toLowerCase();
  const industry = (org.industry || '').toLowerCase();
  const keywords = (org.keywords || []).join(' ').toLowerCase();
  const combined = `${name} ${industry} ${keywords}`;

  // Hard exclude by keyword
  if (EXCLUDED_KEYWORDS.some((kw) => combined.includes(kw))) return false;

  // Hard exclude by industry — if Apollo tells us it's clearly non-construction, reject it
  if (industry && EXCLUDED_INDUSTRIES.some((ex) => industry.includes(ex))) return false;

  // Pass if Apollo industry field matches
  if (industry && CONSTRUCTION_INDUSTRIES.some((i) => industry.includes(i))) return true;

  // Pass if construction keyword in company name
  if (CONSTRUCTION_KEYWORDS.some((kw) => name.includes(kw))) return true;

  // Pass if construction keyword in Apollo tags
  if (CONSTRUCTION_KEYWORDS.some((kw) => keywords.includes(kw))) return true;

  // No industry? Only pass if there's a construction keyword in the name or tags
  // (removed the blanket "no industry = pass" fallback — it lets in garbage)
  return false;
}

// ─── Apollo: Search (no credits) ─────────────────────────────────────────────

async function searchContacts(triggerRole) {
  const body = {
    q_organization_job_titles: [triggerRole],
    organization_locations: TIER_1_STATES,
    organization_num_employees_ranges: [`${ICP.minEmployees},${ICP.maxEmployees}`],
    person_titles: CONTACT_TARGETS[triggerRole],
    organization_job_posted_at_range: {
      min: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString().split('T')[0],
    },
    per_page: 25,
    page: 1,
  };

  const res = await fetch('https://api.apollo.io/api/v1/mixed_people/api_search', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'x-api-key': process.env.APOLLO_API_KEY,
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();
  if (!res.ok) {
    console.error(`Apollo search error for "${triggerRole}":`, data);
    return [];
  }

  return data.people || [];
}

// ─── Apollo: Enrich (uses export credits) ────────────────────────────────────

async function enrichContact(apolloId) {
  const res = await fetch('https://api.apollo.io/api/v1/people/bulk_match', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.APOLLO_API_KEY,
    },
    body: JSON.stringify({
      details: [{ id: apolloId }],
      reveal_personal_emails: false,
      reveal_phone_number: false,
    }),
  });

  const data = await res.json();
  if (!res.ok) {
    console.error('Apollo enrichment error:', data);
    return null;
  }

  return data.matches?.[0] || null;
}

// ─── Claude ───────────────────────────────────────────────────────────────────
// Generates ONLY the {{companyInsight}} variable — one or two sentences.
// The full email sequence is hardcoded in Lemlist. This just fills the blank.

async function generateCompanyInsight(contact) {
  const prompt = `
You are filling in the {{companyInsight}} variable for a cold outreach email sequence.

This must be ONE sentence or TWO short sentences MAX. It drops into an email as a standalone observation.
It must be specific enough that the reader thinks "they actually did their homework."

Company: ${contact.company}
Industry: ${contact.industry || 'construction'}
Size: ~${contact.companySize || 'unknown'} employees
Location: ${contact.city || ''}, ${contact.state || ''}
They are actively hiring: ${contact.triggerRole}

Rules:
- If you can find something specific (growth, new markets, project wins, hiring patterns) — use it.
- If not, write a sharp observation about hiring for ${contact.triggerRole} in the ${contact.city || contact.state || 'current'} market right now.
- NEVER be generic ("You're a growing construction company" is not an insight).
- NEVER flatter ("You've built an impressive organization" tells them nothing).
- NEVER fabricate. If unsure, use the market observation.
- No more than two sentences. No filler.
- No em dashes. Write like a person talks. Short, punchy, matter of fact.

Output the insight only. No quotes, no labels, no explanation.
  `.trim();

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 100,
      messages: [{ role: 'user', content: prompt }],
    }),
  });

  const data = await res.json();
  return data.content?.[0]?.text?.trim() || null;
}

// ─── Slack ────────────────────────────────────────────────────────────────────

async function postToSlack(text) {
  const res = await fetch('https://slack.com/api/chat.postMessage', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.SLACK_BOT_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ channel: process.env.SLACK_CHANNEL_ID, text }),
  });
  const data = await res.json();
  return data.ts;
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function run() {
  console.log('🔍 Flowstate BD Agent —', new Date().toISOString());

  // Load Dream 100 exclusion list fresh from Google Sheet
  console.log('\n  Loading Dream 100 exclusion list...');
  const dream100 = await loadDream100();
  console.log(`  ${dream100.companies.size} companies on Dream 100 list`);

  const pending = loadJSON(PENDING_FILE);
  const newContacts = [];
  const dream100Hits = [];

  for (const triggerRole of TRIGGER_ROLES) {
    if (newContacts.length >= MAX_CONTACTS_PER_RUN) break;

    console.log(`\n  Searching: "${triggerRole}"`);
    const results = await searchContacts(triggerRole);
    console.log(`  Found ${results.length} candidates`);

    for (const person of results) {
      if (newContacts.length >= MAX_CONTACTS_PER_RUN) break;
      if (alreadyProcessed(person.id)) continue;

      // Pre-filter by company name before spending enrichment credits
      const companyName = (person.organization?.name || '').toLowerCase();
      if (EXCLUDED_KEYWORDS.some((kw) => companyName.includes(kw))) {
        console.log(`  Pre-filtered ${person.organization?.name} — excluded industry`);
        markProcessed(person.id);
        continue;
      }

      // Enrich to get full details (uses credits) — wait 4s to stay under rate limit
      console.log(`  Enriching ${person.first_name} at ${person.organization?.name}...`);
      await new Promise((r) => setTimeout(r, 4000));
      const enriched = await enrichContact(person.id);
      if (!enriched) continue;

      const contact = {
        apolloId: person.id,
        firstName: cleanFirstName(enriched.first_name),
        lastName: enriched.last_name,
        name: enriched.name,
        title: enriched.title,
        email: enriched.email,
        emailStatus: enriched.email_status,
        linkedinUrl: enriched.linkedin_url,
        city: enriched.city,
        state: enriched.state,
        company: enriched.organization?.name,
        companyDomain: enriched.organization?.primary_domain,
        companySize: enriched.organization?.estimated_num_employees,
        industry: enriched.organization?.industry,
        triggerRole,
      };

      // Check Dream 100 — alert but don't cold outreach
      if (isDream100(contact, dream100)) {
        console.log(`  ⭐ ${contact.company} is on Dream 100 — flagging, not cold emailing`);
        dream100Hits.push(contact);
        markProcessed(person.id);
        continue;
      }

      // Skip non-construction companies
      if (!isConstructionCompany(enriched.organization)) {
        console.log(`  Skipping ${enriched.organization?.name} — not a pure construction company (industry: ${enriched.organization?.industry})`);
        markProcessed(person.id);
        continue;
      }

      // Skip if no verified email
      if (!enriched.email) {
        console.log(`  Skipping ${enriched.name} — no email found`);
        markProcessed(person.id);
        continue;
      }

      newContacts.push({
        apolloId: person.id,
        firstName: enriched.first_name,
        lastName: enriched.last_name,
        name: enriched.name,
        title: enriched.title,
        email: enriched.email,
        emailStatus: enriched.email_status,
        linkedinUrl: enriched.linkedin_url,
        city: enriched.city,
        state: enriched.state,
        company: enriched.organization?.name,
        companyDomain: enriched.organization?.primary_domain,
        companySize: enriched.organization?.estimated_num_employees,
        industry: enriched.organization?.industry,
        triggerRole,
        roleChallenge: ROLE_CHALLENGE[triggerRole] || '',
      });

      await new Promise((r) => setTimeout(r, 500));
    }
  }

  // Send Dream 100 alerts if any
  if (dream100Hits.length > 0) {
    console.log(`\n⭐ Sending Dream 100 alert for ${dream100Hits.length} companies...`);
    await postDream100Alert(dream100Hits);
  }

  if (newContacts.length === 0) {
    console.log('\nNo new cold BD contacts found.');
    return;
  }

  console.log(`\n📬 Processing ${newContacts.length} contacts...`);

  await postToSlack(
    `:fire: *Flowstate BD — Daily Digest*\n${newContacts.length} new contact${newContacts.length > 1 ? 's' : ''} ready for review\n\nReply *yes all* / *no all* or *yes 1*, *no 2*, etc.`
  );

  for (let i = 0; i < newContacts.length; i++) {
    const contact = newContacts[i];
    const index = i + 1;

    console.log(`  [${index}] ${contact.name} at ${contact.company} — ${contact.email}`);

    const companyInsight = await generateCompanyInsight(contact);
    contact.companyInsight = companyInsight;
    contact.jobLocation = [contact.city, contact.state].filter(Boolean).join(', ');

    const slackText = [
      `*${index}. Cold BD — ${contact.company}*`,
      `:bust_in_silhouette: ${contact.name}, ${contact.title}`,
      `:e-mail: ${contact.email} _(${contact.emailStatus})_`,
      `:dart: Trigger: *${contact.triggerRole}* in ${contact.jobLocation}`,
      ``,
      `:bulb: *companyInsight:* ${companyInsight}`,
      `:speech_balloon: *roleChallenge:* _${contact.roleChallenge}_`,
      ``,
      `Reply *yes ${index}* to approve or *no ${index}* to skip`,
    ].join('\n');

    const slackTs = await postToSlack(slackText);
    contact.slackTs = slackTs;
    contact.slackIndex = index;
    contact.status = 'pending';
    contact.addedAt = new Date().toISOString();

    pending.push(contact);
    markProcessed(contact.apolloId);

    await new Promise((r) => setTimeout(r, 1000));
  }

  saveJSON(PENDING_FILE, pending);
  console.log(`\n✅ Done. ${newContacts.length} contacts posted to Slack.`);
}

run().catch(console.error);
