/**
 * SSR Entry Point
 * Used by the build-time pre-render script to generate static HTML for each route.
 * This file is loaded via Vite's ssrLoadModule and run in Node.js.
 */
import React from "react";
import { renderToString } from "react-dom/server";
import { useSyncExternalStore } from "react";
import { Router } from "wouter";
import { ThemeProvider } from "./contexts/ThemeContext";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "./components/Layout";
import RouterContent from "./RouterContent";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { trpc } from "@/lib/trpc";
import { httpBatchLink } from "@trpc/client";
import superjson from "superjson";

/**
 * SSR-safe location hook for wouter.
 * Provides getServerSnapshot so React's SSR renderToString doesn't throw.
 */
function makeStaticLocationHook(path: string) {
  const hook = (): [string, (to: string) => void] => {
    const location = useSyncExternalStore(
      () => () => {}, // subscribe: no-op (static, never changes)
      () => path,     // getSnapshot (client)
      () => path      // getServerSnapshot (server) — this is the key fix
    );
    return [location, () => {}]; // navigate is a no-op in SSR
  };
  return hook;
}

export function render(url: string): string {
  const hook = makeStaticLocationHook(url);

  // Create a fresh QueryClient and tRPC client for each SSR render
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        staleTime: Infinity,
      },
    },
  });

  const trpcClient = trpc.createClient({
    links: [
      httpBatchLink({
        url: "http://localhost:3000/api/trpc",
        transformer: superjson,
      }),
    ],
  });

  const html = renderToString(
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="light">
          <TooltipProvider>
            <Router hook={hook}>
              <Layout>
                <RouterContent />
              </Layout>
            </Router>
          </TooltipProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </trpc.Provider>
  );

  return html;
}
