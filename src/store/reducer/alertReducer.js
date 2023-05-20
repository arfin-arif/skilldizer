import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  open: false,
  severity: "",
  message: "",
};

const alertReducer = createSlice({
  name: "alert",
  initialState,
  reducers: {
    openAlert: (state, { payload }) => {
      state.open = true;
      state.severity = payload.severity;
      state.message = payload.message;
    },
    closeAlert: (state, { payload }) => {
      state.open = false;
      state.severity = "";
      state.message = "";
    },
  },
});

export const { openAlert, closeAlert } = alertReducer.actions;

export default alertReducer.reducer;
