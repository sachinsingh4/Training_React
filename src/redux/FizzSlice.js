import { createSlice } from "@reduxjs/toolkit";

const fizzSlice = createSlice({
  name: "fizz",
  initialState: {
    data: 0,
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = fizzSlice.actions;
export default fizzSlice.reducer;
