import React from "react";
import { Outlet } from "react-router-dom";
import AppProvider from "../Context/Context";

const Root = () => {
  return (
    <AppProvider>
      <div className=" font-poppins w-[95%] sm:w-[90%] md:w-[85%] m-auto ">
        <Outlet />
      </div>
    </AppProvider>
  );
};

export default Root;
