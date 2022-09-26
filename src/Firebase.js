// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtVPNIIBOKh8CVbAnjWJKqzyq-nOawBq4",
  authDomain: "payment--store.firebaseapp.com",
  projectId: "payment--store",
  storageBucket: "payment--store.appspot.com",
  messagingSenderId: "1016373272900",
  appId: "1:1016373272900:web:9f3e427a44c2371e5bf711",
  measurementId: "G-YC3LCN7HVH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
