import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../Firebase.config";
// import { axios } from "axios";

import axios, { isCancel, AxiosError } from "axios";

const Login = () => {
  const { user, login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // console.log(location);

  const handleLogin = () => {
    login(email, password)
      .then((response) => {
        console.log(response.user);

        // navigate("/");
        const loggedUser = { email };
        axios
          .post("http://localhost:5000/jwt", loggedUser, {
            withCredentials: true,
          })
          .then((response) => console.log(response.data))
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };
  // google login
  const handleGoogleLogin = () => {
    console.log("google login click");
    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(auth, googleProvider)
      .then((response) => {
        alert("logged in successfully");
        const mail = response.user.email;
        const loggedUser = { mail };
        // console.log(response);
        axios
          .post("http://localhost:5000/jwt", loggedUser, {
            withCredentials: true,
          })
          .then((response) => console.log(response.data))
          .catch((error) => console.log(error));
        // setTimeout(() => {
        //   navigate(location?.state ? location.state : "/");
        // }, "1200");
      })
      .catch((error) => console.log(error));
  };
  // console.log(user);

  return (
    <div className=" bg-blue-400 text-center text-2xl py-4 ">
      {/*  */}
      {/*  */}

      {/* <!-- component --> */}
      <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div class="relative py-3 sm:max-w-xl sm:mx-auto">
          <div class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div class="max-w-md mx-auto">
              <div>
                <h1 class="text-2xl font-semibold">
                  Login Form with Floating Labels
                </h1>
              </div>
              <div class="divide-y divide-gray-200">
                <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div class="relative">
                    <input
                      id="email"
                      name="email"
                      type="text"
                      class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label
                      for="email"
                      class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Email Address
                    </label>
                  </div>
                  <div class="relative">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label
                      for="password"
                      class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      value={password}
                    >
                      Password
                    </label>
                  </div>
                  <div class="relative">
                    <button
                      class="bg-blue-500 text-white rounded-md px-2 py-1 active:scale-95 "
                      onClick={() => handleLogin()}
                    >
                      Submit
                    </button>
                  </div>
                  <p
                    className=" robotoFont mt-3 cursor-pointer hover:underline flex items-center text-base xsm:text-lg sm:text-xl gap-2 "
                    onClick={() => handleGoogleLogin()}
                  >
                    Sign in with
                    <span className=" text-xl sm:text-2xl">
                      <FcGoogle />
                    </span>{" "}
                  </p>
                  {/* google sign  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      {/*  */}
    </div>
  );
};

export default Login;
