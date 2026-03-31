import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
      },

      {
        protocol: "https",
        hostname: "dgqkosobeyvqhgkpylki.supabase.co"
      }
    ],
  },
};

export default nextConfig;