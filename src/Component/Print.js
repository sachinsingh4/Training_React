import React, { useEffect, useState } from "react";
import Condition from "./Condition";
import { setData } from "../redux/FizzSlice";
import { useDispatch, useSelector } from "react-redux";
export default function Print({ checked }) {
  const dispatch = useDispatch();
  const handlechange = (value) => {
    dispatch(setData(Number(value)));
  };
  const list = useSelector((state) => state.data.data);
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
          <input
            type="number"
            name="name"
            onChange={(e) => handlechange(e.target.value)}
          ></input>
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
