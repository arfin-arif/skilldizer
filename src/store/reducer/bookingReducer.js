import { createSlice } from '@reduxjs/toolkit';

export const initialState = {};

const bookingReducer = createSlice({
	name: 'booking',
	initialState,
	reducers: {
		userBookingsRequest: state => {
			state.loading = true;
		},
		userBookingsSuccess: (state, { payload }) => {
			state.loading = false;
			state.booking = payload;
		},
		userBookingsFailure: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		userNameRequest: state => {
			state.loading = true;
		},
		userNameSuccess: (state, { payload }) => {
			state.loading = false;
			state.userName = payload;
		},
		userNameFailure: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		clearError: state => {
			state.loading = false;
			state.error = null;
		},
	},
});

export const {
	userBookingsRequest,
	userBookingsSuccess,
	userBookingsFailure,
	userNameRequest,
	userNameSuccess,
	userNameFailure,
	clearError,
} = bookingReducer.actions;

export default bookingReducer.reducer;
