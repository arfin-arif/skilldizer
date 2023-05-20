import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { googleLogin } from '../../../store/actions/userAction';

import { GoogleLogin } from '@react-oauth/google';

const GoogleOAuth = () => {
	const dispatch = useDispatch();
	return (
		<>
			<GoogleLogin
				onSuccess={res => {
					console.log(res?.credential);
					dispatch(googleLogin(res?.credential));
				}}
				onError={() => {
					dispatch(
						openAlert({
							severity: 'error',
							message: 'Something went wrong...',
						})
					);
				}}
				size="medium"
				type="icon"
			/>
		</>
	);
};

export default GoogleOAuth;
