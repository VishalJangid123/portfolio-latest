// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz0LxdBMunZ5ua5cZETwLRNSFuDk3pFNM",
  authDomain: "loginproj-22b22.firebaseapp.com",
  databaseURL: "https://loginproj-22b22.firebaseio.com",
  projectId: "loginproj-22b22",
  storageBucket: "loginproj-22b22.appspot.com",
  messagingSenderId: "767943992675",
  appId: "1:767943992675:web:d7a5ea7d5128f95f229f56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const storage = getStorage(app);