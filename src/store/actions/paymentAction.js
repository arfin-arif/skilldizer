import axios from 'axios';

import {
	paypalPaymentRequest,
	paypalPaymentSuccess,
	paypalPaymentFailure,
	paypalPayoutRequest,
	paypalPayoutSuccess,
	paypalPayoutFailure,
} from '../reducer/paymentReducer';

export const paypalPaymentAction = paymentData => async dispatch => {
	try {
		dispatch(paypalPaymentRequest());
		const { data } = await axios.post(
			`${process.env.REACT_APP_BACKEND_API}/api/v1/payment/paypal-payment`,
			{
				paymentData,
			},
			{
				withCredentials: true,
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		dispatch(paypalPaymentSuccess(data?.paymentId));
	} catch (error) {
		dispatch(paypalPaymentFailure(error?.response?.data?.message));
	}
};

export const cancelPaymentAction = (sessionId, paymentId) => async dispatch => {
	try {
		dispatch(paypalPaymentRequest());
		const { data } = await axios.put(
			`${process.env.REACT_APP_BACKEND_API}/api/v1/payment/cancel-payment`,
			{
				sessionId,
				paymentId,
			},
			{
				withCredentials: true,
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		dispatch(paypalPaymentSuccess(data?.message));
	} catch (error) {
		dispatch(paypalPaymentFailure(error?.response?.data?.message));
	}
};
export const verifyPaymentAction = (sessionId, paymentId) => async dispatch => {
	try {
		dispatch(paypalPaymentRequest());
		const { data } = await axios.put(
			`${process.env.REACT_APP_BACKEND_API}/api/v1/payment/verify-payment`,
			{
				sessionId,
				paymentId,
			},
			{
				withCredentials: true,
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		dispatch(paypalPaymentSuccess(data?.message));
	} catch (error) {
		dispatch(paypalPaymentFailure(error?.response?.data?.message));
	}
};

export const paypalPayout = (amount, totalAmount, email) => async dispatch => {
	try {
		dispatch(paypalPayoutRequest());
		const { data } = await axios.post(
			`${process.env.REACT_APP_BACKEND_API}/api/v1/payout/send-paypal-payment`,
			{
				amount,
				totalAmount,
				email,
			},
			{
				withCredentials: true,
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		dispatch(paypalPayoutSuccess(data?.message));
	} catch (error) {
		dispatch(paypalPayoutFailure(error?.response?.data?.message));
	}
};
