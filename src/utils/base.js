import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const fireApp = firebase.initializeApp({
  apiKey: "AIzaSyDu-JA6Io2ZLjLwHJ5wqbSLdCRYnUIwSMU",
  authDomain: "todo-list-d3.firebaseapp.com",
  databaseURL: "https://todo-list-d3.firebaseio.com",
  projectId: "todo-list-d3",
  storageBucket: "todo-list-d3.appspot.com",
  messagingSenderId: "958372056533",
  appId: "1:958372056533:web:65c2c49cf04979a4b5c15c"
});

const db = firebase.firestore();
export { db };

export default fireApp;
