import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "./firebase";
import '../App.css'

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const authProvider = new GoogleAuthProvider();
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState();
  const [loding, setLoding] = useState(true);

  const signUp = (email, password) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = () => {
    setLoding(true);
    return signInWithPopup(auth, authProvider);
  };

  const login = (email, password) => {
    setLoding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const singOutUser = () => {
    setLoding(true);
    return signOut(auth);
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const userUpdateProfile = (updateData) => {
    setLoding(true);
    return updateProfile(auth.currentUser, updateData)
      .then(() => {
        setUser({ ...auth.currentUser });
      })
      .finally(() => {
        setLoding(false);
      });
  };

  const emailVerification = () => {
    return sendEmailVerification(auth.currentUser);
  };

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    const getCurrentUser = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoding(false);
    });
    return () => {
      getCurrentUser();
    };
  }, []);

  const authData = {
    signUp,
    loginWithGoogle,
    login,
    singOutUser,
    userUpdateProfile,
    resetPassword,
    emailVerification,
    user,
    loding,
    darkMode,
    toggleTheme,
  };

  return (
    <AuthContext value={authData}>
      <div className={darkMode ? "app dark" : "app light"}>{children}</div>
    </AuthContext>
  );
};

export default AuthProvider;
