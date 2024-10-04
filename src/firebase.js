// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'; // Import Firestore
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKsJBL0xcHtFxZlRIoHvNPAECMDJrm_9g",
  authDomain: "admin-view-45f34.firebaseapp.com",
  databaseURL: "https://admin-view-45f34-default-rtdb.firebaseio.com",
  projectId: "admin-view-45f34",
  storageBucket: "admin-view-45f34.appspot.com",
  messagingSenderId: "713077931419",
  appId: "1:713077931419:web:63c14dfc1cc4ac83f6753e",
  measurementId: "G-LB6YPM0FBX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
export {db};