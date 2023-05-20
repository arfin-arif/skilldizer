import React, { useState, useRef } from 'react';
import Dialog from '@mui/material/Dialog';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import moment from 'moment';
import Image from 'next/image';
import { MdOutlineReportProblem } from 'react-icons/md';
import tutorImage from '../../../../../public/images/profile_image.png';
import { openAlert } from '../../../../store/reducer/alertReducer';
import { clearSuccess } from '../../../../store/reducer/userReducer';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import CancelClassDialog from './CancelClassDialog';
import { RxCross2 } from 'react-icons/rx';

function RescheduleDialog(props) {
	const dispatch = useDispatch();
	const { onClose, open, booking } = props;
	const [cancelOpen, setCancelOpen] = useState(false);
	const handleCancelOpen = () => {
		setCancelOpen(true);
	};

	const handleCancelClose = value => {
		setCancelOpen(false);
	};
	const textRef = useRef();

	const handleClose = () => {
		onClose(!open);
	};
	const currMonthName = moment().format('MM/DD/YYYY');

	const [showCommentBox, setShowCommentBox] = useState(false);
	const [value, setValue] = useState(currMonthName);
	const [startTime, setStartTime] = useState(value);
	const [endTime, setEndTime] = useState(value);
	const [fieldRequired, setFieldRequired] = useState(false);

	const day = moment(value).format('dddd');

	const handleChange = time => {
		setStartTime(time);
	};
	const handleEndTimeChange = time => {
		setEndTime(time);
	};

	const handleShowCommentBox = () => {
		setShowCommentBox(!showCommentBox);
	};

	// const monthNames = [
	// 	'Jan',
	// 	'Feb',
	// 	'Mar',
	// 	'Apr',
	// 	'May',
	// 	'Jun',
	// 	'Jul',
	// 	'Aug',
	// 	'Sep',
	// 	'Oct',
	// 	'Nov',
	// 	'Dec',
	// ];

	// console.log(booking);

	// const formattedMonth = booking.date.split('/')[0][1];
	// const formattedDay = booking.date.split('/')[1];
	// const formattedYear = booking.date.split('/')[2];
	// const month = monthNames[formattedMonth - 1];
	// const formattedDate = `${month} ${formattedDay} ${formattedYear} ${booking.startTime}:${booking.endTime}`;
	// const lessThanTwoHourAgo = moment(formattedDate).isAfter(
	// 	moment().subtract(2, 'hours')
	// );

	const handleSubmit = () => {
		const formattedStartTime = `${startTime.$H}:${startTime.$m}`;
		const formattedEndTime = `${endTime.$H}:${endTime.$m}`;

		if (!textRef.current.value) {
			setFieldRequired(true);
		} else {
			setFieldRequired(false);
			axios
				.put(
					`${process.env.REACT_APP_BACKEND_API}/api/v1/booking/update-booking`,
					{
						bookingId: booking._id,
						date: value,
						startTime: formattedStartTime,
						endTime: formattedEndTime,
					},
					{
						withCredentials: true,
						headers: {
							'Content-Type': 'application/json',
						},
					}
				)
				.then(res => {
					dispatch(
						openAlert({ severity: 'success', message: res.data.data.message })
					);
					dispatch(clearSuccess());
				})
				.catch(err => {
					dispatch(
						openAlert({
							severity: 'error',
							message: err?.response?.data?.message,
						})
					);
					dispatch(clearSuccess());
				});

			onClose(!open);
		}
	};

	const style = { color: '#FF1A1A' };

	return (
		<Dialog onClose={handleClose} open={open}>
			<div className="my-5 md:w-[30rem] ">
				<div className="flex justify-between items-center  md:mx-10 mx-4 text-black text-lg">
					<h1 className="font-semibold text-2xl ">My Classes</h1>
					<RxCross2 className="cursor-pointer" onClick={handleClose} />
				</div>
				<div className="border-2 border-b mt-4"></div>
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<div className="flex justify-between gap-2 md:mx-10 mx-4 mt-4">
						<DatePicker
							views={['day']}
							value={value}
							onChange={newValue => {
								setValue(newValue.$d);
							}}
							renderInput={params => <TextField {...params} helperText={day} />}
							inputProps={{
								style: {
									height: '10px',
								},
							}}
						/>
						<TimePicker
							value={startTime}
							onChange={handleChange}
							renderInput={params => (
								<TextField {...params} helperText={'1 hour'} />
							)}
							inputProps={{
								style: {
									height: '10px',
									width: '95px',
									'font-size': '15px',
								},
							}}
						/>
						<TimePicker
							value={endTime}
							onChange={handleEndTimeChange}
							renderInput={params => <TextField {...params} />}
							inputProps={{
								style: {
									height: '10px',
									width: '95px',
									'font-size': '15px',
								},
							}}
						/>
					</div>
				</LocalizationProvider>

				<div className="mt-6 mx-10 flex gap-4 items-center">
					<Image
						src={tutorImage}
						alt="tutor profile"
						className="h-10 w-10"
					></Image>
					<p>Reem</p>
				</div>
				{showCommentBox && (
					<div>
						{/* {!lessThanTwoHourAgo && (
							<div className="mt-6 mx-10 flex gap-2 items-center bg-[#FF1A1A33] p-2">
								<MdOutlineReportProblem style={style} size={20} />
								<h3>Rescheduling is not allowed less 2 hours notice</h3>
							</div>
						)} */}
						<div className="mx-10 mt-4 space-y-2">
							<h2>
								Comment for student{' '}
								<span className="text-[#FF1A1A] font-bold text-lg">*</span>{' '}
							</h2>
							<textarea
								ref={textRef}
								name="postContent"
								rows={4}
								cols={50}
								className="border-2 pl-2"
								placeholder="I need to reschedule because..."
							/>
						</div>
						{fieldRequired && (
							<p className="text-sm text-red-600 mt-2 text-start italic mx-10">
								Comment for student is required
							</p>
						)}
					</div>
				)}
				<div className=" mt-6 md:mx-10 mx-4 flex flex-col gap-4">
					{!showCommentBox && (
						<button
							className="border-[#FF5A00] p-4 border-2 text-[#FF5A00] text-sm font-semibold "
							onClick={handleShowCommentBox}
						>
							Reschedule Class
						</button>
					)}
					{!showCommentBox && (
						<button
							className="border-[#FF1A1A] p-4 border-2 text-[#FF1A1A] text-sm font-semibold"
							onClick={handleCancelOpen}
						>
							Cancel Class
						</button>
					)}
					{showCommentBox && (
						<button
							className="p-4 border border-[#000000] text-sm font-semibold"
							onClick={handleSubmit}
						>
							Reschedule Class
						</button>
					)}
				</div>
				<CancelClassDialog
					open={cancelOpen}
					onClose={handleCancelClose}
					booking={booking}
				/>
			</div>
		</Dialog>
	);
}

export default RescheduleDialog;
