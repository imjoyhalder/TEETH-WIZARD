// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBS-eBSsPRGbrzJPfuorJIGKoOBvx3M5VA",
  authDomain: "unique-project-5f9a8.firebaseapp.com",
  projectId: "unique-project-5f9a8",
  storageBucket: "unique-project-5f9a8.firebasestorage.app",
  messagingSenderId: "477129964761",
  appId: "1:477129964761:web:1661070eacbf308c7112c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)