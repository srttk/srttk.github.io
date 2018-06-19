const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
import config from '../config/firebase.config';

if (!firebase.apps.length) { 

    firebase.initializeApp(config)

}
  const firestore = firebase.firestore();
  const settings = {/* your settings... */ timestampsInSnapshots: true};
  firestore.settings(settings);

  export const db = firestore;