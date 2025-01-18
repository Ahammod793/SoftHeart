import React, { createContext, useContext, useState } from "react";
import { auth } from "../FireBase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();
export default function AuthProvider({ children }) {
  const [userName, setUserName] = useState(null)
  const [userEmail, setUserEmail] = useState(null)
  const [userImage, setUserImage] = useState(null)
  const [user, setUser] = useState(null)
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  const newUserWithEmailPass = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginWithEmailPass = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const loginWithGitHub = () => {
    return signInWithPopup(auth, gitHubProvider);
  };
  const logOut = () => {
    return signOut(auth)
  }
  
  
  const items = {
    newUserWithEmailPass,
    loginWithEmailPass,
    loginWithGoogle,
    loginWithGoogle,
    logOut,
    user, setUser
  };
console.log(userName, userEmail)
  return <AuthContext.Provider value={items}>{children}</AuthContext.Provider>;
}
