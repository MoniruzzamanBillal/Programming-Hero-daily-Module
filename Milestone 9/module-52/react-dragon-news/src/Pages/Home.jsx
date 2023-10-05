import React, { useContext, useEffect, useState } from "react";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/Context";

const Home = () => {
  const {
    user,
    category,
    sortedNews,
    selectedCategory,
    handleCategoryClick,
    loading,
  } = useContext(AppContext);

  const navigate = useNavigate();

  return (
    <div className="homeContainer font-poppins mb-4 ">
      {/* home top  */}
      <div className="headerContainer  ">
        <Header />
      </div>
      {/* home top  */}

      {/* navbar container  */}
      <div className="navContainer  mt-2 ">
        <NavBar />
      </div>
      {/* navbar container  */}

      {/* home body container  */}
      <div className="homeBody bg-sky-300 grid grid-cols-12 gap-x-3 ">
        {/* left side bar  */}
        <div className="leftSideBar bg-violet-300 col-span-3 ">
          <h1 className="text-xl font-semibold">All category </h1>

          <div className="newsCategory  mt-3">
            {category.map((ele, ind) => (
              <h1
                key={ind}
                className={` ${
                  selectedCategory === ele.name ? "bg-gray-400" : ""
                } py-2 text-center mb-2 cursor-pointer`}
                onClick={() => handleCategoryClick(ele)}
              >
                {" "}
                {ele.name}{" "}
              </h1>
            ))}
          </div>
        </div>
        {/* left side bar  */}

        {/* news container middle part */}
        <div className="newsContainer bg-amber-200 col-span-6 ">
          {sortedNews.map((ele) => (
            <>
              <div className="news bg-pink-200 mb-4 ">
                <h1>news id = {ele?.category_id} </h1>

                <h1>author = {ele?.author?.name} </h1>
                <div className="img">
                  <img src={ele.image_url} alt="" />
                </div>
                <h1>
                  description ={" "}
                  {ele?.details.length > 120 ? (
                    <>
                      {" "}
                      {ele?.details.slice(0, 200)} ........{" "}
                      <button
                        className="text-red-600"
                        onClick={() => navigate(`/news/${ele._id}`)}
                      >
                        Read more
                      </button>{" "}
                    </>
                  ) : (
                    ele?.details
                  )}{" "}
                </h1>
              </div>
            </>
          ))}
        </div>
        {/* news container middle part */}

        {/* right side bar  */}
        <div className="rightSidebar bg-orange-300 col-span-3 ">
          <h1>right side bar </h1>
        </div>
        {/* right side bar  */}
      </div>
      {/* home body container  */}
    </div>
  );
};

export default Home;
