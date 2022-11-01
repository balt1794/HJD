  // Import the functions you need from the SDKs you need
  import { initializeApp } from 'firebase/app';
  import { getStorage } from "firebase/storage";
  import { getFirestore } from "firebase/firestore";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD8bMPLKIRLUYarTuzKh6EITsCWdkkbNTg",
    authDomain: "new-db-hjd.firebaseapp.com",
    projectId: "new-db-hjd",
    storageBucket: "new-db-hjd.appspot.com",
    messagingSenderId: "871641201025",
    appId: "1:871641201025:web:4529938a2666609d579080",
    measurementId: "G-CHZ4CJD2W5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const storage =  getStorage(app);
  const db = getFirestore(app);

  export { app,  db, storage };