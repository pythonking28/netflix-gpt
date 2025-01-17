// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCauyKt8pi5N-68ZYi3QtZXxpBU7VOfvkQ",
  authDomain: "netflix-7b516.firebaseapp.com",
  projectId: "netflix-7b516",
  storageBucket: "netflix-7b516.firebasestorage.app",
  messagingSenderId: "479557192066",
  appId: "1:479557192066:web:e5fa78c2b767e93da2279b",
  measurementId: "G-LS3KN1KCGW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()
