// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBV-Rr2H145apqo8HBZhqvs_-qXDLjeEvs",
  authDomain: "timepassers.firebaseapp.com",
  databaseURL: "https://timepassers-default-rtdb.firebaseio.com",
  projectId: "timepassers",
  storageBucket: "timepassers.firebasestorage.app",
  messagingSenderId: "517961098128",
  appId: "1:517961098128:web:f1ef51068d4a222a0b0915",
  measurementId: "G-DXMJX7Z3W3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
