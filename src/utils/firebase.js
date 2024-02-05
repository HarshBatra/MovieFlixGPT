// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAO_eRprlsj7PQCr8Y_0MirDiBqltELjxM",
  authDomain: "movieflixgpt-22.firebaseapp.com",
  projectId: "movieflixgpt-22",
  storageBucket: "movieflixgpt-22.appspot.com",
  messagingSenderId: "268683086558",
  appId: "1:268683086558:web:478a8fa0372fe8b706d04f",
  measurementId: "G-FSXGFGB69D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
