import React, { useEffect } from "react";
import color from "./myColor.module.css";
export default function Condition({ id, checked }) {
  const conditionCheck = () => {
    let i = id;
    return (i + 1) % 3 === 0 && (i + 1) % 5 === 0 ? (
      checked ? (
        <div className={color.fizzbuzz}>FizzBuzz</div>
      ) : (
        <div className={color.buzzfizz}>BuzzFizz</div>
      )
    ) : (i + 1) % 5 === 0 ? (
      <div className={color.buzz}>Buzz</div>
    ) : (i + 1) % 3 === 0 ? (
      <div className={color.fizz}>Fizz</div>
    ) : (
      <div>{i + 1}</div>
    );
  };
  return <div>{conditionCheck()}</div>;
}
