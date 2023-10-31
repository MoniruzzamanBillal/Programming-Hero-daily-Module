import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPaKOF7gFumbxI0qLlciGf2rnzoK7gtQY",
  authDomain: "dragon-news-auth-1ede4.firebaseapp.com",
  projectId: "dragon-news-auth-1ede4",
  storageBucket: "dragon-news-auth-1ede4.appspot.com",
  messagingSenderId: "1035740414186",
  appId: "1:1035740414186:web:8037844821300da3b19793",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
