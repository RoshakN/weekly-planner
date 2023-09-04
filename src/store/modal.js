import { createSlice } from "@reduxjs/toolkit";

const initialModalState = {
  open: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialModalState,
  reducers: {
    setOpen(state) {
      state.open = !state.open;
    },
  },
});

export const modalActions = modalSlice.actions;
export default modalSlice;
