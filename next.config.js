/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost", "tg-store-server.herokuapp.com"],
  },
  sassOptions: {
    prependData: "@use \"/styles/variables\" as *;", // ON PRODUCTION CHANGE ON /styles/variables!!!
  },
  pageExtensions: ["p.tsx"],
}

module.exports = nextConfig
