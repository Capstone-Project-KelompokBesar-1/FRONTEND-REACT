import { configureStore } from "@reduxjs/toolkit";
import gymReducer from "./gymSlice";

export const store = configureStore({
  reducer: {
    gym: gymReducer,
  },
});

export default store;
