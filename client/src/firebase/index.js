import firebase from 'firebase/app';
import 'firebase/storage';

var config = {
    apiKey: "AIzaSyD61Kkf-aN0IP1AAgGwKEsYeFY1rpcsCyM",
    authDomain: "skizzle-d3c48.firebaseapp.com",
    databaseURL: "https://skizzle-d3c48.firebaseio.com",
    projectId: "skizzle-d3c48",
    storageBucket: "skizzle-d3c48.appspot.com",
    messagingSenderId: "255093267529"
  };
  firebase.initializeApp(config);

  const storage = firebase.storage();

  export {
      storage, firebase as default
  }