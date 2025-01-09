import React, { createContext, useContext, useState } from "react";
import { auth } from "../FireBase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

export const AuthContext = createContext();
export default function AuthProvider({ children }) {
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

  
  
  const items = {
    newUserWithEmailPass,
    loginWithEmailPass,
    loginWithGoogle,
    loginWithGoogle,
    user, setUser
  };
console.log(user)
  return <AuthContext.Provider value={items}>{children}</AuthContext.Provider>;
}
