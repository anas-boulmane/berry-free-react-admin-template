// import {signInWithPopup, GoogleAuthProvider} from "firebase/auth";
// import { db, auth, googleProvider } from "firbaseConfig/Firebase";
// import { logIn } from "store/authActions";
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

// export const googleHandler = async () => {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     signInWithPopup(auth, googleProvider)
//     .then(async (result) => {
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential.accessToken;
//       const user = result.user;
//       dispatch(logIn(user));

//       const { uid, displayName, email } = user;
//       const userRef = db.collection('users').doc(uid);
//       await userRef.set({ displayName, email }, { merge: true });
//       navigate('/');

//     }).catch((error) => {
//       const credential = GoogleAuthProvider.credentialFromError(error);
//       console.error(error)
//     });
// };