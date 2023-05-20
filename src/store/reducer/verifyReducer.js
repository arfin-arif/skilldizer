import { createSlice } from "@reduxjs/toolkit";

export const initialState = {};

const verifyReducer = createSlice({
  name: "verify",
  initialState,
  reducers: {
    verifyNumberRequest: (state) => {
      state.loading = true;
    },
    verifyNumberSuccess: (state, { payload }) => {
      state.loading = false;
      state.numberVerify = payload;
    },
    verifyNumberFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  verifyNumberRequest,
  verifyNumberSuccess,
  verifyNumberFailure,

  clearError,
} = verifyReducer.actions;

export default verifyReducer.reducer;
