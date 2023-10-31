import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const Services = () => {
  const { id } = useParams();

  // console.log(id);

  const { data: service } = useQuery("data", () => {
    return fetch(`http://localhost:5000/service/${id}`).then((res) =>
      res.json()
    );
  });

  // console.log(service);

  return (
    <div className="  text-2xl text-center pt-[4rem] ">
      <div className="serviceWrapper bg-amber-300 w-[90%] m-auto ">
        {/* service top section  */}
        <div className="serviceTop bg-red-300 mt-6 mb-14 ">
          <div
            className=" relative serviceImg h-[20rem] bg-no-repeat bg-cover bg-center  "
            style={{
              backgroundImage: `url('https://i.ibb.co/H7LbWYR/checkout.png')`,
            }}
          >
            <div className="absolute bg-gray-700 top-0 left-0 h-full w-full opacity-20 "></div>

            <div className="imgContainer z-[100] flex  items-center w-full h-full text-gray-50 text-4xl font-semibold ml-16 opacity-[.99] ">
              <h1>Service Details</h1>
            </div>
          </div>
        </div>
        {/* service top section  */}
      </div>
    </div>
  );
};

export default Services;
