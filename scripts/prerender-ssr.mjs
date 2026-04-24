/**
 * Build-time SSR pre-render script
 * 
 * This script:
 * 1. Reads the built index.html from dist/public
 * 2. Uses Vite's SSR build to render each route to HTML string
 * 3. Injects the rendered HTML into the template
 * 4. Saves each route as dist/public/<route>/index.html
 * 
 * Runs after `vite build` as part of `pnpm build`.
 */

import { createServer } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const distPublic = path.resolve(projectRoot, "dist/public");

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

  // Read the built index.html template
  const templatePath = path.resolve(distPublic, "index.html");
  if (!fs.existsSync(templatePath)) {
    console.error("dist/public/index.html not found. Run vite build first.");
    process.exit(1);
  }
  const template = fs.readFileSync(templatePath, "utf-8");

  // Create a Vite dev server in SSR mode to load the entry-server module
  const vite = await createServer({
    root: path.resolve(projectRoot, "client"),
    server: { middlewareMode: true },
    appType: "custom",
    plugins: [react({ jsxRuntime: "automatic" })],
    resolve: {
      alias: {
        "@": path.resolve(projectRoot, "client", "src"),
        "@shared": path.resolve(projectRoot, "shared"),
        "@assets": path.resolve(projectRoot, "attached_assets"),
      },
    },
    envDir: projectRoot,
    logLevel: "silent",
  });

  let successCount = 0;
  let errorCount = 0;

  for (const route of routes) {
    try {
      // Load the SSR entry module fresh for each route
      const { render } = await vite.ssrLoadModule(
        path.resolve(projectRoot, "client/src/entry-server.tsx")
      );

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

  await vite.close();

  console.log(`\nPre-render complete: ${successCount} succeeded, ${errorCount} failed`);
  
  if (errorCount > 0) {
    process.exit(1);
  }
}

main().catch((err) => {
  console.error("Pre-render failed:", err);
  process.exit(1);
});
