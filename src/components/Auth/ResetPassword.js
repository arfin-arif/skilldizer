import React, { useEffect } from 'react';
import { AiOutlineLock } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { motion, useAnimation } from 'framer-motion';
import router from 'next/router';
import { resetPassword } from '../../store/actions/userAction';
import { useDispatch, useSelector } from 'react-redux';
import { clearError, clearSuccess } from '../../store/reducer/userReducer';
import { openAlert } from '../../store/reducer/alertReducer';
import AlertComponent from '../Utils/AlertComponent';
import Image from 'next/image';
import resetGif from '../../../public/images/reset.gif';

const ResetPassword = ({ resetToken }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const animation = useAnimation();

	const dispatch = useDispatch();

	const signIn = () => {
		animation.start({
			opacity: 0,
			y: 200,
			transition: { duration: 1.5 },
		});
		router.push('/login');
	};

	const { loading, error, user } = useSelector(state => state.user);

	const onSubmit = data => {
		dispatch(resetPassword(data, resetToken));
	};

	useEffect(() => {
		if (error) {
			dispatch(openAlert({ severity: 'error', message: error }));
			dispatch(clearError());
			return;
		}

		if (user) {
			router.push('/profile/dashboard');
		}
	}, [error, user, dispatch]);

	return (
		<section
			style={{ minHeight: 'calc(100vh - 80px' }}
			className="grid bg-[#FDECE4] w-full place-items-center"
		>
			<div className="grid max-w-4xl shadow-md grid-cols-2 place-items-center gap-x-14 p-10 rounded-2xl bg-[#FFFFFF] overflow-hidden">
				<motion.div
					initial={{ opacity: 0, y: 200 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.5 }}
					exit={{ opacity: 0, y: 200, transition: { duration: 1.2 } }}
					className="order-1"
				>
					<Image src={resetGif} alt="reset" />
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
							Reset your <span className="text-[#FF5A00]">password!</span>
						</h2>
						<p className="mt-2 text-xs text-gray-400">
							Reset your password and enjoy our application
						</p>
					</div>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="mt-8 min-w-[320px]"
					>
						<label htmlFor="password" className="label">
							New password
						</label>
						<div className="relative">
							<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
								<AiOutlineLock />
							</div>
							<input
								{...register('newPassword', {
									required: 'New password is required',
								})}
								type="password"
								id="password"
								className="select_input pl-10"
								placeholder="*********"
							/>
						</div>
						<ErrorMessage
							errors={errors}
							name="newPassword"
							render={({ message }) => (
								<p className="text-sm text-red-600 italic">{message}</p>
							)}
						/>
						<label for="password" className="label mt-3">
							Repeat Password
						</label>
						<div className="relative">
							<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
								<AiOutlineLock />
							</div>
							<input
								{...register('confirmPassword', {
									required: 'Repeat password is required',
								})}
								type="password"
								id="password"
								className="select_input pl-10"
								placeholder="*********"
							/>
						</div>
						<ErrorMessage
							errors={errors}
							name="confirmPassword"
							render={({ message }) => (
								<p className="text-sm text-red-600 italic">{message}</p>
							)}
						/>
						<button disabled={loading} className="w-full mt-4 button">
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
								'Reset Password'
							)}
						</button>
					</form>

				</motion.div>
			</div>
			<AlertComponent />
		</section>
	);
};

export default ResetPassword;
