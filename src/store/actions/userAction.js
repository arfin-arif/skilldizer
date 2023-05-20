import Router from 'next/router';
import {
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
	resetPasswordSuccess,
	resetPasswordFailure,
	resetPasswordRequest,
	loadUserRequest,
	loadUserSuccess,
	loadUserFailure,
	logOutSuccess,
	logOutFailure,
	deleteSuccess,
	deleteFailure,
	emailVerifyRequest,
	emailVerifySuccess,
	emailVerifyFailure,
	makeReviewRequest,
	makeReviewSuccess,
	makeReviewFailure,
} from '../reducer/userReducer';
import axios from 'axios';
import {
	changePasswordFailure,
	changePasswordRequest,
	changePasswordSuccess,
} from '../reducer/changePassReducer';
import {
	forgotPasswordFailure,
	forgotPasswordRequest,
	forgotPasswordSuccess,
} from '../reducer/forgotPasswordReducer';
import {
	updateFailure,
	updateRequest,
	updateSuccess,
	againEmailVerifyRequest,
	againEmailVerifySuccess,
	againEmailVerifyFailure,
} from '../reducer/updateReducer';
import { successNotification } from '../../components/notification';

export const loginAction =
	({ email, password }) =>
		async dispatch => {
			try {
				dispatch(loginRequest());

				const { data } = await axios.post(
					`${process.env.REACT_APP_BACKEND_API}/api/v1/auth/login`,
					{ email, password },
					{
						withCredentials: true,
						headers: {
							'Content-Type': 'application/json',
						},
					}
				);

				dispatch(loginSuccess(data?.user));
			} catch (error) {
				dispatch(loginFailure(error?.response?.data));
			}
		};

