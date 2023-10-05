import React, { useContext } from "react";
import { AppContext } from "../Context/Context";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AppContext);

  console.log(location.pathname);

  if (loading) {
    return (
      <p className="bg-red-600 w-full text-5xl text-center">loading....</p>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to={`/login`} />;
};

export default PrivateRoute;
