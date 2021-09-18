import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyCgdMKe-7YDU3QdrcW-o7tqGAQbyvr_oFk",
  authDomain: "pokemon-game-d88cf.firebaseapp.com",
  databaseURL: "https://pokemon-game-d88cf-default-rtdb.firebaseio.com",
  projectId: "pokemon-game-d88cf",
  storageBucket: "pokemon-game-d88cf.appspot.com",
  messagingSenderId: "278969876611",
  appId: "1:278969876611:web:8bed4b75c50216355c5bb6",
};

firebase.initializeApp(firebaseConfig);

export const fire = firebase;
export const database = fire.database();

export default database;
