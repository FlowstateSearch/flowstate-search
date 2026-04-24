import "dotenv/config";
import express from "express";
import { createServer } from "http";
import net from "net";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { registerOAuthRoutes } from "./oauth";
import { appRouter } from "../routers";
import { createContext } from "./context";
import { serveStatic, setupVite } from "./vite";

function isPortAvailable(port: number): Promise<boolean> {
  return new Promise(resolve => {
    const server = net.createServer();
    server.listen(port, () => {
      server.close(() => resolve(true));
    });
    server.on("error", () => resolve(false));
  });
}

async function findAvailablePort(startPort: number = 3000): Promise<number> {
  for (let port = startPort; port < startPort + 20; port++) {
    if (await isPortAvailable(port)) {
      return port;
    }
  }
  throw new Error(`No available port found starting from ${startPort}`);
}

async function startServer() {
  const app = express();
  const server = createServer(app);
  // Configure body parser with larger size limit for file uploads
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));
  // OAuth callback under /api/oauth/callback
  registerOAuthRoutes(app);
  // tRPC API
  app.use(
    "/api/trpc",
    createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );
  // SSR debug endpoint — shows what paths the server resolves in production
  app.get("/api/ssr-debug", async (_req, res) => {
    try {
      const { default: pathMod } = await import("path");
      const { default: fsMod } = await import("fs");
      const dirname = import.meta.dirname;
      const entryServerPath = pathMod.resolve(dirname, "entry-server.js");
      const distPublicPath = pathMod.resolve(dirname, "public");
      const indexHtmlPath = pathMod.resolve(distPublicPath, "index.html");
      res.json({
        dirname,
        entryServerPath,
        entryServerExists: fsMod.existsSync(entryServerPath),
        distPublicPath,
        indexHtmlExists: fsMod.existsSync(indexHtmlPath),
        nodeEnv: process.env.NODE_ENV,
        distContents: fsMod.existsSync(dirname) ? fsMod.readdirSync(dirname) : [],
      });
    } catch (e: unknown) {
      res.json({ error: (e as Error).message });
    }
  });

  // development mode uses Vite, production mode uses static files
  if (process.env.NODE_ENV === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const preferredPort = parseInt(process.env.PORT || "3000");
  const port = await findAvailablePort(preferredPort);

  if (port !== preferredPort) {
    console.log(`Port ${preferredPort} is busy, using port ${port} instead`);
  }

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
