// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbg1THCjHy548F1SeQkKQtN2mvd50yRuQ",
  authDomain: "awaaz-60b55.firebaseapp.com",
  projectId: "awaaz-60b55",
  storageBucket: "awaaz-60b55.firebasestorage.app",
  messagingSenderId: "853057756824",
  appId: "1:853057756824:web:86413518969b5d2a7e7aed",
  measurementId: "G-0FWH0NPJ02"
};

// Initialize Firebase
const app =  !getApps.length?initializeApp(firebaseConfig):getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);