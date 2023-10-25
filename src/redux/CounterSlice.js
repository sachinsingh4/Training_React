import { createSlice } from "@reduxjs/toolkit";

const createCounter = createSlice({
  name: "counter",
  initialState: {
    value: 110,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export default createCounter.reducer;
export const { increment } = createCounter.actions;
