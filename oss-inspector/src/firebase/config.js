import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCCuTup6sMiBmG8j8Tzw_7eo_kTTmMbf1o',
  authDomain: 'github-auth-feda9.firebaseapp.com',
  projectId: 'github-auth-feda9',
  storageBucket: 'github-auth-feda9.appspot.com',
  messagingSenderId: '128676864634',
  appId: '1:128676864634:web:526f080e808fa0ff6b91c3',
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth();
// Initialize Firebase Firestore
const db = getFirestore();

export { auth, db };
