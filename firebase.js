// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps, } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getStorage } from "firebase/syorage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "twitterfinal-8e753.firebaseapp.com",
  projectId: "twitterfinal-8e753",
  storageBucket: "twitterfinal-8e753.appspot.com",
  messagingSenderId: "874701516658",
  appId: "1:874701516658:web:a982cceb21d3ee072ef7eb",
  measurementId: "G-FGFT8NK2R6"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };