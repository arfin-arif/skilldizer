import {
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
} from '../reducer/carrerReducer';
import axios from 'axios';

export const postJob = formData => async dispatch => {
	try {
		dispatch(jobUploadRequest());
		const { data } = await axios.put(
			`/api/v1/admin/postJob`,
			{ formData },
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		dispatch(jobUploadSuccess(data.message));
	} catch (error) {
		dispatch(jobUploadFailure(error.response.data.message));
	}
};

export const updateJob = (id, formData) => async dispatch => {
	try {
		dispatch(updateJobRequest());
		const { data } = await axios.put(
			`/api/v1/admin/${id}`,
			{ formData },
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		dispatch(updateJobSuccess(data.message));
	} catch (error) {
		dispatch(updateJobFailure(error.response.data.message));
	}
};

export const removeJob = id => async dispatch => {
	try {
		dispatch(removeJobRequest());
		const { data } = await axios.delete(`/api/v1/admin/${id}`);
		dispatch(removeJobSuccess(data.message));
	} catch (error) {
		dispatch(removeJobFailure(error.response.data.message));
	}
};

export const getJobs = () => async dispatch => {
	try {
		dispatch(getJobsRequest());
		const { data } = await axios.get(`/api/v1/getJobs`);
		dispatch(getJobsSuccess(data.job));
	} catch (error) {
		dispatch(getJobsFailure(error.response.data.message));
	}
};

export const applyForJob = (id, formData) => async dispatch => {
	try {
		dispatch(applyForJobRequest());
		const { data } = await axios.post(`/api/v1/applyJob/${id}`, formData, {
			headers: {
				'content-type': 'multipart/form-data',
			},
		});
		dispatch(applyForJobSuccess(data.message));
	} catch (error) {
		dispatch(applyForJobFailure(error.response.data.message));
	}
};
