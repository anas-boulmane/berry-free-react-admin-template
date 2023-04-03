import { LogIn, LogOut } from './authActions';
export const initialState = {
  uid: null,
  name: null,
  email: null,
  photoURL: null
};

// ==============================|| authentication REDUCER ||============================== //
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LogIn:
      return {
        uid: action.uid,
        name: action.displayName,
        email: action.email,
        photoURL: action.photoURL
      };

      case LogOut:
      return {
        uid: null,
        name: null,
        email: null,
        photoURL: null
      };

    default:
      return state;
  }
};
export default authReducer;
