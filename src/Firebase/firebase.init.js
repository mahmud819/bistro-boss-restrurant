// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpqaOncRpCeWpIuJ99BJEyB0xpzLuj3jo",
  authDomain: "resturant-project-bb6eb.firebaseapp.com",
  projectId: "resturant-project-bb6eb",
  storageBucket: "resturant-project-bb6eb.firebasestorage.app",
  messagingSenderId: "784098375372",
  appId: "1:784098375372:web:a63188b7899e18f822b469"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);