// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_WEB_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_WEB_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_WEB_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_WEB_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_WEB_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_WEB_APP_ID,
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig);