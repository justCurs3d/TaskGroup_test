import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "macro-css";
import App from "./App";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional 

// Initialize Firebase
const app = initializeApp({
  apiKey: "AIzaSyA64D6wJ6CAeGaENHnyW-MAycBlfLCa-TA",
  authDomain: "taskgroup-62a5d.firebaseapp.com",
  projectId: "taskgroup-62a5d",
  storageBucket: "taskgroup-62a5d.appspot.com",
  messagingSenderId: "104615966671",
  appId: "1:104615966671:web:ec2693fb4297206e5184ba",
  measurementId: "G-BF0PXSVTBX"
});

const analytics = getAnalytics(app);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
