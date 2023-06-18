

import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBxAXPrv88FyK4bTwFpHVmBlRZu4hIkscg",
  authDomain: "chat-app-33744.firebaseapp.com",
  projectId: "chat-app-33744",
  storageBucket: "chat-app-33744.appspot.com",
  messagingSenderId: "493194876770",
  appId: "1:493194876770:web:1ac35b5ddab76dab283e3b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

