import express, { type Express } from "express";
import fs from "fs";
import { type Server } from "http";
import { nanoid } from "nanoid";
import path from "path";
import { createServer as createViteServer } from "vite";
import viteConfig from "../../vite.config";

export async function setupVite(app: Express, server: Server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "../..",
        "client",
        "index.html"
      );

      // always reload the index.html file from disk incase it changes
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

// SSR renderer state
type SsrRenderer = {
  render: (url: string) => string;
  template: string;
} | null;

// Store the loading promise so all requests can await it
let ssrRendererPromise: Promise<SsrRenderer> | null = null;

async function loadSsrRenderer(distPath: string): Promise<SsrRenderer> {
  const entryServerPath = path.resolve(import.meta.dirname, "entry-server.js");
  const templatePath = path.resolve(distPath, "index.html");

  if (!fs.existsSync(entryServerPath)) {
    console.warn("[SSR] entry-server.js not found at", entryServerPath, "- SSR disabled");
    return null;
  }
  if (!fs.existsSync(templatePath)) {
    console.warn("[SSR] index.html not found at", templatePath, "- SSR disabled");
    return null;
  }

  try {
    const mod = await import(entryServerPath);
    if (typeof mod.render !== "function") {
      console.error("[SSR] entry-server.js has no render export");
      return null;
    }
    const template = fs.readFileSync(templatePath, "utf-8");
    console.log("[SSR] Renderer loaded successfully from", entryServerPath);
    return { render: mod.render, template };
  } catch (e) {
    console.error("[SSR] Failed to load renderer:", (e as Error).message);
    return null;
  }
}

export function serveStatic(app: Express) {
  const distPath =
    process.env.NODE_ENV === "development"
      ? path.resolve(import.meta.dirname, "../..", "dist", "public")
      : path.resolve(import.meta.dirname, "public");

  if (!fs.existsSync(distPath)) {
    console.error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }

  // Start loading the SSR renderer immediately — store the Promise
  // so request handlers can await it instead of racing against it
  ssrRendererPromise = loadSsrRenderer(distPath);

  // Serve static assets (JS, CSS, images) directly
  app.use(express.static(distPath));

  // For all HTML page requests, await the renderer then SSR or fall back
  app.use("*", async (req, res) => {
    const templatePath = path.resolve(distPath, "index.html");

    // Await the renderer — this resolves immediately after first load
    const renderer = await ssrRendererPromise;

    if (renderer) {
      try {
        const url = req.path;
        const appHtml = renderer.render(url);
        const html = renderer.template.replace(
          '<div id="root"></div>',
          `<div id="root">${appHtml}</div>`
        );
        return res.status(200).set({ "Content-Type": "text/html" }).end(html);
      } catch (e) {
        console.error("[SSR] Render error for", req.path, ":", (e as Error).message);
        // Fall through to plain index.html
      }
    }

    // Fallback: serve empty shell (client-side rendering)
    res.sendFile(templatePath);
  });
}
