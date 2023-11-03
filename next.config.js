/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  generateEtags: true,
  poweredByHeader: true,
  images: {
    domains: [],
  },
};

module.exports = nextConfig;
