import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="heroContainer hero-bg pt-6">
      <div className="heroWrapper w-[95%] sm:w-[90%] m-auto  flex flex-col sm:flex-row justify-between items-center ">
        {/*  */}

        {/* hero left side  */}
        <div className="heroLeft  mb-6 sm:mb-0 w-[100%] sm:w-[50%] pl-1 md:pl-9 lg:pl-14 ">
          {/* hero top heading  */}

          <div className="heroTop  text-4xl sm:text-3xl md:text-4xl lg:text-5xl  font-bold md:font-semibold mb-3 md:mb-4">
            <h1 className="  mb-1 md:mb-2 ">One Step</h1>
            <h1 className="  mb-1 md:mb-2 ">Closer To Your</h1>
            <h1 className=" custom-gradient   ">Dream Job</h1>
          </div>
          {/* hero top heading */}

          {/* hero mid paragrapg  */}

          <div className="heroMid  mb-4  w-[100%] md:w-[90%] lg:w-[80%] ">
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
            {/* hero left button  */}

            <Button content={"Get Started"} />
            {/* hero left button  */}
          </div>
          {/* hero bottom button  */}
        </div>
        {/* hero left side  */}

        {/*  */}

        {/* hero right  */}
        <div className="heroRight   w-[100%] sm:w-[50%] ">
          <div className="heroImg  w-[85%] sm:w-[100%] md:w-[90%] lg:w-[80%] m-auto ">
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
