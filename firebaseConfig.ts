import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARCs5Rk7OV-pnVHyxYQkISO4FKAffIULw",
  authDomain: "react-practice-1d62f.firebaseapp.com",
  databaseURL: "https://react-practice-1d62f-default-rtdb.firebaseio.com",
  projectId: "react-practice-1d62f",
  storageBucket: "react-practice-1d62f.appspot.com",
  messagingSenderId: "744256872818",
  appId: "1:744256872818:web:9c9d04190b17b0626bbdeb",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
