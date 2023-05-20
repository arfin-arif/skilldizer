import { createSlice } from "@reduxjs/toolkit";

export const initialState = {};

const updateReducer = createSlice({
  name: "update",
  initialState,
  reducers: {
    updateRequest: (state) => {
      state.loading = true;
    },
    updateSuccess: (state, { payload }) => {
      state.loading = false;
      state.message = payload;
    },
    updateFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    againEmailVerifyRequest: (state) => {
      state.loading = true;
    },
    againEmailVerifySuccess: (state, { payload }) => {
      state.loading = false;
      state.message = payload;
    },
    againEmailVerifyFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearSuccess: (state) => {
      state.message = null;
      state.error = null;
    },
  },
});

export const {
  updateRequest,
  updateSuccess,
  updateFailure,
  againEmailVerifyRequest,
  againEmailVerifySuccess,
  againEmailVerifyFailure,
  clearError,
  clearSuccess,
} = updateReducer.actions;

export default updateReducer.reducer;
