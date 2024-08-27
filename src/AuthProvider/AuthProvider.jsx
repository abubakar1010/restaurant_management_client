import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import auth from "../Firebase/Firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);

  const [loading, setLoading] = useState(true);

  const register = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email
      const loggedUser = {email: userEmail}
      
      setUser(currentUser);
      setLoading(false);

      if(currentUser){
        axios.post(`https://restaurant-management-server-gray.vercel.app/jwt`, loggedUser, {withCredentials: true})
          .then((res) => {
            console.log(res.data);
            if (res.data.success) {
        // navigate(location?.state? location.state : "/");
            }
          })
          .catch((error) => {
            console.log(error.message);
          });
      }else{
        axios.post('https://restaurant-management-server-gray.vercel.app/logout', loggedUser, {withCredentials: true})
        .then( res => console.log(res) )
      }
    });

    return () => {
      unSubscribe();
    };
  }, []);

  // implement login with google

  const googleProvider = new GoogleAuthProvider();

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // implement login with github

  const gitHubProvider = new GithubAuthProvider();

  const githubLogin = () => {
    return signInWithPopup(auth, gitHubProvider);
  };

  const authInfo = {
    user,
    register,
    loading,
    logout,
    setLoading,
    login,
    googleLogin,
    githubLogin,
    userData,
    setUserData,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;