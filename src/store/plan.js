import { createSlice } from "@reduxjs/toolkit";

const initialPlanState = {
  saturday: [],
  sunday: [],
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
};

const planSlice = createSlice({
  name: "plan",
  initialState: initialPlanState,
  reducers: {
    addTaskSat(state, action) {
      state.saturday = action.payload;
    },
  },
});

export const planActions = planSlice.actions;
export default planSlice;
