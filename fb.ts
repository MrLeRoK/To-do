// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: "AIzaSyCPE6HPwhIpF3CZ0cu8nE3uipfzlPhBlPA",
    authDomain: "todo-760a4.firebaseapp.com",
    projectId: "todo-760a4",
    storageBucket: "todo-760a4.firebasestorage.app",
    messagingSenderId: "369756342166",
    appId: "1:369756342166:web:bd8e80fe2a01b522c4ffb7",
    measurementId: "G-6R5T29GYNE"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
