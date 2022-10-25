import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAskEKDBgdcWUi6mJl82YcX78W5e0bsHeA",
  authDomain: "linkedin-clone-45ac6.firebaseapp.com",
  projectId: "linkedin-clone-45ac6",
  storageBucket: "linkedin-clone-45ac6.appspot.com",
  messagingSenderId: "1046515184699",
  appId: "1:1046515184699:web:5a3e2ebfa2735bed24181e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
