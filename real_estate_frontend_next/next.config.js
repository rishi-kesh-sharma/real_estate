/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["localhost"],
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: "/public",
  },
  async redirects() {
    return [
      {
        source: "/dashboard",
        destination: "/dashboard/profile",
        permanent: true,
      },
    ];
  },
};
module.exports = {};
