
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpfVc3xiiNJjiezb_EgGTWHrskso7ODBw",
  authDomain: "softheart-4b801.firebaseapp.com",
  projectId: "softheart-4b801",
  storageBucket: "softheart-4b801.firebasestorage.app",
  messagingSenderId: "1039081543023",
  appId: "1:1039081543023:web:4946714f3c71818ad7049a",
  measurementId: "G-DD565DXFX5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)