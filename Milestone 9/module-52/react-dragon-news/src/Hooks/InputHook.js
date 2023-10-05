import { useState } from "react";

const UseInputHook = (DefaultValue = "") => {
  const [value, setValue] = useState(DefaultValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue("");
  };

  return {
    value,
    onChange: handleChange,
    reset,
  };
};

export default UseInputHook;
