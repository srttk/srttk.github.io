const ghpages = require('gh-pages');


const d = new Date();

const consoleMessage = process.argv[2] || 'Site updates ';

const message = `${consoleMessage}, :rocket: Build  : ${d.toJSON()}`;

const options = {
    message: message,
    branch: 'master',
    repo: 'https://github.com/saratonite/saratonite.github.io.git'

}

ghpages.publish('./out', options, function(err) {
    if(err) {
        console.log(err);
        console.log(`😠😠😠 Something went wrong 😭`)
        return;
    }
    console.log('▶ Site Published 🚀 🔥🔥🔥 ')
})