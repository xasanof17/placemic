/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  compress: true,
  generateEtags: true,
  poweredByHeader: true,
  images: {
    domains: [],
  },
};

module.exports = nextConfig;
