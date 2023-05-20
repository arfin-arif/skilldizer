import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
	message: [],
	arrivalMessage: null,
};

const messageReducer = createSlice({
	name: 'message',
	initialState,
	reducers: {
		addMessage: (state, { payload }) => {
			const existingConversation = state.message.find(
				message => message.conversationId === payload.conversationId
			);
			if (existingConversation) {
				existingConversation.message++;
			} else {
				state.message.push(payload);
			}
		},
		removeMessage: (state, { payload }) => {
			const existingConversation = state.message.find(
				message => message.conversationId === payload.conversationId
			);
			if (existingConversation) {
				existingConversation.message = 0;
				state.message = state.message.filter(
					message => message.conversationId !== payload.conversationId
				);
			}
		},
		setArrivalMessage: (state, { payload }) => {
			state.arrivalMessage = payload;
		},
	},
});

export const { addMessage, removeMessage, setArrivalMessage } =
	messageReducer.actions;

export default messageReducer.reducer;
