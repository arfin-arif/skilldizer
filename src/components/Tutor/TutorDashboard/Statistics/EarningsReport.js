import React, { useState, useRef } from 'react';
import Dialog from '@mui/material/Dialog';

const EarningsReport = props => {
	const {
		onClose,
		open,
		exportToExcel,
		fileName,
		selectedButton,
		setSelectedButton,
		handleWeekButton,
		handleMonthButton,
		handleQuarterButton,
		handleYearButton,
		setFrom,
		setTo,
		from,
		to,
	} = props;

	const handleClose = () => {
		onClose(!open);
	};

	return (
		<Dialog onClose={handleClose} open={open}>
			<div className="my-5 w-[26rem] mx-10">
				<h1 className="font-[400] text-[#384047] text-[24px]">
					Choose the dates for your <br /> earnings report
				</h1>
				<div className="flex flex-col mt-4 gap-2">
					<label htmlFor="start">Start</label>
					<input
						type="text"
						name=""
						id="start"
						className="border border-[#DADFE1] rounded py-2 px-4 w-[392px]"
						placeholder={from !== '' ? from : 'dd-mm-yyyy'}
						onChange={e => {
							setFrom(e.target.value);
						}}
					/>
				</div>
				<div className="flex flex-col mt-4 gap-2">
					<label htmlFor="start">End</label>
					<input
						type="text"
						name=""
						id="start"
						className="border border-[#DADFE1] rounded py-2 px-4 w-[392px]"
						placeholder={to !== '' ? to : 'dd-mm-yyyy'}
						onChange={e => setTo(e.target.value)}
					/>
				</div>
				<div className="mt-4 flex gap-5">
					<button
						className={
							selectedButton === 'week'
								? 'border bg-[#FF5A00] text-white py-1 px-5 rounded-md'
								: 'border border-[#FF5A00] text-[#FF5A00] py-1 px-5 rounded-md'
						}
						onClick={handleWeekButton}
					>
						Week
					</button>
					<button
						className={
							selectedButton === 'month'
								? 'border bg-[#FF5A00] text-white py-1 px-5 rounded-md'
								: 'border border-[#FF5A00] text-[#FF5A00] py-1 px-5 rounded-md'
						}
						onClick={handleMonthButton}
					>
						Month
					</button>
					<button
						className={
							selectedButton === 'quarter'
								? 'border bg-[#FF5A00] text-white py-1 px-5 rounded-md'
								: 'border border-[#FF5A00] text-[#FF5A00] py-1 px-5 rounded-md'
						}
						onClick={handleQuarterButton}
					>
						Quarter
					</button>
					<button
						className={
							selectedButton === 'year'
								? 'border bg-[#FF5A00] text-white py-1 px-5 rounded-md'
								: 'border border-[#FF5A00] text-[#FF5A00] py-1 px-5 rounded-md'
						}
						onClick={handleYearButton}
					>
						Year
					</button>
				</div>
				<button
					className="border-2 bg-[#FF5A00] text-white py-[14px] px-[32px] mt-4 rounded-xl"
					onClick={e => exportToExcel(fileName)}
				>
					Download report
				</button>
			</div>
		</Dialog>
	);
};

export default EarningsReport;
