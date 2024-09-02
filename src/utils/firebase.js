// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, 
   } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMr1QmWtKVgcOBptCeWxGOyf7spNuxdqA",
  authDomain: "netflixgpt-d6c7e.firebaseapp.com",
  projectId: "netflixgpt-d6c7e",
  storageBucket: "netflixgpt-d6c7e.appspot.com",
  messagingSenderId: "398803960375",
  appId: "1:398803960375:web:2c9e7e9d9525cd6231f5b2",
  measurementId: "G-SLWTZJ8JEF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();