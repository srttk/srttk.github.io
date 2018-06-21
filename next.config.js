/**
 * 
 * https://github.com/zeit/next.js/wiki/Deploying-a-Next.js-app-into-GitHub-Pages
 * https://itnext.io/next-js-app-on-github-pages-768020f2b65e
 */
const webpack = require('webpack')
const withSass = require('@zeit/next-sass');
const githubAssetUrl = "https://cdn.rawgit.com/saratonite/saratonite.github.io/master/";
const env = process.env.NODE_ENV || 'dev';
console.log('ENVIRONMENT',env)
const isProduction = (env.trim() !== 'github');

console.log('isProduction',isProduction)

const TRAGET_SARATHTK_GTRACKERID = 'UA-36053418-5';
const TRAGET_GITHUBPAGE_GTRACKERID = 'UA-36053418-2';

const assetPrefix = isProduction ?  '' : githubAssetUrl;
const googleAnalyticsTrackerID = isProduction ? TRAGET_SARATHTK_GTRACKERID :TRAGET_GITHUBPAGE_GTRACKERID ;

module.exports = withSass({
    exportPathMap: function() {

        return {
            '/': { page: '/' }
        }
    },
    assetPrefix: assetPrefix,
    webpack: config => {
        config.plugins.push(
          new webpack.DefinePlugin({
            'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
            'process.env.trackerID': JSON.stringify(googleAnalyticsTrackerID)
          }),
        )
    
        return config
      },
});