import React from "react";

const FeatureHead = ({ heading, paragraph }) => {
  return (
    <div className="featureContainer  ">
      <div className="featureWrapper flex flex-col justify-center items-center ">
        <h1 className="  font-bold text-2xl sm:text-3xl md:text-4xl mb-3 ">
          {heading}
        </h1>
        <p className="  text-center text-color text-xs sm:text-sm md:text-base ">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default FeatureHead;
