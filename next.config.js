const isProd = process.env.NODE_ENV === 'production'
const githubAssetUrl = "https://cdn.jsdelivr.net/gh/saratonite/saratonite.github.io@master";

console.log("isProd ", isProd)

module.exports = {
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? githubAssetUrl : undefined,
}
