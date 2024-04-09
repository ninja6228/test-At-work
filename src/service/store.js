import { configureStore } from "@reduxjs/toolkit";
import profiles from "../service/slice/profilesSlice";

export const store = configureStore({
  reducer: { profiles },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
