const withSass = require('@zeit/next-sass');
const githubAssetUrl = "https://raw.githubusercontent.com/saratonite/saratonite.github.io/30ffd095/";

const isProduction = true;

module.exports = withSass({
    exportPathMap: function() {

        return {
            '/': { page: '/' }
        }
    },
    assetPrefix: isProduction ?  '' : githubAssetUrl
});