// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA9VUsqSv6ToBHi3YPoTp3x8gPLR2RhRw",
  authDomain: "react-course-d92cf.firebaseapp.com",
  projectId: "react-course-d92cf",
  storageBucket: "react-course-d92cf.appspot.com",
  messagingSenderId: "244721428234",
  appId: "1:244721428234:web:24ca9b9b77c33f6a1c7cf3",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp); 
