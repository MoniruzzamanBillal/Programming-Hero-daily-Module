import React from "react";

const Button = ({ content, px }) => {
  return (
    <div>
      <button
        className={` button-bg text-white font-semibold py-2 ${
          px ? px : "px-5"
        }  hover:shadow rounded active:scale-95 active:shadow-md`}
      >
        {content ? content : "button"}
      </button>
    </div>
  );
};

export default Button;
