import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAB3vy3wIWGx0a6JrLPHNqzejDdZ8yePOM",
  authDomain: "proyecto-react-9b991.firebaseapp.com",
  projectId: "proyecto-react-9b991",
  storageBucket: "proyecto-react-9b991.appspot.com",
  messagingSenderId: "747080961943",
  appId: "1:747080961943:web:e03f67bd47206bb6b2bed2",
  measurementId: "G-RSFZ173ZQV"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);