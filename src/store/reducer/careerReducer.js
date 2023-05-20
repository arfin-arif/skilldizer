import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
	loading: false,
	job: [],
	message: '',
	error: null,
};

const adminUsersReducer = createSlice({
	name: 'career',
	initialState,
	reducers: {
		jobUploadRequest: state => {
			state.loading = true;
		},
		jobUploadSuccess: (state, { payload }) => {
			state.loading = false;
			state.message = payload;
		},
		jobUploadFailure: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		getJobsRequest: state => {
			state.loading = true;
		},
		getJobsSuccess: (state, { payload }) => {
			state.loading = false;
			state.job = payload;
		},
		getJobsFailure: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		updateJobRequest: state => {
			state.loading = true;
		},
		updateJobSuccess: (state, { payload }) => {
			state.loading = false;
			state.message = payload;
		},
		updateJobFailure: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		removeJobRequest: state => {
			state.loading = true;
		},
		removeJobSuccess: (state, { payload }) => {
			state.loading = false;
			state.message = payload;
		},
		removeJobFailure: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		applyForJobRequest: state => {
			state.loading = true;
		},
		applyForJobSuccess: (state, { payload }) => {
			state.loading = false;
			state.message = payload;
		},
		applyForJobFailure: (state, { payload }) => {
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
	jobUploadRequest,
	jobUploadSuccess,
	jobUploadFailure,
	getJobsRequest,
	getJobsSuccess,
	getJobsFailure,
	updateJobRequest,
	updateJobSuccess,
	updateJobFailure,
	removeJobRequest,
	removeJobSuccess,
	removeJobFailure,
	applyForJobRequest,
	applyForJobSuccess,
	applyForJobFailure,
	clearError,
	clearSuccess,
} = adminUsersReducer.actions;

export default adminUsersReducer.reducer;
