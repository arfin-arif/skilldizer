import React, { forwardRef, useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { closeAlert } from '../../store/reducer/alertReducer';

const Alert = forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AlertComponent = () => {
	const { open, severity, message } = useSelector(state => state.alert);
	const dispatch = useDispatch();

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		dispatch(closeAlert());
	};
	return (
		<Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
			<Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
				{message}
			</Alert>
		</Snackbar>
	);
};

export default AlertComponent;
