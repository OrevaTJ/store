import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AppProvider } from '../Context.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB79HZjyeYI4BQkTm2vHpNnIAN4sOJUnX0",
  authDomain: "react-store-47baa.firebaseapp.com",
  projectId: "react-store-47baa",
  storageBucket: "react-store-47baa.appspot.com",
  messagingSenderId: "884567872361",
  appId: "1:884567872361:web:5ae0a9ec04a4e1291663f8",
  measurementId: "G-TQXRR5N111"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
)
