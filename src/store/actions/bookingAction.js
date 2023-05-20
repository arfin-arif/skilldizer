import axios from 'axios';

import {
	userBookingsRequest,
	userBookingsSuccess,
	userBookingsFailure,
	userNameRequest,
	userNameSuccess,
	userNameFailure,
	clearError,
} from '../reducer/bookingReducer';

export const userBookingAction = () => async dispatch => {
	try {
		dispatch(userBookingsRequest());
		const { data } = await axios.get(
			`${process.env.REACT_APP_BACKEND_API}/api/v1/booking/user-bookings`,
			{
				withCredentials: true,
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		dispatch(userBookingsSuccess(data?.bookings));
	} catch (error) {
		dispatch(userBookingsFailure(error?.response?.data?.message));
	}
};

export const addName = (bookingId, userName) => async dispatch => {
	try {
		dispatch(userNameRequest());
		const { data } = await axios.post(
			`${process.env.REACT_APP_BACKEND_API}/api/v1/booking/add-username`,
			{ bookingId, userName },
			{
				withCredentials: true,
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		dispatch(userNameSuccess(data.data));
	} catch (error) {
		dispatch(userNameFailure(error.response.data.message));
	}
};
export const updateStatus = (bookingId, status) => async dispatch => {
	try {
		dispatch(userNameRequest());
		const { data } = await axios.put(
			`${process.env.REACT_APP_BACKEND_API}/api/v1/booking/update-status`,
			{ bookingId, status },
			{
				withCredentials: true,
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		dispatch(userNameSuccess(data.data));
		dispatch(userBookingsSuccess(data?.data.bookings));
	} catch (error) {
		dispatch(userNameFailure(error.response.data.message));
	}
};

export const archivedBookingAction = () => async dispatch => {
	try {
		dispatch(userBookingsRequest());
		const { data } = await axios.get(
			`${process.env.REACT_APP_BACKEND_API}/api/v1/booking/archived-bookings`,
			{
				withCredentials: true,
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		dispatch(userBookingsSuccess(data?.bookings));
	} catch (error) {
		dispatch(userBookingsFailure(error?.response?.data?.message));
	}
};
