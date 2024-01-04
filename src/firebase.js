
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
const firebaseConfig = {
    apiKey: "AIzaSyBY0ngPmPxcr_lAQmf_I3kJO7D-iSAeSYM",
  authDomain: "imdb-clonep.firebaseapp.com",
  projectId: "imdb-clonep",
  storageBucket: "imdb-clonep.appspot.com",
  messagingSenderId: "661661134952",
  appId: "1:661661134952:web:a941a21ed58e9f9a2acbdd"
};
const app = firebase.initializeApp(firebaseConfig);

const auth = app.auth();
const firestore = app.firestore();

export { auth, firestore, firebase as default };
