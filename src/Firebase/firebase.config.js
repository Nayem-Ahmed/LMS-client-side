// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSL4YYkoW4ZjMv_q-Vvt7rhvJhhCw4uxs",
  authDomain: "lms-48a56.firebaseapp.com",
  projectId: "lms-48a56",
  storageBucket: "lms-48a56.appspot.com",
  messagingSenderId: "835087956373",
  appId: "1:835087956373:web:ab2e9d562399ffdd43de9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;