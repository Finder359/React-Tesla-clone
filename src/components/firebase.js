import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDswJyr8IxlInOsmxEJI3qvBRR6kph2Cnc",
  authDomain: "tesla-clone-e2a7b.firebaseapp.com",
  projectId: "tesla-clone-e2a7b",
  storageBucket: "tesla-clone-e2a7b.firebasestorage.app",
  messagingSenderId: "716917387940",
  appId: "1:716917387940:web:bfaa2e34362843357aac31",
  measurementId: "G-Z20ZYDHQTH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);


