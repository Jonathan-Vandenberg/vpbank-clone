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
    ],
  },
};

module.exports = nextConfig;
