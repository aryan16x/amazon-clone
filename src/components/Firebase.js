import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWt93KwX1eJsuCQo4_RHUIZC3ymiPLQQg",
  authDomain: "clone-ece5b.firebaseapp.com",
  projectId: "clone-ece5b",
  storageBucket: "clone-ece5b.appspot.com",
  messagingSenderId: "794789289103",
  appId: "1:794789289103:web:e5090a72e6d187e841a4fa",
  measurementId: "G-2ML401Y40V",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
