// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCrem9AxBKvY4sqAJUVsSyjou2wxeU0chc",
    authDomain: "ignition-hacks-ea55d.firebaseapp.com",
    projectId: "ignition-hacks-ea55d",
    storageBucket: "ignition-hacks-ea55d.appspot.com",
    messagingSenderId: "1091201197218",
    appId: "1:1091201197218:web:e156acb8bdeecf675123fb"
};

// Initialize Firebase for SSR (Server-Side Rendering)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, firestore, auth, storage }