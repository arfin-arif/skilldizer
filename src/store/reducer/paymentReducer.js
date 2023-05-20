import { createSlice } from '@reduxjs/toolkit';

export const initialState = {};

const paymentReducer = createSlice({
	name: 'payment',
	initialState,
	reducers: {
		paypalPaymentRequest: state => {
			state.loading = true;
		},
		paypalPaymentSuccess: (state, { payload }) => {
			state.loading = false;
			state.payment = payload;
		},
		paypalPaymentFailure: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		paypalPayoutRequest: state => {
			state.loading = true;
		},
		paypalPayoutSuccess: (state, { payload }) => {
			state.loading = false;
			state.payout = payload;
		},
		paypalPayoutFailure: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		clearError: state => {
			state.error = null;
		},
	},
});

export const {
	paypalPaymentRequest,
	paypalPaymentSuccess,
	paypalPaymentFailure,
	paypalPayoutRequest,
	paypalPayoutSuccess,
	paypalPayoutFailure,
	clearError,
} = paymentReducer.actions;

export default paymentReducer.reducer;
