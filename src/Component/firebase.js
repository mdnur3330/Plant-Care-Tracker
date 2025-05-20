// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvabF0TbcWU5xJ9dxH0dcXnHneoMOKTCU",
  authDomain: "plants-website-a6749.firebaseapp.com",
  projectId: "plants-website-a6749",
  storageBucket: "plants-website-a6749.firebasestorage.app",
  messagingSenderId: "265287061116",
  appId: "1:265287061116:web:a51d4c1ae9fbeab09b83f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)