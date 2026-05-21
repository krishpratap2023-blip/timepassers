import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

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

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);