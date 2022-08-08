import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkKOMVw-yyXoVRXwaEpMo11mPJVzWXnhQ",
  authDomain: "blog-site-192d4.firebaseapp.com",
  projectId: "blog-site-192d4",
  storageBucket: "blog-site-192d4.appspot.com",
  messagingSenderId: "975276323956",
  appId: "1:975276323956:web:8f89c2319a0a3a3e830d21",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const projectFirestore = firebase.firestore();

export { projectFirestore };
