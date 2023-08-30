// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCX0gQLhxeaboI7Vnl4HUqUOu4qyKNpPk8",
  authDomain: "digital-school-6f286.firebaseapp.com",
  projectId: "digital-school-6f286",
  storageBucket: "digital-school-6f286.appspot.com",
  messagingSenderId: "46587459168",
  appId: "1:46587459168:web:e60de3facfcd13967db505",
  measurementId: "G-B5DSN759PP"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export const auth = getAuth(app)