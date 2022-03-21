import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";

const InitializeFirebase = () => {
  initializeApp(firebaseConfig);
};

export default InitializeFirebase;
