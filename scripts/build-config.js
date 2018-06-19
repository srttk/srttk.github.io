const fs = require('fs')
const path = require('path');

let textdata = `
export default {
    apiKey: "${process.env.apiKey}",
    authDomain: "${process.env.authDomain}",
    databaseURL: "${process.env.databaseURL}",
    projectId: "${process.env.projectId}",
    storageBucket: "${process.env.storageBucket}",
    messagingSenderId: "${process.env.messagingSenderId}"
  }
`
fs.writeFileSync(path.join(__dirname,'../config/firebase.config.js'), textdata)