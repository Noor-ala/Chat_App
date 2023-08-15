// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTtv16pPP7u275n6c5EgBcXB66ynIExJw",
  authDomain: "chat-app-365dc.firebaseapp.com",
  projectId: "chat-app-365dc",
  storageBucket: "chat-app-365dc.appspot.com",
  messagingSenderId: "43830534527",
  appId: "1:43830534527:web:6c8a0ab1e555e45578fa4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)