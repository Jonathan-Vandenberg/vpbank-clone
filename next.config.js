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

const securityHeaders = [
  // This header controls DNS prefetching, allowing browsers to proactively perform domain name resolution on external links, images, CSS, JavaScript, and more.
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  // This header stops pages from loading when they detect reflected cross-site scripting (XSS) attacks.
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  // This can prevent against clickjacking attacks.
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
];

module.exports = {
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = {
  basePath: "/vpbank-clone",
};

module.exports = (phase, defaultConfig) => {
  return withBundleAnalyzer(defaultConfig);
};

const withImages = require("next-images");
module.exports = withImages();

module.exports = nextConfig;
