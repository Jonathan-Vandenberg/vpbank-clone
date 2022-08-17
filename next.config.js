/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "picsum.photos",
      "tailwindcss.com",
      "trolyao.vpbank.com.vn",
      "openweathermap.org",
      "localhost",
    ],
  },
};

module.exports = {
  basePath: "/vpbank-clone",
};

const withImages = require("next-images");
module.exports = withImages();

module.exports = nextConfig;
