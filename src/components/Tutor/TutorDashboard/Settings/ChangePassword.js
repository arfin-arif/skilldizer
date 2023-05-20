import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { changePassword } from '../../../../store/actions/userAction';
import Router from 'next/router';
import { ErrorMessage } from '@hookform/error-message';
import { openAlert } from '../../../../store/reducer/alertReducer';
import {
	clearError,
	clearSuccess,
} from '../../../../store/reducer/changePassReducer';
import axios from 'axios';
import { MdOutlineReportProblem } from 'react-icons/md';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const ChangePassword = () => {
	const { loading, error, data } = useSelector(state => state.changePassword);
	const dispatch = useDispatch();
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const onSubmit = data => {
		console.log('submitting...');
		dispatch(changePassword(data));
	};

	const handleDelete = () => {
		console.log('deleting...');
		axios
			.delete(
				`${process.env.REACT_APP_BACKEND_API}/api/v1/auth/account/delete-my-account`,

				{
					withCredentials: true,
					headers: {
						'Content-Type': 'application/json',
					},
				}
			)
			.then(res => {
				dispatch(openAlert({ severity: 'success', message: res.data.message }));
				dispatch(clearSuccess());
			})
			.catch(err => {
				console.log(err);
				dispatch(
					openAlert({
						severity: 'error',
						message: err?.response?.data?.message,
					})
				);
				dispatch(clearSuccess());
			});
		setOpen(false);
	};

	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		console.log('closing');
		setOpen(false);
	};

	useEffect(() => {
		if (error) {
			dispatch(openAlert({ severity: 'error', message: error }));
			dispatch(clearError());
			return;
		}
		if (data) {
			dispatch(
				openAlert({
					severity: 'success',
					message: 'Password changed successfully',
				})
			);
			dispatch(clearSuccess());
			reset();
		}
	}, [error, dispatch, data]);

	const style = { color: '#FF1A1A' };
	return (
		<section className="w-[55rem] bg-[#fff] ml-6 my-6 ">
			<div className='py-4 px-10 border-b'>
				<h1 className="main-heading">Change Password</h1>
			</div>
			<form onSubmit={handleSubmit(onSubmit)} className="px-10">
				<div className="flex flex-col mt-4 gap-2 ">
					<label htmlFor="currentPassword">Current Password</label>

					<input
						{...register('oldPassword', {
							required: 'Current password is required',
						})}
						// type="password"
						id="password"
						className="border rounded border-[#7A7A7A] bg-[#F3F3F3] w-[30rem] h-10"
					/>
					<ErrorMessage
						errors={errors}
						name="oldPassword"
						render={({ message }) => (
							<p className="text-sm text-red-600 italic">{message}</p>
						)}
					/>
					<p
						className="text-[#FF5A00] text-xs ml-[22rem] cursor-pointer hover:underline"
						onClick={() => Router.push('/forgot-password')}
					>
						Forgot your password?
					</p>
					{/* {user.randomHash && (
						<p className="text-xs flex items-center gap-2 italic">
							<span className="text-[#FF5A00] text-lg">*</span> if you signed up
							with gmail or facebook, your email + {user.randomHash} is your
							current password
						</p>
					)} */}
				</div>
				<div className="flex flex-col mb-4 gap-2 ">
					<label htmlFor="currentPassword2">New Password</label>
					<input
						{...register('newPassword', {
							required: 'New password is required',
						})}
						// type="password"
						id="password"
						className="border rounded border-[#7A7A7A] bg-[#F3F3F3] w-[30rem] h-10"
					/>
					<ErrorMessage
						errors={errors}
						name="newPassword"
						render={({ message }) => (
							<p className="text-sm text-red-600 italic">{message}</p>
						)}
					/>
				</div>
				<div className="flex flex-col my-4 gap-2">
					<label htmlFor="currentPassword">Verify Password</label>
					<input
						{...register('confirmPassword', {
							required: 'Verify password is required',
						})}
						// type="password"
						id="password"
						className="border rounded border-[#7A7A7A] bg-[#F3F3F3] w-[30rem] h-10"
					/>
					<ErrorMessage
						errors={errors}
						name="confirmPassword"
						render={({ message }) => (
							<p className="text-sm text-red-600 italic">{message}</p>
						)}
					/>
				</div>
				<div className="space-x-4 pb-8">
					<button
						className="bg-[#009E23] border rounded-lg text-white px-6 py-3 font-semibold text-lg"
						disabled={loading}
						type="submit"
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
							'Save Settings'
						)}
					</button>
					<button
						className="bg-[#FF1A1A] border rounded-lg text-white px-6 py-3 font-semibold text-lg"
						type="button"
						onClick={handleClickOpen}
					>
						Delete Account
					</button>
				</div>
			</form>
			<div>
				<Dialog
					open={open}
					onClose={handleClose}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogTitle
						id="alert-dialog-title"
						className="text-[#FF1A1A] flex items-center gap-4"
					>
						<MdOutlineReportProblem style={style} size={20} />
						{'Are you sure you want to delete your account?'}
					</DialogTitle>
					<DialogContent>
						<DialogContentText id="alert-dialog-description">
							By deleting this account you will permanently lose access to all
							Skilldizer services including your students and any pending
							payments. You will never recover your account again
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose}>Cancel</Button>
						<Button
							onClick={handleDelete}
							autoFocus
							className="!text-[#FF1A1A]"
						>
							Delete
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		</section>
	);
};

export default ChangePassword;
