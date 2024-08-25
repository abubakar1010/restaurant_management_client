// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsO6vszQqR5umgSVHEVQlcJ0-0RKdBQUA",
  authDomain: "restaurant-management-89e37.firebaseapp.com",
  projectId: "restaurant-management-89e37",
  storageBucket: "restaurant-management-89e37.appspot.com",
  messagingSenderId: "1093713112363",
  appId: "1:1093713112363:web:274625eed70fb7b35ba96e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;