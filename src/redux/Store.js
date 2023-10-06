import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import createCounter from "./CounterSlice";
import FizzSlice from "./FizzSlice";
export default configureStore({
  reducer: {
    counter: createCounter,
    data: FizzSlice,
  },
});
