// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: proccess.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "styearanni.firebaseapp.com",
  projectId: "styearanni",
  storageBucket: "styearanni.firebasestorage.app",
  messagingSenderId: "693145217607",
  appId: "1:693145217607:web:f93adbbc6def892af19f62"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);