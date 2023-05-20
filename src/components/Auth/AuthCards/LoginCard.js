import React, { useEffect, useState } from 'react';
import router from 'next/router';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { motion, useAnimation } from 'framer-motion';
import GoogleOAuth from '../OAuth/GoogleOAuth';
import FacebookOAuth from '../OAuth/FacebookOAuth';
// * Redux
import { useSelector, useDispatch } from 'react-redux';
import { googleLogin, loginAction } from '../../../store/actions/userAction';
import { clearError } from '../../../store/reducer/userReducer';
import { openAlert } from '../../../store/reducer/alertReducer';
import AlertComponent from '../../Utils/AlertComponent';
import SignUpCard from './SignupCard';

// * Icons
import { AiOutlineLock } from 'react-icons/ai';
import { CiMail } from 'react-icons/ci';

const LoginCard = () => {
	const [signupCard, setSignupCard] = useState(false);
	const animation = useAnimation();

	const signup = () => {
		animation.start({
			opacity: 0,
			y: 200,
			transition: { duration: 1.5 },
		});
		setSignupCard(true);
	};
	const dispatch = useDispatch();
	const { loading, error, user } = useSelector(state => state.user);
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const onSubmit = data => {
		dispatch(loginAction(data));
	};

	useEffect(() => {
		if (error) {
			dispatch(openAlert({ severity: 'error', message: error }));
			dispatch(clearError());
			return;
		}
	}, [error, user, dispatch]);

	return (
		<section className="flex items-center justify-center w-full bg-[#FDECE4]">
			{signupCard ? (
				<SignUpCard />
			) : (
				<div className="gap-x-14 overflow-hidden relative shadow-md items-start max-w-4xl rounded-2xl bg-[#FFFFFF]">
					<motion.div
						initial={{ opacity: 0, x: -200 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1.5 }}
						exit={{ opacity: 0, x: -200, transition: { duration: 1.5 } }}
						className="p-10"
					>
						<div>
							<h2 className="text-[2rem] text-[#313140] font-semibold">
								Good to <span className="text-[#FF5A00]">see you again!</span>
							</h2>
							<p className="mt-2 text-xs text-gray-400">
								Log in with your data that your entered during your
								registration.
							</p>
						</div>
						<form onSubmit={handleSubmit(onSubmit)} className="mt-8">
							<label className="label">Your Email</label>
							<div className="relative">
								<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
									<CiMail />
								</div>
								<input
									{...register('email', {
										required: 'Email is required',
										pattern: {
											value:
												/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
											message: 'Please enter a valid email',
										},
									})}
									type="email"
									id="email-address-icon"
									className="select_input pl-10"
									placeholder="name@skilldizer.com"
								/>
							</div>
							<ErrorMessage
								errors={errors}
								name="email"
								render={({ message }) => (
									<p className="text-sm text-red-600 italic">{message}</p>
								)}
							/>
							<label className="label mt-3">Password</label>
							<div className="relative">
								<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
									<AiOutlineLock />
								</div>
								<input
									{...register('password', {
										required: 'Password is required',
									})}
									type="password"
									id="password"
									className="select_input pl-10"
									placeholder="*********"
								/>
							</div>
							<ErrorMessage
								errors={errors}
								name="password"
								render={({ message }) => (
									<p className="text-sm text-red-600 italic">{message}</p>
								)}
							/>
							<p
								onClick={() => router.push('/forgot-password')}
								className="text-[#FF5A00] text-end  text-sm cursor-pointer hover:underline"
							>
								Forgot password?
							</p>
							<button disabled={loading} className="button mt-4 w-full">
								{loading ? (
									<>
										<svg
											role="status"
											className="inline mr-2 w-4 h-4 text-white animate-spin dark:text-gray-600 fill-white"
											viewBox="0 0 100 101"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
												fill="currentColor"
											/>
											<path
												d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
												fill="currentFill"
											/>
										</svg>
										Processing...
									</>
								) : (
									'Sign In'
								)}
							</button>
						</form>
						<div className="my-8 flex items-center justify-center space-x-4">
							<FacebookOAuth />
							<GoogleOAuth />
						</div>
						<p className="text-sm text-center text-slate-500">
							Don&apos;t have an account?
							<span
								onClick={signup}
								className="text-[#FF5A00] font-semibold cursor-pointer"
							>
								Sign Up.
							</span>
						</p>
					</motion.div>
				</div>
			)}
			<AlertComponent />
		</section>
	);
};

export default LoginCard;
