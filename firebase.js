// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDl7dj8n5-dMg70ks3maQoqVyG31CrIB8U",
  authDomain: "inventory-management-7ce2f.firebaseapp.com",
  projectId: "inventory-management-7ce2f",
  storageBucket: "inventory-management-7ce2f.appspot.com",
  messagingSenderId: "852000173947",
  appId: "1:852000173947:web:d353ed144e6d38c897d7de",
  measurementId: "G-726WXD37QL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export {firestore}