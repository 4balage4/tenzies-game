// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// importing the database functions (getFirestore) and accessing to the collection
import { getFirestore, collection } from 'firebase/firestore'


// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "tenzies-b34b9.firebaseapp.com",
  projectId: "tenzies-b34b9",
  storageBucket: "tenzies-b34b9.appspot.com",
  messagingSenderId: "560736661364",
  appId: "1:560736661364:web:18250430614f9e1a49c621",
  measurementId: "G-YHQYRYGGJL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// recieving the to the database
export const db = getFirestore(app);

// we want to access to the collection
export const playerRanking = collection(db, 'ranklist')
