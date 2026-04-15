import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDEY9l1Yuy4RWRV_BVdq5-e6YRfOenL-S4",
  authDomain: "projeto02-carlos-thallys.firebaseapp.com",
  projectId: "projeto02-carlos-thallys",
  storageBucket: "projeto02-carlos-thallys.firebasestorage.app",
  messagingSenderId: "1008929675078",
  appId: "1:1008929675078:web:ab87c94b52a759d3a37747"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

