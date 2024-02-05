import nextMDX from "@next/mdx";
import withPWA from "next-pwa";
const isProduction = process.env.NODE_ENV === "production";
import runtimeCaching from "next-pwa/cache.js";

const withMDX = nextMDX({
  options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  experimental: {
    scrollRestoration: true,
  },
};

const nextMdxConfig = withMDX(
  withPWA({
    dest: "public",
    disable: !isProduction,
    runtimeCaching,
  })(nextConfig)
);

export default nextMdxConfig;
