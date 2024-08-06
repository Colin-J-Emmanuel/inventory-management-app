// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAo8H60kECGnLkPJSdLpdycFq8VwaS8lYE",
  authDomain: "inventory-management-b1d77.firebaseapp.com",
  projectId: "inventory-management-b1d77",
  storageBucket: "inventory-management-b1d77.appspot.com",
  messagingSenderId: "389751185712",
  appId: "1:389751185712:web:7024620696b2e2438628f5",
  measurementId: "G-5R390Q6JLF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export{firestore}