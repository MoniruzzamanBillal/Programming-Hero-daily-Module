import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarMode] = useState(false);

  // function for toggle dark mode
  const toggleTheme = () => {
    setDarMode(!darkMode);
  };

  //   login function
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // log out function
  const logOut = () => {
    return signOut(auth);
  };

  //   auth user change effect
  useEffect(() => {
    setLoading(true);
    const unscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      // console.log(loggedUser);
      setUser(currentUser);
      // console.log(currentUser);
      if (!currentUser) {
        axios
          .post("http://localhost:5000/logout", loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
          })
          .catch((error) => console.log(error));
      }
      setLoading(false);
    });

    return () => unscribe();
  }, []);

  const contextValue = {
    user,
    login,
    loading,
    logOut,
    toggleTheme,
    darkMode,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AppProvider;
