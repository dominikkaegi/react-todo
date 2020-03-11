import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCTFRvAtPrPiMUTP4Oi8gMion_jSK1gHfA",
  authDomain: "todo2-1bc55.firebaseapp.com",
  databaseURL: "https://todo2-1bc55.firebaseio.com",
  projectId: "todo2-1bc55",
  storageBucket: "todo2-1bc55.appspot.com",
  messagingSenderId: "903174892597",
  appId: "1:903174892597:web:208366efb28ce905d3957c"
});

const db = firebase.firestore();
export { db };

export default app;
