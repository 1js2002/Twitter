// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getFireStore} from "firebase/getFireStore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "twitter-v1-324c5.firebaseapp.com",
  projectId: "twitter-v1-324c5",
  storageBucket: "twitter-v1-324c5.appspot.com",
  messagingSenderId: "146345423625",
  appId: "1:146345423625:web:2f3d9b3908bed70652d9d8"
};

// Initialize Firebase
const app = !getApp.length() ?  initializeApp(firebaseConfig) : getApp();
const db = getFireStore();
const storage = getStorage();
export {app , db, storage}