import { configureStore } from "@reduxjs/toolkit";
import { facilityReducer } from "./reducers/facilityReducer";
 // Import your reducer

const store = configureStore({
  reducer: {
    facilities: facilityReducer, // Add facility reducer
  },
});

export default store;
