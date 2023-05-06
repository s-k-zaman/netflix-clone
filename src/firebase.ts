import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAegUS2CDOxBMqShFzQCwN6EHN5qQgUnDA",
  authDomain: "netfilx-clone-305ab.firebaseapp.com",
  projectId: "netfilx-clone-305ab",
  storageBucket: "netfilx-clone-305ab.appspot.com",
  messagingSenderId: "348300236494",
  appId: "1:348300236494:web:1a08ba13795b419037629f",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
export { auth };
export default db;
