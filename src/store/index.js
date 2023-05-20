import { combineReducers, applyMiddleware } from 'redux';
// import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducer/userReducer';
import alertReducer from './reducer/alertReducer';
import tutorReducer from './reducer/tutorReducer';
import forgotPasswordReducer from './reducer/forgotPasswordReducer';
import changePassReducer from './reducer/changePassReducer';
import updateReducer from './reducer/updateReducer';
import careerReducer from './reducer/careerReducer';
import paymentReducer from './reducer/paymentReducer';
import bookingReducer from './reducer/bookingReducer';
import conversationReducer from './reducer/conversationReducer';
import messageReducer from './reducer/messageReducer';
import settingReducer from './reducer/settingsReducer';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['user', 'setting'],
};

const rootReducer = combineReducers({
	user: userReducer,
	tutor: tutorReducer,
	alert: alertReducer,
	update: updateReducer,
	changePassword: changePassReducer,
	forgotPassword: forgotPasswordReducer,
	job: careerReducer,
	payment: paymentReducer,
	booking: bookingReducer,
	conversation: conversationReducer,
	message: messageReducer,
	setting: settingReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	devTools: process.env.NODE_ENV !== 'production',
	middleware: [thunk],
});

export const persistor = persistStore(store);
