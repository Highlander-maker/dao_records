/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["2549163913-files.gitbook.io", "cdn.sanity.io"],
  },
};

module.exports = nextConfig;
