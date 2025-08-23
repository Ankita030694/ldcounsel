// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDORBfmJIrDSADrlzkHL9fNarlH_CAWQeI",
  authDomain: "ldcounsel.firebaseapp.com",
  projectId: "ldcounsel",
  storageBucket: "ldcounsel.firebasestorage.app",
  messagingSenderId: "639970696026",
  appId: "1:639970696026:web:52925723094a57a12d3163",
  measurementId: "G-2Y8NS0XMDP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

// Initialize Analytics only on client side
let analytics = null;
if (typeof window !== 'undefined') {
  import('firebase/analytics').then(({ getAnalytics }) => {
    analytics = getAnalytics(app);
  });
}

export { db, auth, storage, analytics };