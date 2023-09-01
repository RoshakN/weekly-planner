import { configureStore } from "@reduxjs/toolkit";

// import reducers
//reducers
import planSlice from "./plan";

const store = configureStore({
  reducer: { plan: planSlice.reducer },
});

export default store;
