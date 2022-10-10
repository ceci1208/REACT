// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import { getDatabase } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyCODTWg5_cHhA5quuC-NjMbTUgRTP6lxFs",
  authDomain: "react-finale.firebaseapp.com",
  projectId: "react-finale",
  storageBucket: "react-finale.appspot.com",
  messagingSenderId: "744546404746",
  appId: "1:744546404746:web:668cd56c5aa94f9c66e073",
  measurementId: "G-HVR30KMFGL",
  databaseURL: "https://react-finale-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getDatabase(app);