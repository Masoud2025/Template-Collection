import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Bypass the built-in optimizer so remote posters load directly in the
    // browser (no server-side fetch of images.unsplash.com required).
    unoptimized: true,
    qualities: [25, 50, 75, 80, 90, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      // در صورت استفاده از دامنه‌های دیگر، آن‌ها را به همین شکل اضافه کنید
      // مثال:
      // {
      //   protocol: "https",
      //   hostname: "example.com",
      //   port: "",
      //   pathname: "/**",
      // },
    ],
  },
};

export default nextConfig;