import firebase from "firebase/app";
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBOa0QvtCzkvXZsjxubSMML97gFId8H7sA",
  authDomain: "pokemon-game-1ffd8.firebaseapp.com",
  databaseURL: "https://pokemon-game-1ffd8-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pokemon-game-1ffd8",
  storageBucket: "pokemon-game-1ffd8.appspot.com",
  messagingSenderId: "681582125262",
  appId: "1:681582125262:web:4cd69385ece8a6f3c0709f"
};

firebase.initializeApp(firebaseConfig);
export const fire = firebase;
export const database = fire.database();

export default database;

