import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from "./App.js";

//----------------------------------------------
//firebase
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

firebase.initializeApp({
  // apiKey: "AIzaSyDOXnyWgCCuc_Dtung0hyzoaaYdUM7-3Qc",
  // authDomain: "wad200-example-01.firebaseapp.com",
  // projectId: "wad200-example-01",
  // storageBucket: "wad200-example-01.appspot.com",
  // messagingSenderId: "366446285944",
  // appId: "1:366446285944:web:6a32a1eb58a7c80f6f498d",
  // measurementId: "G-Y5SPG60EHN"
  apiKey: "AIzaSyBWhvDisMTH1ZEVqW_6gXUyF60Fsa9G-SQ",
  authDomain: "instagram-clone-f7f62.firebaseapp.com",
  projectId: "instagram-clone-f7f62",
  storageBucket: "instagram-clone-f7f62.appspot.com",
  messagingSenderId: "881088344312",
  appId: "1:881088344312:web:6331a2a9e2919262114b0d"
});

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);