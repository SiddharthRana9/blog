// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "fir-1fb2e.firebaseapp.com",
  projectId: "fir-1fb2e",
  storageBucket: "fir-1fb2e.firebasestorage.app",
  messagingSenderId: "854974467920",
  appId: "1:854974467920:web:e3440880fd11a45d832655"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

