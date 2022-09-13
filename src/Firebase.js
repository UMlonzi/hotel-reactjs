
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzlqf7RvDv5sJxBYspPUlok93lxW0g9KE",
  authDomain: "hotel-app-734ef.firebaseapp.com",
  projectId: "hotel-app-734ef",
  storageBucket: "hotel-app-734ef.appspot.com",
  messagingSenderId: "335976956632",
  appId: "1:335976956632:web:465ed78426833dce5f0dad",
  measurementId: "G-K6B3P94VFP"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();