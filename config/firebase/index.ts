import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB74MkknFxTQBhyQKYVC5wIx4IHALfaugU",
  authDomain: "topstore-7129b.firebaseapp.com",
  databaseURL:
    "https://topstore-7129b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "topstore-7129b",
  storageBucket: "topstore-7129b.appspot.com",
  messagingSenderId: "1076885348454",
  appId: "1:1076885348454:web:99a0fe36c88d0ef5220da7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
