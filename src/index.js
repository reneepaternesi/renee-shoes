import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContextProvider } from './context/cartContext'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyC_8ObWhoxNKly7bEVp5-zJsoQDdvH4A8I",
  authDomain: "renee-shoes.firebaseapp.com",
  projectId: "renee-shoes",
  storageBucket: "renee-shoes.appspot.com",
  messagingSenderId: "712088726156",
  appId: "1:712088726156:web:375c859b79aef0892fa9a9",
  measurementId: "G-LG02DK6SRY"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
