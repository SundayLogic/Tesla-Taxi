import { configureStore } from "@reduxjs/toolkit";

// Importing navReducer to use as a reducer
import navReducer from "./slices/navSlice";

// Creating a store with the navReducer as its reducer
export const store = configureStore({
  reducer: {
    nav: navReducer,
  },
});
