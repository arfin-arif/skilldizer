import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import { RxCross2 } from 'react-icons/rx';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { IoSyncOutline } from 'react-icons/io5';
import { IoTimeOutline } from 'react-icons/io5';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import moment from 'moment';

function NewClassDialog(props) {
	// * Search Student

	const { onClose, open } = props;
	const currMonthName = moment().format('MM/DD/YYYY');
	const [value, setValue] = useState(currMonthName);
	const [startTime, setStartTime] = useState(value);
	const [endTime, setEndTime] = useState(value);
	const [paymentMethod, setPaymentMethod] = useState('');
	const checkedValuesHandler = event => {
		const { id } = event.target;
		setPaymentMethod(id);
	};

	const handleClose = () => {
		onClose(!open);
	};

	const day = moment(value).format('dddd');

	const handleChange = time => {
		setStartTime(time);
	};
	const handleEndTimeChange = time => {
		setEndTime(time);
	};

	const style = {
		color: '#DC763E',
	};

	return (
		<Dialog onClose={handleClose} open={open}>
			<div className="my-5 w-[30rem] flex flex-col gap-4">
				<div className="flex justify-between items-center mx-10 text-black text-lg">
					<h1 className=" text-2xl ">Class</h1>
					<RxCross2 className="cursor-pointer" onClick={handleClose} />
				</div>
				<div className="border-2 border-b mx-8"></div>
				<div className="flex justify-between items-center mx-10">
					<span className="flex gap-4 items-center">
						<AiOutlineUserAdd size={26} style={style} />
						<h3 className="font-[400] text-lg text-[#090F19]">
							Select student
						</h3>
					</span>
					<span>
						<RiArrowRightSLine
							size={30}
							style={style}
							className="cursor-pointer"
						/>
					</span>
				</div>
				<div className="flex justify-between items-center mx-10">
					<span className="flex gap-4 items-center">
						<IoSyncOutline size={26} style={style} />
						<input
							id="single"
							checked={true}
							type="radio"
							value=""
							name="list-radio"
							onChange={checkedValuesHandler}
							className="cursor-pointer w-[1.2rem] h-[1.2rem] appearance-none rounded-full bg-white border-[#DADFE1]  border-2 checked:border-none checked:bg-[#FF5A00]"
						/>
						<label for="single" className="font-[400] text-lg text-[#090F19]">
							Single
						</label>
						<input
							id="weekly"
							type="radio"
							value=""
							name="list-radio"
							onChange={checkedValuesHandler}
							className="cursor-pointer w-[1.2rem] h-[1.2rem] appearance-none rounded-full bg-white border-[#DADFE1] checked:border-none border-2 checked:bg-[#FF5A00]"
						/>
						<label for="weekly" className="font-[400] text-lg text-[#090F19]">
							Weekly
						</label>
					</span>
				</div>
				<div className="flex items-center mx-10">
					<span className="flex gap-4">
						<IoTimeOutline size={26} style={style} className="mt-3" />
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<div className="flex ite gap-2">
								<DatePicker
									views={['day']}
									value={value}
									onChange={newValue => {
										setValue(newValue.$d);
									}}
									renderInput={params => (
										<TextField {...params} helperText={day} />
									)}
									inputProps={{
										style: {
											height: '10px',
											width: '5rem',
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
											width: '2.5rem',
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
											width: '2.5rem',
											'font-size': '15px',
										},
									}}
								/>
							</div>
						</LocalizationProvider>
					</span>
				</div>
				<button className="bg-[#D8DFE6] text-black font-semibold py-3 px-4 border rounded text-lg mx-10">
					Schedule new class
				</button>
			</div>
		</Dialog>
	);
}

export default NewClassDialog;
