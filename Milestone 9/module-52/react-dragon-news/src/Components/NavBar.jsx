import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { RiMenu3Fill, RiCloseFill, RiXingLine } from "react-icons/ri";
import { AppContext } from "../Context/Context";

const navLink = [
  {
    item: "Home",
    link: "/",
  },
  {
    item: "About",
    link: "/about",
  },
  {
    item: "Career",
    link: "/career",
  },
];

const NavBar = () => {
  const { logOut } = useContext(AppContext);
  const { user } = useContext(AppContext);

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleLogout = () => {
    logOut()
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <div className="navContainer mb-5  ">
      <div className="navWrapper   flex justify-between items-center ">
        {/* nav left  */}
        <div className="navLeft  ">
          <div className="navLeftImg">
            <Link
              to={`/`}
              className="self-center cursor-pointer text-3xl font-semibold whitespace-nowrap "
            >
              Flowbite
            </Link>
          </div>
        </div>
        {/* nav left  */}

        {/* nav Middle   */}
        <div className="navMiddle hidden sm:flex   ">
          {navLink.map((ele, ind) => (
            <div
              key={ind}
              className={` text-lg ${
                ind === navLink.length - 1 ? "pr-0" : "pr-6"
              }  `}
            >
              <p className="  cursor-pointer dark3 "> {ele.item} </p>
            </div>
          ))}
        </div>
        {/* nav Middle   */}

        {/* nav right  */}
        <div className="navRight   ">
          {/* !mobile view  */}
          <div className="notMobile hidden sm:flex justify-center items-center ">
            {/* avatar image  */}
            <div className="avaterImg pr-2">
              <img
                class="w-10 h-10 p-1 rounded-full ring-1 ring-gray-300 dark:ring-gray-500"
                src="../../src/assets/2.png"
                alt="Bordered avatar"
              />
            </div>
            {/* avatar image  */}

            {user ? (
              <Link
                className=" bg-gray-600 py-2 px-8  text-white font-semibold "
                onClick={() => handleLogout()}
              >
                Log out
              </Link>
            ) : (
              <Link
                to={`/login`}
                className=" bg-gray-600 py-2 px-8  text-white font-semibold "
              >
                Log in
              </Link>
            )}
          </div>

          {/* !mobile view  */}
          {/*  */}
          {/* mobile view  */}

          <div className="mobileView flex sm:hidden relative ">
            {/* menu icon  */}
            <div className="menuIcon text-2xl " onClick={() => handleToggle()}>
              {!toggle ? <RiMenu3Fill /> : <RiCloseFill />}
            </div>
            {/* menu icon  */}

            {/* menu list  */}

            {toggle && (
              <div className="menuList text-center py-2 bg-gray-800 absolute transform -translate-x-1/2 -translate-y-1/2 -right-[5rem] top-[6.2rem] w-[10rem] ">
                <div className="menuItem  ">
                  {navLink.map((ele, ind) => (
                    <div
                      key={ind}
                      className={` text-base ${
                        ind === navLink.length - 1 ? "pb-0" : "pb-3"
                      }  `}
                    >
                      <p
                        className="cursor-pointer text-gray-50 "
                        onClick={() => handleToggle()}
                      >
                        {" "}
                        {ele.item}{" "}
                      </p>
                    </div>
                  ))}
                </div>
                <Link
                  to={`/login`}
                  className=" bg-red-400 mt-2 py-1 px-6  text-white "
                >
                  Log in
                </Link>
              </div>
            )}
            {/* menu list  */}
          </div>

          {/* mobile view  */}
        </div>
        {/* nav right  */}
      </div>
    </div>
  );
};

export default NavBar;
