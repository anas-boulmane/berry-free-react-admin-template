export const LogIn='LOGIN'
export const LogOut='LOGOUT'

export const logIn = ({uid,displayName,email,photoURL}) => {
  return { 
    type: LogIn , 
    uid,displayName,email,photoURL
  };
};

export const logOut = () => {
  return { type: LogOut };
};
