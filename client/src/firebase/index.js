import firebase from 'firebase/app';
import 'firebase/storage';

var config = {
    apiKey: process.env.FIREBASE_API,
    authDomain: "skizzl-67005.firebaseapp.com",
    databaseURL: "https://skizzl-67005.firebaseio.com",
    projectId: "skizzl-67005",
    storageBucket: "",
    messagingSenderId: "293295609965"
  };
  firebase.initializeApp(config);

  const storage = firebase.storage();

  export {
      storage, firebase as default
  }