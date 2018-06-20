const withSass = require('@zeit/next-sass');
const githubAssetUrl = "https://cdn.rawgit.com/saratonite/saratonite.github.io/9db2ea2a/";

const isProduction = true;

module.exports = withSass({
    exportPathMap: function() {

        return {
            '/': { page: '/' }
        }
    },
    assetPrefix: isProduction ?  '' : githubAssetUrl
});