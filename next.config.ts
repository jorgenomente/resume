import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Force Turbopack to treat this directory as the workspace root to avoid
  // accidentally roaming up to other lockfiles in the user's home folder.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
