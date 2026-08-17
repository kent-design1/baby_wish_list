import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.111"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "m.media-amazon.com" },
      { protocol: "https", hostname: "images-na.ssl-images-amazon.com" },
      { protocol: "https", hostname: "*.amazonaws.com" },
      { protocol: "https", hostname: "i8.amplience.net" },
      { protocol: "https", hostname: "*.amplience.net" },
      { protocol: "https", hostname: "*.galaxus.com" },
      { protocol: "https", hostname: "*.orchestra.ch" },
      { protocol: "https", hostname: "owletcare.ch" },
    ],
  },
};

export default nextConfig;