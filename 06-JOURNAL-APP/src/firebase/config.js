// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0gNvheNltdBsxrPUtSsKGztS2Zb4F1Tg",
    authDomain: "react-curso-b9982.firebaseapp.com",
    projectId: "react-curso-b9982",
    storageBucket: "react-curso-b9982.appspot.com",
    messagingSenderId: "82172444286",
    appId: "1:82172444286:web:29b612bd1eb99313a3622f"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);