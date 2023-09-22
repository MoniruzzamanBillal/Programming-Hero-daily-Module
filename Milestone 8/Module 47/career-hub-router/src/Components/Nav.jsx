import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

import { RiMenu3Line } from "react-icons/ri";
import { GrClose } from "react-icons/gr";

// Statistics
const navLinks = [
  {
    href: "Statistics",
    element: "Statistics",
  },
  {
    href: "Applied Jobs",
    element: "Applied Jobs",
  },
  {
    href: "Blog",
    element: "Blog",
  },
];

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <div className="navContainer hero-bg  py-2  ">
      <div className="navWrapper w-[95%] sm:w-[90%] m-auto flex justify-between items-center ">
        {/*  */}

        {/* left side of nav  */}
        <div className="navLeft  ">
          <h1 className="  text-2xl text-gray-950 font-semibold ">CareerHub</h1>
        </div>
        {/* left side of nav  */}

        {/*  */}

        {/* middle part of nav  */}
        <div className="navMiddle hidden sm:block  ">
          <div className="navLinks">
            {navLinks.map((ele, ind) => (
              <NavLink
                key={ind}
                className={`  ${
                  navLinks.length - 1 === ind ? "mr-0" : "mr-8"
                } text-lg text-color hover:text-blue-700  `}
              >
                {ele.element}
              </NavLink>
            ))}
          </div>
        </div>
        {/* middle part of nav  */}

        {/*  */}

        {/* right side of nav  */}
        <div className="navRight   ">
          {/* nav right button  */}
          <div className="navRightButton hidden sm:block ">
            <Button content="Star Applying" px="px-5" />
          </div>
          {/* nav right button  */}

          {/* mobile menu  */}
          <div className="mobileMenu block sm:hidden   relative  ">
            {/* mobile menu icon  */}

            <div className="menuIcon text-3xl   " onClick={() => toggleMenu()}>
              {toggle ? <GrClose /> : <RiMenu3Line />}
            </div>
            {/* mobile menu icon  */}

            {/* mobile menu link  */}
            <div
              className={` mobileMenu ${
                toggle ? "block" : "hidden"
              } w-[8rem] m-auto   absolute transform -translate-x-1/2 -translate-y-1/2 top-[5.7rem] -right-[4rem] `}
            >
              <div className="navLinks flex flex-col bg-gray-200 px-4 py-3 shadow-sm rounded-md ">
                {navLinks.map((ele, ind) => (
                  <NavLink
                    key={ind}
                    className={`  ${
                      navLinks.length - 1 === ind ? "mb-0" : "mb-3"
                    } hover:text-blue-700 `}
                  >
                    {ele.element}
                  </NavLink>
                ))}
              </div>
            </div>
            {/* mobile menu link  */}
          </div>
          {/* mobile menu  */}
        </div>
        {/* right side of nav  */}
      </div>
    </div>
  );
};

export default Nav;
