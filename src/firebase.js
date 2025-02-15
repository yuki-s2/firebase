import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCwl10MSlI72Q97Duo4CU1pT6iw7JZbGGo",
    authDomain: "my-recipe-b7757.firebaseapp.com",
    projectId: "my-recipe-b7757",
    storageBucket: "my-recipe-b7757.appspot.com",
    messagingSenderId: "401708231650",
    appId: "1:401708231650:web:ad349121ae9721f53f67bb"
  });
  
  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  export { db, auth };