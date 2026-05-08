import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";

import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

const firebaseConfig = {

  apiKey: "AIzaSyDwUSkTtfdmQgrJnQtK4SmD6ZTiLQKHJIA",

  authDomain: "devicedeck04.firebaseapp.com",

  projectId: "devicedeck04",

  storageBucket: "devicedeck04.firebasestorage.app",

  messagingSenderId: "147668881063",

  appId: "1:147668881063:web:a156d557f22dbea7be9582",

  measurementId: "G-2QHVB1GTSJ"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const provider = new GoogleAuthProvider();

export {
  auth,
  db,
  provider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
};