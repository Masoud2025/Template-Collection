import type { NextConfig } from "next";
import withSerwist from "@serwist/next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Keep this if you want to bypass Next.js image optimization (useful for external images)
    qualities: [25, 50, 75, 80, 90, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

// Wrap the config with Serwist
export default withSerwist({
  swSrc: "app/sw.ts",       // Path to your Service Worker source file
  swDest: "public/sw.js",   // Output path for the built Service Worker
})(nextConfig);