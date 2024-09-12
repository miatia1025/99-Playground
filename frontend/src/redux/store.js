import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice.js";

const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export { store };
