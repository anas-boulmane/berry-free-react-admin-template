import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyABxCLMDHtgdzpRxXswHPwngnxl8kALbyc",
    authDomain: "react-analytics-1504e.firebaseapp.com",
    projectId: "react-analytics-1504e",
    storageBucket: "react-analytics-1504e.appspot.com",
    messagingSenderId: "1056498683163",
    appId: "1:1056498683163:web:47c2c3e2584a303e90d7be"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();



// signOut(auth).then(() => {
//     // Sign-out successful.
//   }).catch((error) => {
//     // An error happened.
//   });

// export const signOut = async () => {
//     try {
//       // Sign out
//       await auth.signOut();
  
//       // Update store with null user
//       store.dispatch(logout());
//     } catch (error) {
//       console.error(error);
//     }
//   };
