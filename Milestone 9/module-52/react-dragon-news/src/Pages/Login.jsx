import React, { useContext } from "react";
import NavBar from "../Components/NavBar";
import InputField from "../Components/InputField";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UseInputHook from "../Hooks/InputHook";
import { AppContext } from "../Context/Context";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { emailLogin } = useContext(AppContext);
  const emailInput = UseInputHook();
  const passwordInput = UseInputHook();

  const handleSubmit = () => {
    emailLogin(emailInput.value, passwordInput.value)
      .then((user) => {
        navigate(location?.state ? location.state : "/");
      })
      .catch((erroe) => console.log(error));
  };

  return (
    <div className="loginContainer  ">
      <div className="loginWrapper">
        {/* nav component  */}
        <div className="navComponent py-2">
          <NavBar />
        </div>
        {/* nav component  */}

        {/* login body   */}
        <div className="loginInput bg-gray-200 w-[45%] m-auto flex flex-col justify-center items-center py-9 px-7 shadow-md ">
          <h1 className="  w-full text-center block text-2xl font-semibold pb-5 mb-4 border-b border-gray-400 ">
            Login your account{" "}
          </h1>

          {/* input component  */}
          {/* heading,inpType,placeHolder */}
          <InputField
            heading={"Email address"}
            inpType={"email"}
            placeHolder="Enter Email address"
            inputId="email_input"
            inputHook={emailInput}
          />
          <InputField
            heading={"Password"}
            inpType={"Password"}
            placeHolder="Enter password"
            inputId="password_input"
            inputHook={passwordInput}
          />

          {/* input component  */}

          <button
            className=" mt-5 bg-gray-600 hover:bg-gray-700 active:scale-[.99] py-2 w-full text-white "
            onClick={() => handleSubmit()}
          >
            Log in
          </button>

          <p className="  mt-3 ">
            Dont’t Have An Account ?{" "}
            <span className="text-red-500">
              <Link to={`/register`}>Register</Link>
            </span>{" "}
          </p>
        </div>
        {/* login body   */}
      </div>
    </div>
  );
};

export default Login;