export const registerAction = formData => async dispatch => {
	try {
		dispatch(registerRequest());

		const { data } = await axios.post(
			`${process.env.REACT_APP_BACKEND_API || 'http://localhost:8000'}/api/v1/auth/register`,
			formData,
			{
				withCredentials: true,
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		dispatch(registerSuccess(data?.user));
	} catch (error) {
		dispatch(registerFailure(error?.response?.data?.message));
	}
};

export const registerTutorAction = formData => async dispatch => {
	try {
		dispatch(registerRequest());

		const { data } = await axios.post(
			`${process.env.REACT_APP_BACKEND_API}/api/v1/auth/register-tutor`,
			formData,
			{
				withCredentials: true,
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		dispatch(registerSuccess(data?.user));
		successNotification(data.message)
	} catch (error) {
		dispatch(registerFailure(error?.response?.data?.message));
	}
};

// LOAD USER DETAILS

export const loadUserAction = () => async dispatch => {
	try {
		dispatch(loadUserRequest());

		const { data } = await axios.get(
			`${process.env.REACT_APP_BACKEND_API}/api/v1/auth/account`,
			{
				withCredentials: true,
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		dispatch(loadUserSuccess(data.user));
	} catch (error) {
		dispatch(loadUserFailure(error.response.data.message));
	}
};

// // EMAIL VERIFY

export const emailVerify = token => async dispatch => {
	try {
		dispatch(emailVerifyRequest());

		const { data } = await axios.put(
			`${process.env.REACT_APP_BACKEND_API}/api/v1/auth/account/email-verify/${token}`,
			{},
			{
				withCredentials: true,
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		dispatch(emailVerifySuccess(data.user));
	} catch (error) {
		dispatch(emailVerifyFailure(error.response.data.message));
	}
};

// AGAIN EMAIL VERIFY REQUEST

export const againEmailVerifyAction = () => async dispatch => {
	try {
		dispatch(againEmailVerifyRequest());

		const { data } = await axios.get(
			`${process.env.REACT_APP_BACKEND_API}/api/v1/auth/email-verify-token-send`,
			{
				withCredentials: true,
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		dispatch(againEmailVerifySuccess(data.message));
	} catch (error) {
		dispatch(againEmailVerifyFailure(error.response.data.message));
	}
};

// DELETE  ACCOUNT

export const deleteAccount = () => async dispatch => {
	try {
		const { data } = await axios.delete(
			`${process.env.REACT_APP_BACKEND_API}/api/v1/auth/account/remove`,
			{
				withCredentials: true,
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		dispatch(deleteSuccess(data?.message));
	} catch (error) {
		dispatch(deleteFailure(error?.response?.data?.message));
	}
};
// // Log Out

export const logOut = () => async dispatch => {
	try {
		const { data } = await axios.get(
			`${process.env.REACT_APP_BACKEND_API}/api/v1/auth/logout`,
			{
				withCredentials: true,
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		Router.push('/login');
		dispatch(logOutSuccess(data?.message));
	} catch (error) {
		dispatch(logOutFailure(error?.response?.data?.message));
	}
};

// // FORGOT PASSWORD

export const forgotPassword =
	({ email }) =>
		async dispatch => {
			try {
				dispatch(forgotPasswordRequest());
				const { data } = await axios.post(
					`${process.env.REACT_APP_BACKEND_API}/api/v1/auth/password/forgot`,
					{
						email: email,
					},
					{
						withCredentials: true,
						headers: {
							'Content-Type': 'application/json',
						},
					}
				);

				dispatch(forgotPasswordSuccess(data.message));
			} catch (error) {
				dispatch(forgotPasswordFailure(error.response.data.message));
			}
		};

export const resetPassword =
	({ newPassword, confirmPassword }, token) =>
		async dispatch => {
			try {
				dispatch(resetPasswordRequest());
				const { data } = await axios.put(
					`${process.env.REACT_APP_BACKEND_API}/api/v1/auth/password/reset/${token}`,
					{ newPassword, confirmPassword },
					{
						withCredentials: true,
						headers: {
							'Content-Type': 'application/json',
						},
					}
				);

				dispatch(resetPasswordSuccess(data.user));
			} catch (error) {
				dispatch(resetPasswordFailure(error.response.data.message));
			}
		};

// // Change password

export const changePassword =
	({ oldPassword, newPassword, confirmPassword }) =>
		async dispatch => {
			try {
				dispatch(changePasswordRequest());
				const { data } = await axios.put(
					`${process.env.REACT_APP_BACKEND_API}/api/v1/auth/account/changePassword`,
					{ oldPassword, newPassword, confirmPassword },
					{
						withCredentials: true,
						headers: {
							'Content-Type': 'application/json',
						},
					}
				);
				dispatch(changePasswordSuccess(data.user));
			} catch (error) {
				dispatch(changePasswordFailure(error.response.data.message));
			}
		};

// // UPDATE PROFILE   INFO

export const updateUser =
	({ name, email }, { value }) =>
		async dispatch => {
			try {
				dispatch(updateRequest());

				const { data } = await axios.put(
					`${process.env.REACT_APP_BACKEND_API}/api/v1/auth/account/update`,
					{
						name,
						email,
						timeZone: value,
					},
					{
						withCredentials: true,
						headers: {
							'Content-Type': 'application/json',
						},
					}
				);

				dispatch(updateSuccess(data.message));
			} catch (error) {
				dispatch(updateFailure(error.response.data.message));
			}
		};

// // UPDATE AVATER

export const avater = avater => async dispatch => {
	try {
		dispatch(updateRequest());

		const { data } = await axios.put(
			`${process.env.REACT_APP_BACKEND_API}/api/v1/account/auth/updateAvater`,
			{
				avater,
			},
			{
				withCredentials: true,
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		dispatch(updateSuccess(data.message));
	} catch (error) {
		dispatch(updateFailure(error.response.data.message));
	}
};

// GOOGLE LOGIN

export const googleLogin = tokenId => async dispatch => {
	try {
		dispatch(googleLoginRequest());
		const { data } = await axios.post(
			`${process.env.REACT_APP_BACKEND_API}/api/v1/auth/googleLogin`,
			{
				tokenId: tokenId,
			},
			{
				withCredentials: true,
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		dispatch(googleLoginSuccess(data?.user));
	} catch (error) {
		dispatch(googleLoginFailure(error?.response?.data?.message));
	}
};
// FACEBOOK LOGIN

export const facebookLogin = (accessToken, userId) => async dispatch => {
	try {
		dispatch(facebookLoginRequest());
		const { data } = await axios.post(
			`${process.env.REACT_APP_BACKEND_API}/api/v1/auth/facebookLogin`,
			{
				accessToken,
				userId,
			},
			{
				withCredentials: true,
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		dispatch(facebookLoginSuccess(data?.user));
	} catch (error) {
		dispatch(facebookLoginFailure(error?.response?.data?.message));
	}
};
export const makeReview = (id, rating, comment) => async dispatch => {
	try {
		dispatch(makeReviewRequest());

		const { data } = await axios.post(
			`${process.env.REACT_APP_BACKEND_API}/api/v1/tutor/${id}`,
			{
				rating,
				comment,
			},
			{
				withCredentials: true,
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		dispatch(makeReviewSuccess(data.message));
	} catch (error) {
		dispatch(makeReviewFailure(error.response.data.message));
	}
};
