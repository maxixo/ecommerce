import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Replace with your Firebase config
// Get this from Firebase Console > Project Settings > General > Your apps > Web app
const firebaseConfig = {
  apiKey: "AIzaSyDPT_kB__xnOhmCUQii8YTmvlGtuqntgf4",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "ecommerce-53aa3",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "878549879361",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
