import { initializeApp } from "firebase/app";
import {FacebookAuthProvider, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC4wu_Kzt6-eF0ypec0lOZc03PtdXLRkTw",
  authDomain: "pokedex-proyect.firebaseapp.com",
  projectId: "pokedex-proyect",
  storageBucket: "pokedex-proyect.appspot.com",
  messagingSenderId: "333381833282",
  appId: "1:333381833282:web:20fab06dc2cf0cfc1f53db"
};

const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider()
const facebook = new FacebookAuthProvider()

export {
    app,
    google,
    facebook
}