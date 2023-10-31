import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
import UseaxiosSecure from "../Hooks/UseaxiosSecure";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = UseaxiosSecure();

  const url = `/booking?email=${user?.email}`;
  useEffect(() => {
    // axios
    //   .get(`http://localhost:5000/booking?email=${user?.email}`, {
    //     withCredentials: true,
    //   })
    //   .then((data) => {
    //     console.log(data.data)
    //   })
    //   .catch((error) => console.log(error));

    axiosSecure
      .get(url)
      .then((data) => console.log(data.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className=" pt-[4rem] ">
      <h1>Bookings</h1>
      <h1>Bookings</h1>
      <h1>Bookings</h1>
      <h1>Bookings</h1>
      <h1>Bookings</h1>
      <h1>Bookings</h1>
      <h1>Bookings</h1>
    </div>
  );
};

export default Bookings;
