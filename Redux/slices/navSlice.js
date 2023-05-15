import { createSlice } from "@reduxjs/toolkit";

// Initial state for the navigation slice
const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

// Create the navSlice using createSlice function
export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    // Reducer function to set the origin
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    // Reducer function to set the destination
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    // Reducer function to set the travel time information
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

// Export individual actions
export const { setOrigin, setDestination, setTravelTimeInformation } =
  navSlice.actions;

// Selectors to retrieve specific parts of the navigation state
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelInformation = (state) =>
  state.nav.travelTimeInformation;

// Export the navSlice reducer
export default navSlice.reducer;
