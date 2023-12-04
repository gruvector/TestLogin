// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDclNAJYsnSC-8B7cX80fM2ZFwtt8WTXOI",
  authDomain: "testlogin-43f71.firebaseapp.com",
  projectId: "testlogin-43f71",
  storageBucket: "testlogin-43f71.appspot.com",
  messagingSenderId: "1078847553433",
  appId: "1:1078847553433:web:e3078eec0dd0af8fe3dd08",
  measurementId: "G-E7V8QX1SGL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;