import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personInfo: null,
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
});

export const {} = registerSlice.actions;
export default registerSlice.reducers;
