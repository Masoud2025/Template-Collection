"use client";

import { SerwistProvider } from "@serwist/next/react";

export function PWAProvider({ children }: { children: React.ReactNode }) {
  return (
    <SerwistProvider
      swUrl="/sw.js"
      reloadOnOnline
      register
      options={{ scope: "/", type: "module" }}
    >
      {children}
    </SerwistProvider>
  );
}
