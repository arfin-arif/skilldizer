import { createSlice } from '@reduxjs/toolkit';
import Router from 'next/router';
import { successNotification } from '../../components/notification';

export const initialState = {};

const userReducer = createSlice({
	name: 'user',
	initialState,
	reducers: {
		loginRequest: state => {
			state.loading = true;
		},
		loginSuccess: (state, { payload }) => {
			state.loading = false;
			state.user = payload;
			successNotification('Login Successful');
		},
		loginFailure: (state, { payload }) => {
			state.loading = false;
			state.error = payload.message;
			state.errorCode = payload?.error?.errorCode;
		},
		googleLoginRequest: state => {
			state.loading = true;
		},
		googleLoginSuccess: (state, { payload }) => {
			state.loading = false;
			state.user = payload;
		},
		googleLoginFailure: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		facebookLoginRequest: state => {
			state.loading = true;
		},
		facebookLoginSuccess: (state, { payload }) => {
			state.loading = false;
			state.user = payload;
		},
		facebookLoginFailure: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		registerRequest: state => {
			state.loading = true;
		},
		registerSuccess: (state, { payload }) => {
			state.loading = false;
			state.user = payload;
		},
		registerFailure: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		loadUserRequest: state => {
			state.loading = true;
		},
		loadUserSuccess: (state, { payload }) => {
			state.loading = false;
			state.user = payload;
		},
		loadUserFailure: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		updateBillingInfoRequest: state => {
			state.loading = true;
		},
		updateBillingInfoSuccess: (state, { payload }) => {
			state.loading = false;
			state.message = payload;
		},
		updateBillingInfoFailure: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		otpVerifyRequest: state => {
			state.loading = true;
		},
		otpVerifySuccess: (state, { payload }) => {
			state.loading = false;
			state.user = payload;
		},
		otpVerifyFailure: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		emailVerifyRequest: state => {
			state.loading = true;
		},
		emailVerifySuccess: (state, { payload }) => {
			state.loading = false;
			state.user = payload;
		},
		emailVerifyFailure: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		logOutSuccess: (state, { payload }) => {
			state.loading = false;
			state.user = null;
			successNotification(payload);
			// Router.push('/login');
		},
		logOutFailure: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		deleteSuccess: (state, { payload }) => {
			state.loading = false;
			state.user = null;
			state.message = payload;
		},
		deleteFailure: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		resetPasswordRequest: state => {
			state.loading = true;
		},
		resetPasswordSuccess: (state, { payload }) => {
			state.loading = false;
			state.user = payload;
		},
		resetPasswordFailure: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		makeReviewRequest: state => {
			state.loading = true;
		},
		makeReviewSuccess: (state, { payload }) => {
			state.loading = false;
			state.message = payload;
		},
		makeReviewFailure: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},

		clearError: state => {
			state.loading = false;
			state.error = null;
			state.errorCode = null;
		},
		clearSuccess: state => {
			state.message = null;
		},
	},
});

export const {
	loginRequest,
	loginSuccess,
	loginFailure,
	googleLoginRequest,
	googleLoginSuccess,
	googleLoginFailure,
	facebookLoginRequest,
	facebookLoginSuccess,
	facebookLoginFailure,
	registerRequest,
	registerSuccess,
	registerFailure,
	otpVerifyRequest,
	otpVerifySuccess,
	otpVerifyFailure,
	loadUserRequest,
	loadUserSuccess,
	loadUserFailure,
	updateBillingInfoRequest,
	updateBillingInfoSuccess,
	updateBillingInfoFailure,
	emailVerifyRequest,
	emailVerifySuccess,
	emailVerifyFailure,
	logOutSuccess,
	logOutFailure,
	deleteSuccess,
	deleteFailure,
	resetPasswordRequest,
	resetPasswordSuccess,
	resetPasswordFailure,
	makeReviewRequest,
	makeReviewSuccess,
	makeReviewFailure,
	clearError,
	clearSuccess,
} = userReducer.actions;

export default userReducer.reducer;
