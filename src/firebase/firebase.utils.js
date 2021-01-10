import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyAIyio-Az9b4-OkBCjMswUNMyoKO4-23sw",
    authDomain: "fab-clothing.firebaseapp.com",
    projectId: "fab-clothing",
    storageBucket: "fab-clothing.appspot.com",
    messagingSenderId: "17013825496",
    appId: "1:17013825496:web:9ea21dfd626c2259915cad",
    measurementId: "G-2JKVCLRN5H"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;