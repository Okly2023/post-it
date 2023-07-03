// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1aycgbOPPyGit2Qe6t8o_j-m7k075xAA",
  authDomain: "post-it-16417.firebaseapp.com",
  projectId: "post-it-16417",
  storageBucket: "post-it-16417.appspot.com",
  messagingSenderId: "804632723621",
  appId: "1:804632723621:web:ba84a92c3dc0420cbe0d4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
 
