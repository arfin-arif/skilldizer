import axios from 'axios';

import {
	conversationRequest,
	conversationSuccess,
	conversationFailure,
	chatRequest,
	chatSuccess,
	chatFailure,
	clearError,
} from '../reducer/conversationReducer';

export const conversationAction = () => async dispatch => {
	try {
		dispatch(conversationRequest());
		const { data } = await axios.get(
			`${process.env.REACT_APP_BACKEND_API}/api/v1/conversation/user-conversation`,
			{
				withCredentials: true,
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		dispatch(conversationSuccess(data?.conversations));
	} catch (error) {
		dispatch(conversationFailure(error?.response?.data?.message));
	}
};

export const chatAction = conversationId => async dispatch => {
	try {
		dispatch(chatRequest());
		const { data } = await axios.get(
			`${process.env.REACT_APP_BACKEND_API}/api/v1/chat/conversation-chat/${conversationId}`,
			{
				withCredentials: true,
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		dispatch(chatSuccess(data?.chat));
	} catch (error) {
		dispatch(chatFailure(error?.response?.data?.message));
	}
};
