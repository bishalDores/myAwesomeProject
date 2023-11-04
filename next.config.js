/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BASE_URL: "https://reqres.in/api",
  },
  images: {
    domains: ["reqres.in"],
  },
};

module.exports = nextConfig;
