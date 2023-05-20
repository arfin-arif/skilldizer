import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import SignUpCard from './AuthCards/SignupCard';

function AuthDialog(props) {
	const { onClose, open } = props;

	const handleClose = () => {
		onClose(!open);
	};

	return (
		<Dialog onClose={handleClose} open={open}>
			<SignUpCard />
		</Dialog>
	);
}

export default AuthDialog;
