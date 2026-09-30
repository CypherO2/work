import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // GitHub Pages project site: https://CypherO2.github.io/work/
  basePath: process.env.NODE_ENV === "production" ? "/work" : "",
  trailingSlash: true,
};

export default nextConfig;
