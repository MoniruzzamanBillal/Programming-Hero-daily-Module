import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="heroContainer hero-bg pt-6">
      <div className="heroWrapper w-[90%] m-auto bg-amber-200 flex justify-between items-center ">
        {/*  */}

        {/* hero left side  */}
        <div className="heroLeft bg-red-300 w-[50%] pl-14 ">
          {/* hero top heading  */}

          <div className="heroTop bg-lime-300 text-5xl  font-semibold mb-4">
            <h1 className=" bg-sky-300 mb-2 ">One Step</h1>
            <h1 className=" bg-sky-300 mb-2 ">Closer To Your</h1>
            <h1 className=" custom-gradient   ">Dream Job</h1>
          </div>
          {/* hero top heading */}

          {/* hero mid paragrapg  */}

          <div className="heroMid bg-violet-400 mb-3 w-[80%] ">
            <p className=" text-color ">
              Explore thousands of job opportunities with all the <br />{" "}
              information you need. Its your future. Come find it. Manage all{" "}
              <br />
              your job application from start to finish.
            </p>
          </div>
          {/* hero mid paragrapg  */}

          {/* hero bottom button  */}
          <div className="heroButton">
            <Button content={"Get Started"} />
          </div>
          {/* hero bottom button  */}
        </div>
        {/* hero left side  */}

        {/*  */}

        {/* hero right  */}
        <div className="heroRight  bg-blue-300 w-[50%] ">
          <div className="heroImg bg-red-500 w-[80%] m-auto ">
            <img
              src="../../public/images/user.png"
              className=" w-full h-full "
              alt=""
            />
          </div>
        </div>
        {/* hero right  */}

        {/*  */}
      </div>
    </div>
  );
};

export default Hero;
