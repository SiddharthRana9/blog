// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-214c3.firebaseapp.com",
  projectId: "blog-214c3",
  storageBucket: "blog-214c3.appspot.com",
  messagingSenderId: "543278153676",
  appId: "1:543278153676:web:0ac96f0c9fcd8bdae7a769"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

