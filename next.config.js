
const isProd = process.env.NODE_ENV === 'production'
const githubAssetUrl = "https://cdn.jsdelivr.net/gh/saratonite/saratonite.github.io@master";

/** @type {import('next').NextConfig} */


const nextConfig = {
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? githubAssetUrl : undefined,
  output:"export",
  distDir:"out"
}

module.exports = nextConfig
