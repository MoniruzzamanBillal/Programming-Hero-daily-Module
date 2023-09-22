import React from "react";

import { BiMap, BiDollarCircle } from "react-icons/bi";

const FeaturedJobCard = ({ ele }) => {
  console.log(ele);

  const {
    company_name,
    id,
    job_title,
    job_type,
    location,
    logo,
    remote_or_onsite,
    salary,
  } = ele;

  return (
    <div className="FeaturedJobCard p-5 border border-gray-300 shadow rounded ">
      <div className="FeaturedJobCardWrapper">
        {/* card top  image  */}
        <div className="cardImg mb-5 ">
          <img src={logo} alt="" />
        </div>
        {/* card top  image  */}

        {/* card job title  */}
        <div className="cardTitle  mb-3 text-lg font-bold">{job_title}</div>
        {/* card job title  */}

        {/* company name  */}
        <div className="companyName  mb-3 text-color ">
          <p>{company_name}</p>
        </div>
        {/* company name  */}

        {/* job time  */}
        <div className="jobTime  flex mb-3 ">
          {/* time left */}
          <div className="timeLeft  mr-4 ">
            <p className=" border border-blue-600 py-1.5 px-5 text-blue-600 font-semibold rounded-md ">
              {remote_or_onsite}
            </p>
          </div>
          {/* time left */}

          {/* time right  */}
          <div className="timeRight ">
            <p className=" border border-blue-600 py-1.5 px-5 text-blue-600 font-semibold rounded-md ">
              {job_type}
            </p>
          </div>
          {/* time right  */}
        </div>
        {/* job time  */}

        {/* salary section  */}

        <div className="jobSalary  flex mb-6 ">
          {/* country name  */}
          <div className="countryName  mr-4 flex justify-center items-center text-color ">
            <BiMap />
            <p className=" ml-2"> {location} </p>
          </div>
          {/* country name  */}

          {/* salary  */}
          <div className="salary  flex justify-center items-center text-color ">
            <BiDollarCircle />
            <p className=" ml-2  ">Salary : {salary} </p>
          </div>
          {/* salary  */}
        </div>

        {/* salary section  */}

        {/* button section  */}
        <div className="buttonSection">
          <button
            className={` button-bg text-white font-semibold py-2 px-5 hover:shadow rounded active:scale-95 active:shadow-md`}
          >
            View Details
          </button>
        </div>
        {/* button section  */}

        {/*  */}
      </div>
    </div>
  );
};

export default FeaturedJobCard;
