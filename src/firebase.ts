
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore" 

const firebaseConfig = {
  apiKey: "AIzaSyAEY_uZjXQq38HnmoUYhpc5GRDVjTabko4",
  authDomain: "portofolio-f24eb.firebaseapp.com",
  projectId: "portofolio-f24eb",
  storageBucket: "portofolio-f24eb.appspot.com",
  messagingSenderId: "833163451862",
  appId: "1:833163451862:web:d4d618845d4fa0ebded877",
  measurementId: "G-PVRX43C975"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
