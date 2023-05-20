import React, { useState, useRef } from 'react';
import Dialog from '@mui/material/Dialog';
import { RxCross2 } from 'react-icons/rx';
import { MdOutlineReportProblem } from 'react-icons/md';
import RescheduleDialog from './RescheduleDialog';
import { openAlert } from '../../../../store/reducer/alertReducer';
import { clearSuccess } from '../../../../store/reducer/userReducer';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import moment from 'moment';

const CancelClassDialog = props => {
	const dispatch = useDispatch();
	const { onClose, open, booking } = props;
	const [checked, setChecked] = useState(false);
	const [fieldRequired, setFieldRequired] = useState(false);
	const [checkRequired, setCheckRequired] = useState(false);
	const [rescheduleOpen, setRescheduleOpen] = useState(false);

	const textRef = useRef();

	const handleClose = () => {
		onClose(!open);
	};

	const handleRescheduleOpen = () => {
		setRescheduleOpen(true);
		onClose(!open);
	};

	const handleRescheduleClose = value => {
		setRescheduleOpen(false);
	};

	const handleSubmit = () => {
		if (!textRef.current.value) {
			return setFieldRequired(true);
		}
		if (!checked) {
			return setCheckRequired(true);
		}

		setFieldRequired(false);
		setCheckRequired(false);

		axios
			.put(
				`${process.env.REACT_APP_BACKEND_API}/api/v1/booking/cancel-booking`,
				{
					bookingId: booking._id,
					cancelReason: textRef.current.value,
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
	};

	const style = { color: '#FF1A1A' };
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

	// const formattedMonth = booking.date.split('/')[0][1];
	// const formattedDay = booking.date.split('/')[1];
	// const formattedYear = booking.date.split('/')[2];
	// const month = monthNames[formattedMonth - 1];
	// const formattedDate = `${month} ${formattedDay} ${formattedYear} ${booking.startTime}:${booking.endTime}`;
	// // console.log(moment().subtract(2, 'hours'));
	// const lessThanTwoHourAgo = moment(formattedDate).isAfter(
	// 	moment().subtract(2, 'hours')
	// );

	return (
		<Dialog onClose={handleClose} open={open}>
			<div className="w-[28rem]">
				<div className="flex justify-between items-center md:mx-10 mx-4 my-4 text-black md:text-[16px]">
					<h3>Do you want to cancel the class?</h3>
					<RxCross2 className="cursor-pointer" onClick={handleClose} />
				</div>
				<div className="border-2 border-b"></div>
				<div className="my-6">
					{/* {!lessThanTwoHourAgo && (
						<div className=" md:mx-10 mx-4 flex gap-2 items-center bg-[#FF1A1A33] p-2">
							<MdOutlineReportProblem style={style} size={20} />
							<h3 className="md:text-[15px]">
								Class cancellation is not allowed less then 2 hours notice
							</h3>
						</div>
					)} */}

					<div className=" md:mx-10 mx-4 mt-4 space-y-2">
						<p className="md:text-[15px]">
							Are you sure you want to cancel the class? <br /> Cancellation is
							permanent and cannot be reversed. <br /> You may wish to
							reschedule the class instead.
						</p>
						<h2 className="font-semibold md:text-[15px]">
							Comment for student{' '}
							<span className="text-[#FF1A1A] font-bold text-lg">*</span>{' '}
						</h2>
						<textarea
							ref={textRef}
							name="postContent"
							rows={4}
							className="border-2 pl-2 w-full"
							placeholder="I need to cancel because..."
						/>
						{fieldRequired && (
							<p className="text-sm text-red-600 mt-2 text-start italic">
								<span className="text-[#FF1A1A] font-bold text-lg">*</span>{' '}
								Comment for student is required
							</p>
						)}
						<span className="flex gap-2 items-start">
							<input
								checked={checked}
								onChange={e => setChecked(e.target.checked)}
								type="checkbox"
								className="mt-2 cursor-pointer scale-[1.5] accent-[#FF5A00] "
							/>
							<p className="md:text-[14px]">
								I know my position will decrease and fewer students will see me
								if I cancel this class
							</p>
						</span>
						{checkRequired && (
							<p className="text-sm text-red-600 mt-2 text-start italic">
								<span className="text-[#FF1A1A] font-bold text-lg">*</span>{' '}
								Please Please accept terms and conditions of cancellation of a
								class
							</p>
						)}
						<button
							className="bg-[#FF5A00] py-3 text-white text-lg font-semibold w-full"
							onClick={handleRescheduleOpen}
						>
							Reschedule Class
						</button>
						<button
							className="py-2 border-2 border-[#808080] text-lg font-semibold text-[#808080] w-full"
							onClick={handleSubmit}
						>
							Cancel Class
						</button>
					</div>

					<RescheduleDialog
						open={rescheduleOpen}
						onClose={handleRescheduleClose}
						booking={booking}
					/>
				</div>
			</div>
		</Dialog>
	);
};

export default CancelClassDialog;
