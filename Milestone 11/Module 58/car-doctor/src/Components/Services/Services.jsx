import React from "react";
import { useQuery } from "react-query";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const { data: services, isLoading } = useQuery("sevices", () =>
    fetch("http://localhost:5000/services").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className=" ">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-orange-600 mb-4 ">
          Our Services
        </h3>
        <h2 className="text-5xl mb-3 ">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.{" "}
        </p>
      </div>
      {/*  */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services?.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;

const Loading = () => {
  return (
    <div className="w-full h-screen bg-gray-950 grid place-items-center">
      <div className="w-full max-w-md bg-gray-800 mx-auto rounded-lg p-4">
        <div className="flex gap-2">
          <div className="w-16 h-16 shrink-0 bg-gray-600 rounded-full animate-pulse"></div>
          <div className="w-full space-y-2">
            <div className="w-11/12 h-7 bg-gray-600 rounded-2xl animate-pulse"></div>
            <div className="w-full h-7 bg-gray-600 rounded-2xl animate-pulse"></div>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-4">
          <div
            className="w-3/5 h-7 bg-gray-600 rounded-2xl animate-pulse"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="w-5/6 h-7 bg-gray-600 rounded-2xl animate-pulse"
            style={{ animationDelay: "0.25s" }}
          ></div>
          <div
            className="w-3/4 h-7 bg-gray-600 rounded-2xl animate-pulse"
            style={{ animationDelay: "0.3s" }}
          ></div>
          <div
            className="w-full h-7 bg-gray-600 rounded-2xl animate-pulse"
            style={{ animationDelay: "0.35s" }}
          ></div>
          <div
            className="w-3/5 h-7 bg-gray-600 rounded-2xl animate-pulse"
            style={{ animationDelay: "0.4s" }}
          ></div>
          <div
            className="w-3/4 h-7 bg-gray-600 rounded-2xl animate-pulse"
            style={{ animationDelay: "0.45s" }}
          ></div>
          <div
            className="w-full h-7 bg-gray-600 rounded-2xl animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="w-11/12 h-7 bg-gray-600 rounded-2xl animate-pulse"
            style={{ animationDelay: "0.55s" }}
          ></div>
        </div>
      </div>
    </div>
  );
};
