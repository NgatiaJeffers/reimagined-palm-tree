/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['https://source.unsplash.com', 'cdn.sanity.io'],
  }
}

module.exports = nextConfig
