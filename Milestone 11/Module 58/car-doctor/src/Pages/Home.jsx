import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import Banner from "../Components/Banner";
import About from "../Components/About";
import Services from "../Components/Services/Services";

const Home = () => {
  const { user, loading } = useContext(AuthContext);

  // console.log(user);

  if (loading) {
    return <p className=" text-4xl text-center ">loading</p>;
  }

  return (
    <div className="homeContrainer   py-4 text-2xl text-center pt-[4rem] relative ">
      <div className="bannerContainer">
        <Banner />
      </div>

      {/*  */}

      <div className="aboutContainer">
        <About />
      </div>
      {/*  */}

      <div className="serviceContainer py-6 ">
        <Services />
      </div>
      {/*  */}

      {/*  */}
    </div>
  );
};

export default Home;
