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

const storedTasks = JSON.parse(localStorage.getItem("myTasks"));

const planSlice = createSlice({
  name: "plan",
  initialState: storedTasks || initialPlanState,
  reducers: {
    setEditingDay(state, action) {
      state.editingDay = action.payload;
    },
    setDoneTask(state, action) {
      state = state[state.editingDay].map((task) => {
        if (task.id === action.payload) {
          task.done = !task.done;
        }
        localStorage.setItem("myTasks", JSON.stringify(state));
      });
    },
    setDeleteTask(state, action) {
      state[state.editingDay] = state[state.editingDay].filter((task) => task.id !== action.payload);
      localStorage.setItem("myTasks", JSON.stringify(state));
    },
    addTask(state, action) {
      const id = Math.random().toString(36).substring(7);
      switch (state.editingDay) {
        case "saturday":
          state.saturday = [
            ...state.saturday,
            { taskTitle: action.payload, id: id, done: false },
          ];
          break;
        case "sunday":
          state.sunday = [
            ...state.sunday,
            { taskTitle: action.payload, id: id, done: false },
          ];
          break;
        case "monday":
          state.monday = [
            ...state.monday,
            { taskTitle: action.payload, id: id, done: false },
          ];
          break;
        case "tuesday":
          state.tuesday = [
            ...state.tuesday,
            { taskTitle: action.payload, id: id, done: false },
          ];
          break;
        case "wednesday":
          state.wednesday = [
            ...state.wednesday,
            { taskTitle: action.payload, id: id, done: false },
          ];
          break;
        case "thursday":
          state.thursday = [
            ...state.thursday,
            { taskTitle: action.payload, id: id, done: false },
          ];
          break;
        case "friday":
          state.friday = [
            ...state.friday,
            { taskTitle: action.payload, id: id, done: false },
          ];
          break;
      }
      localStorage.setItem("myTasks", JSON.stringify(state));
    },
  },
});

export const planActions = planSlice.actions;
export default planSlice;
