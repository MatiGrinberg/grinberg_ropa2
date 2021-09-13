import React from 'react'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCyrRkL45QNK84IL3xAtqxrKtJHMZJEaVA",
    authDomain: "grinberg-ropa.firebaseapp.com",
    projectId: "grinberg-ropa",
    storageBucket: "grinberg-ropa.appspot.com",
    messagingSenderId: "558839031532",
    appId: "1:558839031532:web:32f20100e338f800f1a7c9"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {
    db,
    auth
};