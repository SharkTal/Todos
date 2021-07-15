// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';


  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB5MWcZxP6_8EYwOU95TOihD77TD8dxrzQ",
    authDomain: "todo-app-cp-b2e35.firebaseapp.com",
    projectId: "todo-app-cp-b2e35",
    storageBucket: "todo-app-cp-b2e35.appspot.com",
    messagingSenderId: "441241170669",
    appId: "1:441241170669:web:2d9d5970633033efe892e4",
    measurementId: "G-Q4Q6G1PCJW"
  });

  const db = firebaseApp.firestore();

  export default db;