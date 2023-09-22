import React from "react";
import Hero from "../Components/Hero";

import FeaturedJobs from "../Components/FeaturedJobs";
import JobCategoryList from "../Components/JobCategoryList";

const Home = () => {
  return (
    <div className="homeContainer   ">
      <div className="homeWrapper  ">
        {/*  */}
        <div className="heroComponent mb-6">
          <Hero />
        </div>
        {/*  */}
        <div className="JobCategoryList mb-8 ">
          <JobCategoryList />
        </div>
        {/*  */}

        <div className="featuredJobs  mb-6 ">
          <FeaturedJobs />
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default Home;
