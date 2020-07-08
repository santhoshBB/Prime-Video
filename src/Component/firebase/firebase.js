import firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDZlidg5hBJ8elM5oY6y31OqpL5Nf2d1jc",
  authDomain: "prime-97393.firebaseapp.com",
  databaseURL: "https://prime-97393.firebaseio.com",
  projectId: "prime-97393",
  storageBucket: "prime-97393.appspot.com",
  messagingSenderId: "754676702364",
  appId: "1:754676702364:web:e2e4102b30fecc5241a159",
  measurementId: "G-HQBF94PWTM",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
