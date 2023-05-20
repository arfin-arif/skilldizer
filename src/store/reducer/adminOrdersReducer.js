import { createSlice } from "@reduxjs/toolkit";

export const initialState = {};

const adminOrdersReducer = createSlice({
  name: "orders",
  initialState,
  reducers: {
    adminOrdersRequest: (state) => {
      state.loading = true;
    },
    adminOrdersSuccess: (state, { payload }) => {
      state.loading = false;
      state.orders = payload;
    },
    adminOrdersFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    updateOrderRequest: (state) => {
      state.loading = true;
    },
    updateOrderSuccess: (state, { payload }) => {
      state.loading = false;
      state.message = payload;
    },
    updateOrderFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    deleteOrderRequest: (state) => {
      state.loading = true;
    },
    deleteOrderSuccess: (state, { payload }) => {
      state.loading = false;
      state.message = payload;
    },
    deleteOrderFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    orderNewStatusRequest: (state) => {
      state.loading = true;
    },
    orderNewStatusSuccess: (state, { payload }) => {
      state.loading = false;
      state.message = payload;
    },
    orderNewStatusFailure: (state, { payload }) => {
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
  adminOrdersRequest,
  adminOrdersSuccess,
  adminOrdersFailure,
  updateOrderRequest,
  updateOrderSuccess,
  updateOrderFailure,
  deleteOrderRequest,
  deleteOrderSuccess,
  deleteOrderFailure,

  orderNewStatusRequest,
  orderNewStatusSuccess,
  orderNewStatusFailure,
  clearError,
  clearSuccess,
} = adminOrdersReducer.actions;

export default adminOrdersReducer.reducer;
