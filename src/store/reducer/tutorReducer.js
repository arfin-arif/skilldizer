import { createSlice } from '@reduxjs/toolkit';

export const initialState = {};

const tutorReducer = createSlice({
	name: 'tutor',
	initialState,
	reducers: {
		tutorRegisterRequest: state => {
			state.loading = true;
		},
		tutorRegisterSuccess: (state, { payload }) => {
			state.loading = false;
			state.message = payload;
		},
		tutorRegisterFailure: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},

		getTutorRequest: state => {
			state.loading = true;
		},
		getTutorSuccess: (state, { payload }) => {
			state.loading = false;
			state.tutor = payload;
		},
		getTutorFailure: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		tutorAvatar: (state, { payload }) => {
			state.loading = false;
			state.avatar = payload;
		},

		tutorUpdateRequest: state => {
			state.loading = false;
		},
		tutorUpdateSuccess: (state, { payload }) => {
			state.loading = false;
			state.message = payload;
		},
		tutorUpdateFailure: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},

		profileUpdateRequest: state => {
			state.loading = false;
		},
		profileUpdateSuccess: (state, { payload }) => {
			state.loading = false;
			state.message = payload;
		},
		profileUpdateFailure: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},

		clearError: state => {
			state.error = null;
		},
		clearSuccess: state => {
			state.message = null;
		},
	},
});

export const {
	tutorRegisterRequest,
	tutorRegisterSuccess,
	tutorRegisterFailure,
	getTutorRequest,
	getTutorSuccess,
	getTutorFailure,
	tutorAvatar,
	tutorUpdateRequest,
	tutorUpdateSuccess,
	tutorUpdateFailure,
	profileUpdateRequest,
	profileUpdateSuccess,
	profileUpdateFailure,
	clearError,
	clearSuccess,
} = tutorReducer.actions;

export default tutorReducer.reducer;
