import { createSlice } from "@reduxjs/toolkit";

export const initialState = {};

const changePassReducer = createSlice({
  name: "changePassword",
  initialState,
  reducers: {
    changePasswordRequest: (state) => {
      state.loading = true;
    },
    changePasswordSuccess: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    },
    changePasswordFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearSuccess: (state) => {
      state.data = null;
      state.error = null;
    },
  },
});

export const {
  changePasswordRequest,
  changePasswordSuccess,
  changePasswordFailure,
  clearError,
  clearSuccess,
} = changePassReducer.actions;

export default changePassReducer.reducer;
