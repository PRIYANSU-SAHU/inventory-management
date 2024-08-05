// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYpAT-3Ao5YqeQrmrgRDh1wg4IwYddszs",
  authDomain: "inventory-management-91e03.firebaseapp.com",
  projectId: "inventory-management-91e03",
  storageBucket: "inventory-management-91e03.appspot.com",
  messagingSenderId: "594987997265",
  appId: "1:594987997265:web:0b7367cb05764a2ba98070",
  measurementId: "G-XF9G57M08B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore}