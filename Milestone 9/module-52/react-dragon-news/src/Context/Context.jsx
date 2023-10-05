import { createContext, useEffect, useState } from "react";
import { auth } from "../Utility/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [category, setCategory] = useState([]);
  const [news, setNews] = useState([]);
  const [sortedNews, setSortedNews] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // function for category set
  const handleCategoryClick = (category) => {
    setLoading(true);

    setSelectedCategory(category.name);

    if (category.id === "0") {
      const sortedValue = [...news];
      setSortedNews(sortedValue);
      return;
    }
    const sortedValue = news.filter((ele) => ele.category_id === category.id);
    setSortedNews(sortedValue);
    setLoading(false);
  };

  // email register
  const registerEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // email login
  const emailLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // log out function
  const logOut = () => {
    return signOut(auth);
  };

  // effect for data load
  useEffect(() => {
    setLoading(true);
    const getCategory = async () => {
      const response = await fetch("/public/categories.json");
      const newsResponse = await fetch("/public/news.json");
      const responseData = await response.json();
      const newsResponseData = await newsResponse.json();

      // console.log(newsResponseData);
      setCategory(responseData);
      setNews(newsResponseData);
      setSortedNews(newsResponseData);
    };

    getCategory();
  }, []);

  // effect for set user
  useEffect(() => {
    setLoading(true);
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
  }, []);

  const appValue = {
    user,
    category,
    handleCategoryClick,
    sortedNews,
    selectedCategory,
    registerEmail,
    emailLogin,
    loading,
    logOut,
  };
  return <AppContext.Provider value={appValue}>{children}</AppContext.Provider>;
};

export default AppProvider;
