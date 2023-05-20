import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import { RxCross2 } from 'react-icons/rx';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import moment from 'moment';
import { openAlert } from '../../../../store/reducer/alertReducer';
import { clearSuccess } from '../../../../store/reducer/userReducer';
import { useDispatch } from 'react-redux';

function TimeOff(props) {
	const dispatch = useDispatch();
	const { onClose, open } = props;
	const [checked, setChecked] = useState(false);

	const currMonthName = moment().format('MM/DD/YYYY');
	const [value, setValue] = useState(currMonthName);
	const [startTime, setStartTime] = useState(value);
	const [endTime, setEndTime] = useState(value);

	const day = moment(value).format('dddd');

	const handleChange = time => {
		setStartTime(time);
	};
	const handleEndTimeChange = time => {
		setEndTime(time);
	};

	const handleClose = () => {
		onClose(!open);
	};

	const handleClick = () => {
		dispatch(
			openAlert({
				severity: 'success',
				message: 'Time off added successfully',
			})
		);
		dispatch(clearSuccess());
		onClose(!open);
	};

	return (
		<Dialog onClose={handleClose} open={open}>
			<div className="my-5 w-[30rem] flex flex-col gap-4 ">
				<div className="flex justify-between items-center mx-10 text-black text-lg">
					<h1 className=" text-2xl ">Schedule time off</h1>
					<RxCross2 className="cursor-pointer" onClick={handleClose} />
				</div>
				<div className="border border-b"></div>
				<h1 className="mx-10">Title (visible only to you) • Optional</h1>
				<input
					type="text"
					className="w-[25rem] border-2 mx-10 h-10 placeholder-padding-6 text-center placeholder-black"
					placeholder="Busy"
				/>

				<div className="mx-10">
					<h1>Starts</h1>
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<div className="flex ite gap-2">
							<DatePicker
								views={['day']}
								value={value}
								onChange={newValue => {
									setValue(newValue.$d);
								}}
								renderInput={params => (
									<TextField {...params} helperText={null} />
								)}
								inputProps={{
									style: {
										height: '10px',
										width: '12rem',
									},
								}}
							/>
							<TimePicker
								value={startTime}
								onChange={handleChange}
								renderInput={params => (
									<TextField {...params} helperText={null} />
								)}
								inputProps={{
									style: {
										height: '10px',
										width: '2.5rem',
										'font-size': '15px',
									},
								}}
							/>
						</div>
					</LocalizationProvider>
				</div>

				<div className="mx-10">
					<h1>Ends</h1>
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<div className="flex ite gap-2">
							<DatePicker
								views={['day']}
								value={value}
								onChange={newValue => {
									setValue(newValue.$d);
								}}
								renderInput={params => (
									<TextField {...params} helperText={null} />
								)}
								inputProps={{
									style: {
										height: '10px',
										width: '12rem',
									},
								}}
							/>
							<TimePicker
								value={startTime}
								onChange={handleChange}
								renderInput={params => (
									<TextField {...params} helperText={null} />
								)}
								inputProps={{
									style: {
										height: '10px',
										width: '2.5rem',
										'font-size': '15px',
									},
								}}
							/>
						</div>
					</LocalizationProvider>
				</div>

				<div className="flex gap-4 items-start mx-10">
					<input
						checked={checked}
						onChange={e => setChecked(e.target.checked)}
						type="checkbox"
						className="mt-2 cursor-pointer scale-[1.5]  accent-[#FF5A00]"
					/>
					<h3 className="text-lg font-[400] text-[#000000] ">All day</h3>
				</div>
				<button
					className="bg-[#FF5A00] text-white font-semibold py-3 px-4 border rounded-lg text-lg mx-10"
					onClick={handleClick}
				>
					Schedule time off
				</button>
			</div>
		</Dialog>
	);
}

export default TimeOff;
