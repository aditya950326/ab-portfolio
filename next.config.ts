import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    // Allow any local static images served from /public
    localPatterns: [
      {
        pathname: "/**",
      },
      {
        pathname: "/academics/**",
      },
      {
        pathname: "/images/**",
      },
      {
        pathname: "/certifications/**",
      },
    ],
  },
};

export default nextConfig;
