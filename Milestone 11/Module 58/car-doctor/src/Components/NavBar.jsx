import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { RiMenu3Fill, RiCloseFill, RiXingLine } from "react-icons/ri";
import { AuthContext } from "../Context/AuthContext";

const navLink = [
  {
    item: "Home",
    link: "/",
  },
  {
    item: "My booking",
    link: "/booking",
  },
  {
    item: "About us",
    link: "/",
  },
  {
    item: "My Cart",
    link: "/",
  },
];

const NavBar = () => {
  const { user, logOut, darkMode, toggleTheme } = useContext(AuthContext);
  const [toggle, setToggle] = useState(false);

  // toggle dark theme
  const handleTheme = () => {
    toggleTheme();
    document.documentElement.classList.toggle("dark");
  };

  // console.log(darkMode);

  // menu toggle
  const handleToggle = () => {
    setToggle(!toggle);
  };

  // logout functionality

  const handleLogout = () => {
    logOut()
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  // console.log(user);
  return (
    <div className="navContainer  z-50 py-2 bg-gray-600  fixed w-full drop-shadow-lg ">
      <div className="navWrapper flex justify-between w-[98%] xsm:w-[97%] lg:w-[96%] m-auto items-center ">
        {/* nav left  */}
        <div className="navLeft  ">
          <div className="navLeftImg  ">
            <Link
              to={`/`}
              className="self-center cursor-pointer  font-semibold whitespace-nowrap "
            >
              <div className=" flex justify-center items-center  ">
                <div className="logo w-[2.1rem] h-[2.1rem] xsm:w-[2.6rem] xsm:h-[2.5rem] sm:w-[2.8rem] sm:h-[2.7rem]  rounded-md overflow-auto ">
                  <img src="/logo.png" className="  w-full h-full " alt="" />{" "}
                </div>
                <p className=" text-white text-sm xsm:text-base lg:text-xl pl-1.5 dancingFont ">
                  Car doctor
                </p>
              </div>
            </Link>
          </div>
        </div>
        {/* nav left  */}

        {/* nav Middle   */}

        <div className="navLinks hidden md:flex ">
          {navLink.map((ele, ind) => (
            <NavLink
              key={ind}
              to={ele.link}
              className={`  ${
                navLink.length - 1 === ind ? "mr-0" : "mr-5"
              } relative group youngSerifFont text-base lg:text-lg text-[#E4F1FF] hover:text-blue-500 hover:drop-shadow-md  `}
            >
              {ele.item}
              <span className="absolute -bottom-[.15rem] left-1/2 w-0 h-[.14rem] bg-blue-400 group-hover:w-1/2 group-hover:transition-all"></span>
              <span className="absolute -bottom-[.15rem] right-1/2 w-0 h-[.14rem] bg-red-400 group-hover:w-1/2 group-hover:transition-all"></span>
            </NavLink>
          ))}
        </div>

        {/* nav Middle   */}

        {/* nav right  */}
        <div className="navRight  flex justify-between items-center  ">
          {/* !mobile view  */}
          <div className="notMobile hidden md:flex justify-center items-center ">
            {/* avatar image  */}
            <div className="avaterImg pr-2">
              {user?.photoURL && (
                <div className="flex items-center gap-1">
                  <p className=" dancingFont font-semibold text-xs lg:text-sm">
                    {" "}
                    {user.displayName}
                  </p>
                  <img
                    className=" w-7 h-7 lg:w-9 lg:h-9  rounded-full ring-1 ring-gray-300 dark:ring-gray-500"
                    src={user.photoURL}
                    alt="Bordered avatar"
                  />
                </div>
              )}
            </div>
            {/* avatar image  */}

            {user ? (
              <Link
                to={`/login`}
                className=" bg-gray-600 py-2 px-3 lg:px-4  text-white font-semibold text-xs lg:text-sm  "
                onClick={() => handleLogout()}
              >
                Log out
              </Link>
            ) : (
              <Link
                to={`/login`}
                className=" bg-gray-600 py-2 px-3 lg:px-4  text-white font-semibold text-xs lg:text-sm "
              >
                Log in
              </Link>
            )}
            {/* <Link
              to={`/login`}
              className=" bg-gray-600 py-2 px-3 lg:px-4  text-white font-semibold text-xs lg:text-sm "
            >
              Log in
            </Link> */}
          </div>

          {/* !mobile view  */}

          {/* toggle button  */}
          <div
            className="toggleMode  pl-0 md:pl-2 mr-3 md:pr-0 text-2xl "
            onClick={handleTheme}
          >
            {darkMode ? <BsFillMoonFill /> : <BsFillSunFill />}
          </div>
          {/* toggle button  */}

          {/*  */}
          {/* mobile view  */}

          <div className="mobileView flex md:hidden relative ">
            {/* menu icon  */}
            <div
              className="menuIcon text-lg xsm:text-xl sm:text-2xl "
              onClick={() => handleToggle()}
            >
              {!toggle ? <RiMenu3Fill /> : <RiCloseFill />}
            </div>
            {/* menu icon  */}

            {/* menu list  */}

            {toggle && (
              <div className="menuList text-center py-2 bg-[#183D3D] absolute transform -translate-x-1/2 -translate-y-1/2 -right-[4.8rem] top-[7.1rem] sm:top-[7.4rem] w-[10rem] ">
                <div className="menuItem mb-4  ">
                  {navLink.map((ele, ind) => (
                    <div
                      key={ind}
                      className={` text-base ${
                        ind === navLink.length - 1 ? "pb-0" : "pb-3"
                      }  `}
                    >
                      <a
                        href={ele.link}
                        className="  cursor-pointer text-gray-50 "
                        onClick={() => handleToggle()}
                      >
                        {" "}
                        {ele.item}{" "}
                      </a>
                    </div>
                  ))}
                </div>

                {user ? (
                  <Link
                    className=" bg-red-400  py-1.5 px-5  text-white "
                    // onClick={() => {
                    //   handleLogout();
                    //   handleToggle();
                    // }}
                  >
                    Log out
                  </Link>
                ) : (
                  <Link
                    to={`/login`}
                    className=" bg-red-400  py-1.5 px-5  text-white "
                    onClick={() => handleToggle()}
                  >
                    Log in
                  </Link>
                )}
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
