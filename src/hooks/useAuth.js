import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { auth } from "firbaseConfig/Firebase";
import { indexedDBLocalPersistence, setPersistence, onAuthStateChanged } from "firebase/auth";
import { logIn } from 'store/authActions';

export const useAuth = () => {
  const currentUser = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(!currentUser.uid)
  console.log(auth)

  useEffect(() => {
    if (currentUser.uid) return
    setPersistence(auth, indexedDBLocalPersistence).catch(console.log);
    onAuthStateChanged(auth, (user) => {
      if (!user) return navigate('/pages/login/login3')
      dispatch(logIn(user))
      setIsLoading(false)
    })
  }, []);

  return { currentUser, isLoading };
};




