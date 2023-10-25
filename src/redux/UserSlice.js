import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const createUserSlice = createSlice({
  name: "user",
  initialState: {
    loader: false,
    user: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserInfo.pending, (state) => {
      state.loader = true;
      console.log("pending");
    });
    builder.addCase(fetchUserInfo.fulfilled, (state, action) => {
      state.loader = false;
      // console.log("action", action.payload);
      let data = action.payload;
      // console.log("data", data);
      state.user = data;

      console.log("Fullfield");
    });
    builder.addCase(fetchUserInfo.rejected, (state) => {
      console.log("Rejected state");
    });
  },
});
export default createUserSlice.reducer;

export const fetchUserInfo = createAsyncThunk(
  "user/fetchUserInfo",
  async (payload) => {
    return await getAllEmployee(payload);
  }
);

const commonConnection = async ({ url, method, data }) => {
  const res = await axios.get(url, {
    headers: {
      "Content-Type": "application/json",
    },
    params: data,
  });
  //   console.log("data", res);
  return res.data;
};

export const getAllEmployee = async (city) => {
  const result = await commonConnection({
    url: "http://localhost:5000/api/employee/getAllemployee",
    method: "GET",
    data: { address: city },
  });
  console.log("result", result);
  return result;
};
