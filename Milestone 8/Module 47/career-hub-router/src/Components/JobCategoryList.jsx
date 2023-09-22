import React, { useEffect, useState } from "react";
import FeatureHead from "./FeatureHead";

let heading = "Job Category List";
let paragraph =
  "Explore thousands of job opportunities with all the information you need. Its your future";

const JobCategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("categories.json");

      const data = await response.json();

      setCategories(data);
    };

    getData();
  }, []);

  return (
    <div className="jobCategoryListContainer  ">
      <div className="jobcategoryWrapper  w-[95%] sm:w-[90%] m-auto ">
        {/*  */}
        {/* feature head  */}
        <div className="featureHead mb-6 ">
          <FeatureHead heading={heading} paragraph={paragraph} />
        </div>
        {/* feature head  */}

        {/*  */}

        <div className="featuredCard  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-6 ">
          {categories.map((ele, ind) => (
            <div key={ind} className="card  hero-bg m-auto px-8 py-6 rounded ">
              {/*  */}
              <div className="categoryImg mb-5 flex justify-center  ">
                <img src={ele.logo} alt="" />
              </div>
              {/*  */}

              <div className="categoryName mb-2 font-bold ">
                <p>{ele.category_name}</p>
              </div>
              {/*  */}

              <div className="availableJobs">
                <p>{ele.availability}</p>
              </div>
              {/*  */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobCategoryList;
