import React from "react";
import { useSelector } from "react-redux";
export default function Tesing() {
  const count = useSelector((state) => state.counter.value);
  console.log(count);
  return <div>Tesing</div>;
}
