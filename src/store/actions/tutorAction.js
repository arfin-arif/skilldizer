import axios from 'axios';
import {
	tutorRegisterFailure,
	tutorRegisterRequest,
	tutorRegisterSuccess,
	getTutorRequest,
	getTutorSuccess,
	getTutorFailure,
	tutorUpdateRequest,
	tutorUpdateSuccess,
	tutorUpdateFailure,
	profileUpdateRequest,
	profileUpdateSuccess,
	profileUpdateFailure,
} from '../reducer/tutorReducer';

export const tutorRegisterAction =
	(
		{ _id },
		profileInformation,
		profileImage,
		eductionExperience,
		introduceVideo,
		{ price },
		tz,
		checkbox,
		languagesInput
	) =>
	async dispatch => {
		const {
			certification,
			degrees,
			aboutMe,
			describeTeaching,
			headline,
			teachingExperience,
		} = eductionExperience;
		try {
			dispatch(tutorRegisterRequest());

			const { data } = await axios.post(
				`${process.env.REACT_APP_BACKEND_API}/api/v1/tutor/register`,
				{
					_id,
					profileInformation,
					profileImage,
					certification,
					degrees,
					aboutMe,
					describeTeaching,
					headline,
					teachingExperience,
					introduceVideo,
					price,
					tz,
					checkbox,
					languagesInput,
				},
				{
					withCredentials: true,
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);
			dispatch(tutorRegisterSuccess(data?.message));
		} catch (error) {
			dispatch(tutorRegisterFailure(error?.response?.data?.message));
		}
	};

export const updateTutorAbout = updatedData => async dispatch => {
	try {
		dispatch(tutorUpdateRequest());

		const { data } = await axios.put(
			`${process.env.REACT_APP_BACKEND_API}/api/v1/tutor/update-about`,
			{ updatedData },
			{
				withCredentials: true,
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		dispatch(tutorUpdateSuccess(data.message));
	} catch (error) {
		dispatch(tutorUpdateFailure(error.response.data.message));
	}
};

export const updateTutorPhoto = updatedData => async dispatch => {
	try {
		dispatch(tutorUpdateRequest());

		const { data } = await axios.put(
			`${process.env.REACT_APP_BACKEND_API}/api/v1/tutor/update-photo`,
			{ updatedData },
			{
				withCredentials: true,
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		dispatch(tutorUpdateSuccess(data.message));
	} catch (error) {
		dispatch(tutorUpdateFailure(error.response.data.message));
	}
};

export const updateTutorVideo = updatedData => async dispatch => {
	try {
		dispatch(tutorUpdateRequest());

		const { data } = await axios.put(
			`${process.env.REACT_APP_BACKEND_API}/api/v1/tutor/update-video`,
			{ updatedData },
			{
				withCredentials: true,
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		dispatch(tutorUpdateSuccess(data.message));
	} catch (error) {
		dispatch(tutorUpdateFailure(error.response.data.message));
	}
};
export const updateTutorPrice = updatedData => async dispatch => {
	try {
		dispatch(tutorUpdateRequest());

		const { data } = await axios.put(
			`${process.env.REACT_APP_BACKEND_API}/api/v1/tutor/update-price`,
			{ updatedData },
			{
				withCredentials: true,
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		dispatch(tutorUpdateSuccess(data.message));
	} catch (error) {
		dispatch(tutorUpdateFailure(error.response.data.message));
	}
};
export const updateTutorProfileActive = updatedData => async dispatch => {
	try {
		dispatch(profileUpdateRequest());

		const { data } = await axios.put(
			`${process.env.REACT_APP_BACKEND_API}/api/v1/tutor/update-profile-active`,
			{ profileActive: updatedData },
			{
				withCredentials: true,
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		dispatch(profileUpdateSuccess(data.message));
	} catch (error) {
		dispatch(profileUpdateFailure(error.response.data.message));
	}
};

// GET TUTOR DETAILS
export const getTutor = () => async dispatch => {
	try {
		dispatch(getTutorRequest());

		const { data } = await axios.get(
			`${process.env.REACT_APP_BACKEND_API}/api/v1/tutor/me`,
			{
				withCredentials: true,
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		dispatch(getTutorSuccess(data.tutor));
	} catch (error) {
		dispatch(getTutorFailure(error.response.data.message));
	}
};
