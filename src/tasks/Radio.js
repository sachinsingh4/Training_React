import React from "react";

const Radio = ({ radioValue, setradioValue, setRadioTrue }) => {
  const handleChange = (event) => {
    if (event.target.value === "null") {
      setRadioTrue(false);
    }
    setradioValue(event.target.value);
  };
  return (
    <form className="d-flex justify-content-center">
      <p>Gender</p>
      <div>
        <input
          type="radio"
          value="male"
          checked={radioValue === "male"}
          onChange={handleChange}
        />{" "}
        Male
      </div>
      <div>
        <input
          type="radio"
          value="female"
          checked={radioValue === "female"}
          onChange={handleChange}
        />{" "}
        Female
      </div>
      <div>
        <input
          type="radio"
          value="null"
          checked={radioValue === "null"}
          onChange={handleChange}
        />{" "}
        Back to normal
      </div>
    </form>
  );
};
export default Radio;
