// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0p8CHGJdxSWGErJSRe5GX91laxyC4pw0",
  authDomain: "auth-integration-c606e.firebaseapp.com",
  projectId: "auth-integration-c606e",
  storageBucket: "auth-integration-c606e.firebasestorage.app",
  messagingSenderId: "882814976290",
  appId: "1:882814976290:web:419ae6f806a390632b257b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

