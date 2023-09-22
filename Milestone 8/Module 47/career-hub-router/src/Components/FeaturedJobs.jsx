import React, { useEffect, useState } from "react";
import FeatureHead from "./FeatureHead";
import FeaturedJobCard from "./FeaturedJobCard";

const heading = "Featured Jobs";
const paragraph =
  "Explore thousands of job opportunities with all the information you need. Its your future";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("jobs.json");
      const data = await response.json();

      // console.log(data);
      setJobs(data);
    };

    getData();

    // console.log(jobs);
  }, []);

  return (
    <div className="featuredJobs  ">
      <div className="featuredJobsWrapper  w-[95%] sm:w-[90%] m-auto ">
        {/*  */}
        <div className="featuredHead mb-4  ">
          <FeatureHead heading={heading} paragraph={paragraph} />
        </div>
        {/*  */}

        {/* featured job card  */}

        <div className="featuredJobCard  grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-4 ">
          {jobs.map((ele, ind) => (
            <FeaturedJobCard key={ind} ele={ele} />
          ))}
        </div>

        {/* featured job card  */}
      </div>
    </div>
  );
};

export default FeaturedJobs;
