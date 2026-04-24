/**
 * Pre-render script for Flowstate Search
 *
 * Starts the production server, visits each public route with a headless browser,
 * waits for React to fully render, then saves the resulting HTML to
 * dist/public/<route>/index.html so search engines get fully rendered content.
 *
 * Usage: node scripts/prerender.mjs
 * Run after: pnpm build
 */

import puppeteer from "puppeteer";
import { spawn } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIST_PUBLIC = path.resolve(ROOT, "dist/public");

// All public routes to pre-render (skip dynamic /portal/:username and auth-gated /admin/*)
const ROUTES = [
  "/",
  "/how-it-works",
  "/why-flowstate",
  "/start-search",
  "/contact",
  "/community",
  "/insights",
  "/terms",
  "/privacy",
  "/llm-resources",
  "/blog/cost-of-bad-hire-construction",
  "/blog/construction-project-manager-salary",
  "/blog/construction-superintendent-salary",
  "/blog/how-to-find-passive-construction-candidates",
  "/blog/construction-talent-shortage-2026",
  "/blog/retained-vs-contingency-construction-recruiting",
  "/blog/construction-vp-operations-salary",
  "/construction-project-manager-recruiter",
  "/construction-superintendent-recruiter",
  "/jobs/senior-project-manager-ny",
  "/jobs/construction-project-manager-in",
  "/jobs/senior-superintendent-in",
  "/jobs/freight-broker-remote",
  "/jobs/ai-architect",
];

const PORT = 4173;
const BASE_URL = `http://localhost:${PORT}`;
const RENDER_TIMEOUT = 15000; // 15s per page

function startServer() {
  return new Promise((resolve, reject) => {
    console.log("Starting production server for pre-rendering...");
    const server = spawn("node", ["dist/index.js"], {
      cwd: ROOT,
      env: { ...process.env, NODE_ENV: "production", PORT: String(PORT) },
      stdio: ["ignore", "pipe", "pipe"],
    });

    let started = false;
    server.stdout.on("data", (data) => {
      const msg = data.toString();
      process.stdout.write(`[server] ${msg}`);
      if (!started && msg.includes("running on")) {
        started = true;
        resolve(server);
      }
    });
    server.stderr.on("data", (data) => {
      process.stderr.write(`[server:err] ${data}`);
    });
    server.on("error", reject);

    // Timeout if server doesn't start
    setTimeout(() => {
      if (!started) {
        started = true;
        resolve(server); // proceed anyway, server may have started silently
      }
    }, 8000);
  });
}

function saveHtml(route, html) {
  const routePath = route === "/" ? "/index" : route;
  const filePath = path.join(DIST_PUBLIC, routePath, "index.html");
  const dir = path.dirname(filePath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, html, "utf-8");
  console.log(`  ✓ Saved: ${filePath.replace(ROOT, "")}`);
}

async function prerenderRoute(page, route) {
  const url = `${BASE_URL}${route}`;
  try {
    await page.goto(url, { waitUntil: "networkidle0", timeout: RENDER_TIMEOUT });
    // Wait for main content to be rendered
    await page.waitForSelector("body", { timeout: 5000 }).catch(() => {});
    // Small extra wait for any deferred rendering
    await new Promise((r) => setTimeout(r, 500));
    const html = await page.content();
    saveHtml(route, html);
    return true;
  } catch (err) {
    console.error(`  ✗ Failed: ${route} — ${err.message}`);
    return false;
  }
}

async function main() {
  if (!fs.existsSync(DIST_PUBLIC)) {
    console.error(`Build directory not found: ${DIST_PUBLIC}`);
    console.error("Run 'pnpm build' first.");
    process.exit(1);
  }

  const server = await startServer();

  // Give server a moment to fully initialize
  await new Promise((r) => setTimeout(r, 3000));

  console.log(`\nLaunching headless browser...`);
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-gpu",
    ],
  });

  const page = await browser.newPage();
  // Suppress console noise from the app
  page.on("console", () => {});
  page.on("pageerror", () => {});

  console.log(`\nPre-rendering ${ROUTES.length} routes...\n`);
  let success = 0;
  let failed = 0;

  for (const route of ROUTES) {
    const ok = await prerenderRoute(page, route);
    if (ok) success++;
    else failed++;
  }

  await browser.close();
  server.kill();

  console.log(`\nPre-render complete: ${success} succeeded, ${failed} failed`);

  if (failed > 0) {
    process.exit(1);
  }
}

main().catch((err) => {
  console.error("Pre-render script failed:", err);
  process.exit(1);
});
