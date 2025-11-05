import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.canva.com",
      },
      {
        protocol: "https",
        hostname: "static.canva.com",
      },
      {
        protocol: "https",
        hostname: "images.canva.com",
      },
    ],
  },
};

export default nextConfig;
