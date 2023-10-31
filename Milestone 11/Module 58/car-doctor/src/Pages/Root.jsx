import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import AppProvider, { AuthContext } from "../Context/AuthContext";
import NavBar from "../Components/navbar";
import Footer from "../Components/Footer";

const Root = () => {
  return (
    <div className="mainContainer">
      <AppProvider>
        {/* navcontainer */}
        <div className="navContainer bg-amber-200 ">
          <NavBar />
        </div>

        <div className="childContainer">
          <Outlet />
        </div>

        {/* foter  */}
        <div className="footerContainer  bg-violet-400 ">
          <Footer />
        </div>
        {/* foter  */}
      </AppProvider>
    </div>
  );
};

export default Root;
