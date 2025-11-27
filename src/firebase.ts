import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAtASrKgq2bau0fDBBDGaKtB4mmqXGd6fM",
  authDomain: "pregnancy-app-36u0xr.firebaseapp.com",
  databaseURL: "https://pregnancy-app-36u0xr-default-rtdb.firebaseio.com",
  projectId: "pregnancy-app-36u0xr",
  storageBucket: "pregnancy-app-36u0xr.firebasestorage.app",
  messagingSenderId: "848638558496",
  appId: "1:848638558496:web:3f7288732d898fde379745"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)
export { auth, db };
