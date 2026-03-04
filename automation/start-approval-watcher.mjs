/**
 * Flowstate Approval Watcher
 * Polls Slack every 3 minutes and auto-processes yes/no replies.
 * Run once in the morning: node --env-file=.env automation/start-approval-watcher.mjs
 * Leave it running in the background. Ctrl+C to stop.
 */

import { execSync } from 'child_process';

const POLL_INTERVAL_MS = 3 * 60 * 1000; // 3 minutes

console.log('👀 Approval watcher started — checking Slack every 3 minutes.');
console.log('   Press Ctrl+C to stop.\n');

async function check() {
  try {
    const output = execSync(
      'node --env-file=.env automation/check-approvals.mjs',
      { cwd: process.cwd(), encoding: 'utf8' }
    );
    // Only print if something actually happened
    if (output.includes('Pushed') || output.includes('Skipped')) {
      console.log(output.trim());
    }
  } catch (err) {
    console.error('Watcher error:', err.message);
  }
}

// Run once immediately, then every 3 minutes
await check();
setInterval(check, POLL_INTERVAL_MS);
