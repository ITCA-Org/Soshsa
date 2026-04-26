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
      },

      {
        protocol: "https",
        hostname: "file-service-1t33.onrender.com"
      },

      {
        protocol: "https",
        hostname: "eonnzdktmvtutiuodhsz.supabase.co"
      }
    ],
  },
};

export default nextConfig;