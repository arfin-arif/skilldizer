import React, { useEffect } from 'react';
import { CiMail } from 'react-icons/ci';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import Link from 'next/link';
import router from 'next/router';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { forgotPassword, loginAction } from '../../store/actions/userAction';
import {
	clearError,
	clearSuccess,
} from '../../store/reducer/forgotPasswordReducer';
import { openAlert } from '../../store/reducer/alertReducer';
import AlertComponent from '../Utils/AlertComponent';

// * Images
import Image from 'next/image';
import forgotImage from '../../../public/images/forgotPassword.png';

const ForgotPassword = () => {
	const dispatch = useDispatch();
	const { loading, error, message } = useSelector(
		state => state.forgotPassword
	);
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const onSubmit = data => {
		dispatch(forgotPassword(data));
	};

	useEffect(() => {
		if (error) {
			dispatch(openAlert({ severity: 'error', message: error }));
			dispatch(clearError());
			return;
		}

		if (message) {
			dispatch(openAlert({ severity: 'success', message: message }));
			dispatch(clearSuccess());
			return;
		}
	}, [error, message, dispatch]);

	return (
		<section
			style={{ minHeight: 'calc(100vh - 80px' }}
			className="flex items-center justify-center w-full bg-[#FDECE4]"
		>
			<div className="overflow-hidden grid grid-cols-2 place-items-start relative shadow-md items-center gap-x-14 p-10 rounded-2xl bg-[#FFFFFF]">
				<motion.div
					initial={{ opacity: 0, y: -200 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.5 }}
					exit={{ opacity: 0, y: -200, transition: { duration: 1.2 } }}
					className="order-1"
				>
					<Image
						className="flex-1 max-w-[350px]"
						src={forgotImage}
						alt="image"
					/>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, x: -200 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1.5 }}
					exit={{ opacity: 0, x: -200, transition: { duration: 1.5 } }}
					className=""
				>
					<div>
						<h2 className="text-[2rem] text-[#313140] font-semibold">
							Forgot your <span className="text-[#FF5A00]">password?</span>
						</h2>
						<p className="mt-2 text-xs text-gray-400">
							Submit your email and we will send a link to reset your password
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

						<button
							disabled={loading}
							className="w-full mt-5 cursor-pointer border rounded-lg text-white bg-[#FF5A00] shadow-sm px-4 transition-all duration-150 font-semibold py-[10px] hover:bg-[#e24f00]"
						>
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
								'Submit'
							)}
						</button>
					</form>

					<p className="text-sm mt-6 text-center text-slate-500">
						Continue to{' '}
						<span className="text-[#FF5A00] font-semibold cursor-pointer">
							<Link href="/login">Sign In.</Link>
						</span>
					</p>
				</motion.div>
			</div>
			<AlertComponent />
		</section>
	);
};

export default ForgotPassword;
