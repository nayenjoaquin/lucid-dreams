import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyACrssJ72da17u4_N22iSlTYAF93_TZ6eo",
  authDomain: "lucid-dreams-d04e9.firebaseapp.com",
  projectId: "lucid-dreams-d04e9",
  storageBucket: "lucid-dreams-d04e9.appspot.com",
  messagingSenderId: "22838121031",
  appId: "1:22838121031:web:610c96300b277aff0b9762",
  measurementId: "G-N0HD32Z7T4"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app)