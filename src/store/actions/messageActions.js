import {
	addMessage,
	removeMessage,
	setArrivalMessage,
} from '../reducer/messageReducer';

export const addMessageAction = payload => async dispatch => {
	dispatch(addMessage(payload));
};
export const removeMessageAction = payload => async dispatch => {
	dispatch(removeMessage(payload));
};
export const arrivalMessageAction = payload => async dispatch => {
	dispatch(setArrivalMessage(payload));
};
