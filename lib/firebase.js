// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAK0wCW5xbTuA7HCGaZPIeaCK94xKBgvSE",
  authDomain: "cs5513fbdb.firebaseapp.com",
  projectId: "cs5513fbdb",
  storageBucket: "cs5513fbdb.firebasestorage.app",
  messagingSenderId: "795569061447",
  appId: "1:795569061447:web:273ed261cc3dd3b088fb62"
};

// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };
