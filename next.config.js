// /** @type {import('next').NextConfig} */

// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig

const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer()({
  poweredByHeader: process.env.NODE_ENV === 'development',
  reactStrictMode: process.env.NODE_ENV === 'development'
});