import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/personaweb",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
