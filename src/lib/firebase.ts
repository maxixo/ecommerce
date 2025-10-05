import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Replace with your Firebase config
// Get this from Firebase Console > Project Settings > General > Your apps > Web app
const firebaseConfig = {
  apiKey: "AIzaSyDPT_kB__xnOhmCUQii8YTmvlGtuqntgf4",
  authDomain: "ecommerce-53aa3.firebaseapp.com",
  projectId: "ecommerce-53aa3",
  storageBucket: "ecommerce-53aa3.firebasestorage.app",
  messagingSenderId: "878549879361",
  appId: "1:878549879361:web:9c4fb2ccd611a3299494c0"
};




const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
