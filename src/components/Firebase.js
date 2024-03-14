import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDypOaTaBUbDjV-xgHVs85qpIeEXIOlfIA",
  authDomain: "monoline-815a2.firebaseapp.com",
  databaseURL: "https://monoline-815a2-default-rtdb.firebaseio.com",
  projectId: "monoline-815a2",
  storageBucket: "monoline-815a2.appspot.com",
  messagingSenderId: "790332058404",
  appId: "1:790332058404:web:96c45fdb6f161b4d2e61b1",
  measurementId: "G-HN6MJ9FE96",
  //******************** */
  // apiKey: "AIzaSyCuZaICFafUQXBFCfXPUt_Q2gwU-SmSOyQ",
  // authDomain: "signup-dc6d6.firebaseapp.com",
  // projectId: "signup-dc6d6",
  // storageBucket: "signup-dc6d6.appspot.com",
  // messagingSenderId: "858961356074",
  // databaseURL: "https://signup-dc6d6-default-rtdb.firebaseio.com",
  // appId: "1:858961356074:web:1646d09936fce1054faa53",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase();
export { app, auth, database };
