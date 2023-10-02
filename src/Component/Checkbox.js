import React from "react";

export default function Checkbox({ checked, setChecked }) {
  const handlechange = () => {
    setChecked(!checked);
  };
  return (
    <div>
      <label htmlFor="check">click Me</label>
      <input type="checkbox" name="check" onChange={handlechange}></input>
    </div>
  );
}
