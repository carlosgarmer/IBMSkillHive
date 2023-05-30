// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxaKSiHis4Ac7XwuB98TDBEn3Uymu1oLo",
  authDomain: "ibmskillhive.firebaseapp.com",
  projectId: "ibmskillhive",
  storageBucket: "ibmskillhive.appspot.com",
  messagingSenderId: "171437534224",
  appId: "1:171437534224:web:acde897b06fd378ee96e95",
  measurementId: "G-3W9YELQZ4W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

