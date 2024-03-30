// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "carmodel-c90df.firebaseapp.com",
  projectId: "carmodel-c90df",
  storageBucket: "carmodel-c90df.appspot.com",
  messagingSenderId: "644647154237",
  appId: "1:644647154237:web:df2c626a533605dd20b054",
  measurementId: "G-RLTWZDLLY0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
