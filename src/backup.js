//import * as firebase from "firebase";
import firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKcdSSnbDBg0jihdG7GK7DLMoN3ZOtMyM",
  authDomain: "ecommerce-62143.firebaseapp.com",
  projectId: "ecommerce-62143",
  storageBucket: "ecommerce-62143.appspot.com",
  messagingSenderId: "1052441438546",
  appId: "1:1052441438546:web:62c0a575c6636bc90f728b",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
