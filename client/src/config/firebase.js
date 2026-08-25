import {initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDzx5jbNiC0QiR053GXmpUKbUY7z2E_Rt8",
  authDomain: "interview-ai-platform-af353.firebaseapp.com",
  projectId: "interview-ai-platform-af353",
  storageBucket: "interview-ai-platform-af353.firebasestorage.app",
  messagingSenderId: "513155272993",
  appId: "1:513155272993:web:3463e1162ef014a87dae60",
  measurementId: "G-9E279P5KBS"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();