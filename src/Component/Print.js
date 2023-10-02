import React, { useEffect, useState } from "react";
import Condition from "./Condition";
export default function Print({ checked }) {
  const [list, setList] = useState(0);
  const handlechange = (e) => {
    setList(Number(e.target.value));
  };
  return (
    <>
      <ul>
        <div
          style={{
            display: "flex",
            gap: "5px",
            marginLeft: "50%",
            marginBottom: "1%",
          }}
        >
          <label htmlFor="name">Enter number</label>
          <input type="number" name="name" onChange={handlechange}></input>
        </div>
        {Array.from(Array(list), (e, i) => {
          return (
            <ol key={i}>
              <Condition id={i} checked={checked} />
            </ol>
          );
        })}
      </ul>
    </>
  );
}
