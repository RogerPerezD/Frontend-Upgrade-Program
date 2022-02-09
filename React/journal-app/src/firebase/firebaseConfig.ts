import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
// import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCDlo_-M68Xv0mxKd3_qbgTBQGsI9fEcJE",
    authDomain: "journalappreact-931cb.firebaseapp.com",
    projectId: "journalappreact-931cb",
    storageBucket: "journalappreact-931cb.appspot.com",
    messagingSenderId: "405743875343",
    appId: "1:405743875343:web:7ed36304fd0e9dac91ba7a"
};

    firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db, 
    googleAuthProvider,
    firebase
}