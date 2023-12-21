
// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDgIPKHBrxDRYbjz9sFyvsvIn4T4D44dA8",
  authDomain: "dental-clinic-7c69f.firebaseapp.com",
  databaseURL: "https://dental-clinic-7c69f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dental-clinic-7c69f",
  storageBucket: "dental-clinic-7c69f.appspot.com",
  messagingSenderId: "20075818542",
  appId: "1:20075818542:web:80e4747b66753663d1b9bf",
  measurementId: "G-4N53WSCBCM",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Initialize Firestore
const storage = getStorage(app);
export { auth, db , storage };




