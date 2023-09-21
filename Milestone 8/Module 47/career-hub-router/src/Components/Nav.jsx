import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

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
  return (
    <div className="navContainer hero-bg  py-2  ">
      <div className="navWrapper  w-[90%] m-auto flex justify-between items-center ">
        {/*  */}

        {/* left side of nav  */}
        <div className="navLeft  ">
          <h1 className="  text-2xl text-gray-950 font-semibold ">CareerHub</h1>
        </div>
        {/* left side of nav  */}

        {/*  */}

        {/* middle part of nav  */}
        <div className="navMiddle  ">
          <div className="navLinks">
            {navLinks.map((ele, ind) => (
              <NavLink
                key={ind}
                className={`  ${
                  navLinks.length - 1 === ind ? "mr-0" : "mr-9"
                } text-lg text-color shado  `}
              >
                {ele.element}
              </NavLink>
            ))}
          </div>
        </div>
        {/* middle part of nav  */}

        {/*  */}

        {/* right side of nav  */}
        <div className="navRight  ">
          <Button content="Star Applying" px="px-5" />
        </div>
        {/* right side of nav  */}
      </div>
    </div>
  );
};

export default Nav;
