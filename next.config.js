/** @type {import('next').NextConfig} */

const withPreact = require("next-plugin-preact");
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = withPreact(nextConfig);
