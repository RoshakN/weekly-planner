import { createSlice } from "@reduxjs/toolkit";

const initialModalState = {
  text: "",
  open: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialModalState,
  reducers: {
    setOpen(state) {
      state.open = !state.open;
    },
    setText(state, action) {
      state.text = action.payload;
    },
  },
});

export const modalActions = modalSlice.actions;
export default modalSlice;
