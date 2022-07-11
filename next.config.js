/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost"],
  },
  sassOptions: {
    prependData: `@use "/styles/variables" as *;`, // ON PRODUCTION CHANGE ON /styles/variables!!!
  },
}

module.exports = nextConfig
