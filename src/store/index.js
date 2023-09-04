import { configureStore } from "@reduxjs/toolkit";

// import reducers
import planSlice from "./plan";
import modalSlice from "./modal";

const store = configureStore({
  reducer: { plan: planSlice.reducer, modal: modalSlice.reducer },
});

export default store;
