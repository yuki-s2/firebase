import React from 'react';
import "firebase/compat/auth";
import firebase from "firebase/compat/app";
import { auth } from '../firebase.js';

function SignIn() {
    function signInGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
  return (
    <div>
        <button onClick={signInGoogle}>ログイン</button>
    </div>
  );
}

export default SignIn