import React, { useContext, useState } from "react";
import NavBar from "../Components/NavBar";
import InputField from "../Components/InputField";
import { Link, useNavigate } from "react-router-dom";
import UseInputHook from "../Hooks/InputHook";
import { AppContext } from "../Context/Context";

const Register = () => {
  const navigate = useNavigate();
  const { registerEmail } = useContext(AppContext);
  const nameInput = UseInputHook();
  const imageInput = UseInputHook();
  const emailInput = UseInputHook();
  const passwordInput = UseInputHook();

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleRegister = () => {
    if (!isChecked) {
      return alert("terms not selected");
    }

    registerEmail(emailInput.value, passwordInput.value)
      .then((user) => {
        // console.log(user);
        navigate(`/`);
      })
      .catch((error) => console.log(error));

    nameInput.reset();
    imageInput.reset();
    emailInput.reset();
    passwordInput.reset();
    handleCheckboxChange();
    navigate(`/login`);
  };

  return (
    <div className="RegisterContainer  ">
      <div className="RegisterWrapper">
        {/* nav component  */}
        <div className="navComponent py-2">
          <NavBar />
        </div>
        {/* nav component  */}

        {/* login body   */}
        <div className="registerInput bg-gray-200 w-[45%] m-auto flex flex-col justify-center items-center py-9 px-7 shadow-md ">
          <h1 className="  w-full text-center block text-2xl font-semibold pb-5 mb-4 border-b border-gray-400 ">
            Register your account
          </h1>

          {/* input component  */}
          {/* heading,inpType,placeHolder */}
          <InputField
            heading={"Your Name"}
            inpType={"text"}
            placeHolder="Enter your name"
            inputId="name_input"
            inputHook={nameInput}
          />
          <InputField
            heading={"Photo Url"}
            inpType={"text"}
            placeHolder="Enter photo url"
            inputId="photo_input"
            inputHook={imageInput}
          />
          <InputField
            heading={"Email"}
            inpType={"email"}
            placeHolder="Enter your email"
            inputId="email_input"
            inputHook={emailInput}
          />
          <InputField
            heading={"Password"}
            inpType={"password"}
            placeHolder="Enter your email"
            inputId="password_input"
            inputHook={passwordInput}
          />

          <div className="flex items-start mt-3  w-full ">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                onChange={handleCheckboxChange}
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 "
                required
              />
            </div>
            <label
              for="remember"
              className="ml-2 text-sm font-medium text-gray-800 "
            >
              I agree with the{" "}
              <Link className="text-blue-600 hover:underline dark:text-blue-500">
                terms and conditions
              </Link>
              .
            </label>
          </div>

          {/* input component  */}

          <button
            className=" mt-5 bg-gray-600 hover:bg-gray-700 active:scale-[.99] py-2 w-full text-white "
            onClick={() => handleRegister()}
          >
            Register
          </button>

          <p className="  mt-3 ">
            Already have An Account ?
            <span className="text-red-500">
              <Link to={`/login`}>Log in</Link>
            </span>{" "}
          </p>
        </div>
        {/* login body   */}
      </div>
    </div>
  );
};

export default Register;
