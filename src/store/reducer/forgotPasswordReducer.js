import { createSlice } from "@reduxjs/toolkit";

export const initialState = {};

const forgotPasswordReducer = createSlice({
  name: "forgotPassword",
  initialState,
  reducers: {
    forgotPasswordRequest: (state) => {
      state.loading = true;
    },
    forgotPasswordSuccess: (state, { payload }) => {
      state.loading = false;
      state.message = payload;
    },
    forgotPasswordFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    clearError: (state) => {
      state.error = null;
    },
    clearSuccess: (state) => {
      state.message = null;
    },
  },
});

export const {
  forgotPasswordRequest,
  forgotPasswordSuccess,
  forgotPasswordFailure,
  clearError,
  clearSuccess,
} = forgotPasswordReducer.actions;

export default forgotPasswordReducer.reducer;
