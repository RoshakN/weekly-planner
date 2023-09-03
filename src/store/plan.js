import { createSlice } from "@reduxjs/toolkit";

const initialPlanState = {
  saturday: {
    task1: "This is task 1",
  },
  sunday: {},
  monday: {},
  tuesday: {},
  wednesday: {},
  thursday: {},
  friday: {},
};

const planSlice = createSlice({
  name: "plan",
  initialState: initialPlanState,
  reducers: {
    addTaskSat(state, action) {
      state.saturday.task1 = action.payload;
    },
  },
});

export const planActions = planSlice.actions;
export default planSlice;
