import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { useDispatch } from 'react-redux';
import { facebookLogin } from '../../../store/actions/userAction';
import { FaFacebookF } from 'react-icons/fa';

const FacebookOAuth = () => {
	const dispatch = useDispatch();
	const responseFacebook = response => {
		console.log('response', response);
		dispatch(facebookLogin(response?.accessToken, response?.userID));
	};
	return (
		<>
			<FacebookLogin
				appId="888442272424061"
				autoLoad={false}
				callback={responseFacebook}
				render={renderProps => (
					<span
						onClick={renderProps.onClick}
						className=" p-2 bg-gray-50 text-[#3b5998] rounded-full cursor-pointer transition-all duration-200"
					>
						<FaFacebookF />
					</span>
				)}
			/>
		</>
	);
};

export default FacebookOAuth;
