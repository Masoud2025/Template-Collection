// app/sw.ts
import { installSerwist } from "@serwist/sw";
import type { PrecacheEntry, RuntimeCaching } from "serwist";
import {
  CacheFirst,
  NetworkFirst,
  StaleWhileRevalidate,
  ExpirationPlugin,
} from "serwist";

interface ServiceWorkerGlobalScope {
  __SW_MANIFEST: (PrecacheEntry | string)[] | undefined;
  location: { origin: string };
  addEventListener: (type: string, listener: (event: unknown) => void) => void;
  skipWaiting: () => void;
  clients: { claim: () => void };
}

declare const self: ServiceWorkerGlobalScope;

const runtimeCaching: RuntimeCaching[] = [
  {
    matcher: ({ request }) => request.destination === "image",
    handler: new CacheFirst({
      cacheName: "images",
      plugins: [
        new ExpirationPlugin({
          maxEntries: 100,
          maxAgeSeconds: 60 * 60 * 24 * 30,
        }),
      ],
    }),
  },
  {
    matcher: ({ request }) =>
      request.destination === "script" || request.destination === "style",
    handler: new StaleWhileRevalidate({
      cacheName: "static-resources",
      plugins: [
        new ExpirationPlugin({
          maxEntries: 100,
          maxAgeSeconds: 60 * 60 * 24 * 7,
        }),
      ],
    }),
  },
  {
    matcher: ({ url }) => url.origin === self.location.origin,
    handler: new NetworkFirst({
      cacheName: "pages",
      plugins: [
        new ExpirationPlugin({
          maxEntries: 50,
          maxAgeSeconds: 60 * 60 * 24 * 7,
        }),
      ],
    }),
  },
];

installSerwist({
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  runtimeCaching,
});
