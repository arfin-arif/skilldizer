import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  users: [],
  error: null,
};

const adminUsersReducer = createSlice({
  name: "adminUsers",
  initialState,
  reducers: {
    adminUsersRequest: (state) => {
      state.loading = true;
    },
    adminUsersSuccess: (state, { payload }) => {
      state.loading = false;
      state.users = payload;
    },
    adminUsersFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    userUpdateRequest: (state) => {
      state.loading = true;
    },
    userUpdateSuccess: (state, { payload }) => {
      state.loading = false;
      state.message = payload;
    },
    userUpdateFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    userRemoveRequest: (state) => {
      state.loading = true;
    },
    userRemoveSuccess: (state, { payload }) => {
      state.loading = false;
      state.message = payload;
    },
    userRemoveFailure: (state, { payload }) => {
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
  adminUsersRequest,
  adminUsersSuccess,
  adminUsersFailure,
  userUpdateRequest,
  userUpdateSuccess,
  userUpdateFailure,
  userRemoveRequest,
  userRemoveSuccess,
  userRemoveFailure,
  clearError,
  clearSuccess,
} = adminUsersReducer.actions;

export default adminUsersReducer.reducer;
