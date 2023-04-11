//
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDIBY_vAxiHtKj2GhBMGPl1VWCXQZklebM",
  authDomain: "wedinvite-16770.firebaseapp.com",
  projectId: "wedinvite-16770",
  storageBucket: "wedinvite-16770.appspot.com",
  messagingSenderId: "630232148719",
  appId: "1:630232148719:web:9745d7f3022b904065891a",
  measurementId: "G-KDC8C81VWZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);