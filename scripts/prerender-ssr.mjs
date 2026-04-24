/**
 * Build-time SSR pre-render script
 *
 * Uses vite build --ssr to compile entry-server.tsx to a Node.js bundle,
 * then imports and runs it to render all public routes to static HTML.
 * This approach works in cloud build environments (no dev server required).
 */

import { build } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";
import { fileURLToPath, pathToFileURL } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const distPublic = path.resolve(projectRoot, "dist/public");
const distServer = path.resolve(projectRoot, "dist/server");

// All public routes to pre-render
const routes = [
  "/",
  "/how-it-works",
  "/why-flowstate",
  "/start-search",
  "/contact",
  "/terms",
  "/privacy",
  "/llm-resources",
  "/community",
  "/insights",
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

async function main() {
  console.log("Starting SSR pre-render...");

  // Step 1: Check that the client build exists
  const templatePath = path.resolve(distPublic, "index.html");
  if (!fs.existsSync(templatePath)) {
    console.error("dist/public/index.html not found. Run vite build first.");
    process.exit(1);
  }
  const template = fs.readFileSync(templatePath, "utf-8");

  // Step 2: Compile entry-server.tsx to a Node.js ESM bundle (no dev server needed)
  console.log("Compiling SSR bundle...");
  await build({
    root: path.resolve(projectRoot, "client"),
    plugins: [react({ jsxRuntime: "automatic" })],
    resolve: {
      alias: {
        "@": path.resolve(projectRoot, "client", "src"),
        "@shared": path.resolve(projectRoot, "shared"),
        "@assets": path.resolve(projectRoot, "attached_assets"),
      },
    },
    envDir: projectRoot,
    logLevel: "warn",
    build: {
      ssr: "./src/entry-server.tsx",
      outDir: distServer,
      emptyOutDir: true,
      rollupOptions: {
        input: path.resolve(projectRoot, "client/src/entry-server.tsx"),
      },
    },
  });

  // Step 3: Import the compiled SSR bundle
  const ssrBundlePath = pathToFileURL(path.resolve(distServer, "entry-server.js")).href;
  const { render } = await import(ssrBundlePath);

  // Step 4: Render each route and save to dist/public
  let successCount = 0;
  let errorCount = 0;

  for (const route of routes) {
    try {
      const appHtml = render(route);

      // Inject rendered HTML into the template
      const html = template.replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div>`
      );

      // Determine output path
      const routePath = route === "/" ? "/index" : route;
      const outDir = path.resolve(distPublic, `.${routePath}`);
      const outFile = path.resolve(outDir, "index.html");

      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(outFile, html, "utf-8");

      const sizeKb = Math.round(html.length / 1024);
      console.log(`✓ ${route} → ${outFile.replace(projectRoot, "")} (${sizeKb}KB)`);
      successCount++;
    } catch (err) {
      console.error(`✗ ${route}: ${err.message}`);
      errorCount++;
    }
  }

  console.log(`\nPre-render complete: ${successCount} succeeded, ${errorCount} failed`);

  if (errorCount > 0) {
    process.exit(1);
  }
}

main().catch((err) => {
  console.error("Pre-render failed:", err);
  process.exit(1);
});
