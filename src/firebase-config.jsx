// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {auth} from "firebase/auth"
import {getFirestore} from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.PLAYER_MENU_APP_API_KEY,
  authDomain: process.env.PLAYER_MENU_APP_AUTH_DOMAIN,
  projectId: process.env.PLAYER_MENU_APP_PROJECT_ID,
  storageBucket: process.env.PLAYER_MENU_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.PLAYER_MENU_APP_MESSAGING_SENDER_ID,
  appId: process.env.PLAYER_MENU_APP_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = app.auth()
export const db = getFirestore(app)