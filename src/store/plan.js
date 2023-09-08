import { createSlice } from "@reduxjs/toolkit";

const initialPlanState = {
  editingDay: "",
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
    setEditingDay(state, action) {
      state.editingDay = action.payload;
    },
    addTask(state, action) {
      switch (state.editingDay) {
        case "saturday":
          state.saturday = [...state.saturday, action.payload];
          break;
        case "sunday":
          state.sunday = [...state.sunday, action.payload];
          break;
        case "monday":
          state.monday = [...state.monday, action.payload];
          break;
        case "tuesday":
          state.tuesday = [...state.monday, action.payload];
          break;
        case "wednesday":
          state.wednesday = [...state.monday, action.payload];
          break;
        case "thursday":
          state.thursday = [...state.monday, action.payload];
          break;
        case "friday":
          state.friday = [...state.monday, action.payload];
          break;
      }
    },
  },
});

export const planActions = planSlice.actions;
export default planSlice;
