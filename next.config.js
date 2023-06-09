/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "drive.google.com",
      "https://*.google.com/"
      // "loremflickr.com",
      // "images.unsplash.com",
      // "images.dog.ceo",
    ],
  },
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    // ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;