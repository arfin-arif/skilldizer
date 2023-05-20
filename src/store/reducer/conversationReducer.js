import { createSlice } from '@reduxjs/toolkit';

export const initialState = {};

const conversationReducer = createSlice({
	name: 'conversation',
	initialState,
	reducers: {
		conversationRequest: state => {
			state.loading = true;
		},
		conversationSuccess: (state, { payload }) => {
			state.loading = false;
			state.conversation = payload;
		},
		conversationFailure: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		chatRequest: state => {
			state.loading = true;
		},
		chatSuccess: (state, { payload }) => {
			state.loading = false;
			state.chat = payload;
		},
		chatFailure: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		clearError: state => {
			state.loading = false;
			state.error = null;
		},
	},
});

export const {
	conversationRequest,
	conversationSuccess,
	conversationFailure,
	chatRequest,
	chatSuccess,
	chatFailure,
	clearError,
} = conversationReducer.actions;

export default conversationReducer.reducer;
