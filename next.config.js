/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: "/nextjs-pages",
  assetPrefix: "/nextjs-pages",
}

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? '/react-portfolio/' : '',
  images: {
    unoptimized: true,
  },
}
