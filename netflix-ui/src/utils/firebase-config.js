
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDrEO6kNMhv4yllheRBfxXhqn_tU6ZZuLY",
  authDomain: "ott-platform-83e56.firebaseapp.com",
  projectId: "ott-platform-83e56",
  storageBucket: "ott-platform-83e56.appspot.com",
  messagingSenderId: "177419981633",
  appId: "1:177419981633:web:5d8137050926274f0ac7c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app);