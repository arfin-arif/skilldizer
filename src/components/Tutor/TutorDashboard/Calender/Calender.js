import React, { useState } from 'react';
import moment from 'moment';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import CalenderAvailability from './CalenderAvailability';
import DatePicker from './DatePicker';
import Tags from './Tags';
import NewClassDialog from './NewClassDialog';
import SetupAvailability from './SetupAvailability';
import TimeOff from './TimeOff';

const Calender = () => {
	// * Handling Dialog Open and close
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = value => {
		setOpen(false);
	};
	// * Handling Time Off Open and close
	const [timeOpen, setTimeOpen] = useState(false);

	const handleTimeClickOpen = () => {
		setTimeOpen(true);
	};

	const handleTimeClose = value => {
		setTimeOpen(false);
	};

	// * Current Weeks
	const startOfWeek = moment().startOf('week').toDate().toString();
	const endOfWeek = moment().endOf('week').toDate().toString();

	// * Click Count for next and previous weeks
	const [clickedCount, setClickedCount] = useState(1);
	const [nextClickedCount, setNextClickedCount] = useState(1);

	// * Dates for next and previous weeks
	const startMonth = startOfWeek.split(' ')[1];
	const endMonth = endOfWeek.split(' ')[1];
	const startDate = startOfWeek.split(' ')[2];
	const startDay = startOfWeek.split(' ')[0];
	const endDate = endOfWeek.split(' ')[2];
	const year = endOfWeek.split(' ')[3];
	const today = moment(startOfWeek);
	const nthOfMoth = Math.ceil(today.date() / 7);

	// * States for next and previous weeks
	const [currentMonth, setCurrentMonth] = useState(startMonth);
	const [nextMonth, setNextMonth] = useState(endMonth);
	const [weekStartDate, setWeekStartDate] = useState(startDate);
	const [weekEndDate, setWeekEndDate] = useState(endDate);
	const [weekNumber, setWeekNumber] = useState(nthOfMoth);
	const [fullWeekDate, setFullWeekDate] = useState(startOfWeek);

	// * Handling Previous week dates
	const previousWeek = () => {
		setClickedCount(clickedCount + 1);
		setNextClickedCount(1);
		const subtractDays = 7 * clickedCount;
		const weekDate = moment(startOfWeek)
			.subtract(subtractDays, 'days')
			.toString();
		setFullWeekDate(weekDate);
		const weekEndDate = moment(weekDate).add(7, 'days').toString();
		setCurrentMonth(weekDate.split(' ')[1]);
		setNextMonth(weekEndDate.split(' ')[1]);
		setWeekStartDate(weekDate.split(' ')[2]);
		setWeekEndDate(weekEndDate.split(' ')[2]);

		// * week number
		const today = moment(weekDate);
		const nthOfMoth = Math.ceil(today.date() / 7);
		setWeekNumber(nthOfMoth);
	};

	// * Handling Next week dates
	const nextWeek = () => {
		setNextClickedCount(nextClickedCount + 1);
		setClickedCount(1);
		const addDays = 7 * nextClickedCount;
		const weekDate = moment(startOfWeek).add(addDays, 'days').toString();
		setFullWeekDate(weekDate);
		const weekEndDate = moment(weekDate).add(7, 'days').toString();
		setCurrentMonth(weekDate.split(' ')[1]);
		setNextMonth(weekEndDate.split(' ')[1]);
		setWeekStartDate(weekDate.split(' ')[2]);
		setWeekEndDate(weekEndDate.split(' ')[2]);

		// * week number
		const today = moment(weekDate);
		const nthOfMoth = Math.ceil(today.date() / 7);
		setWeekNumber(nthOfMoth);
	};
	const [showSetupAvailability, setShowSetupAvailability] = useState(false);

	return (
		<section>
			{!showSetupAvailability && (
				<div className="flex pl-6 my-6">
					<div className="basis-4/5 flex flex-col">
						<div className="bg-white flex gap-2 font-[600] text-lg py-2 px-2 items-center ">
							<RiArrowLeftSLine
								size={20}
								onClick={previousWeek}
								className="cursor-pointer"
							/>
							<div className="flex gap-2">
								<span>{currentMonth}</span>
								<span>{weekStartDate}</span>
							</div>
							-
							<div className="flex gap-2">
								<span>
									{nextMonth} {weekEndDate}
								</span>
								<span>{year}</span>
							</div>
							<RiArrowRightSLine
								size={20}
								onClick={nextWeek}
								className="cursor-pointer"
							/>
							<span className="font-[400] text-sm pl-4">Week {weekNumber}</span>
						</div>
						<div className="bg-white mt-4">
							<CalenderAvailability
								startDate={fullWeekDate}
								startDay={startDay}
							/>
						</div>
					</div>
					<div className="basis-1/5 px-10 flex flex-col gap-4">
						<div className=" bg-white">
							<DatePicker />
						</div>
						<div className=" bg-white p-4">
							<Tags></Tags>
						</div>
						<button
							className="bg-[#FF5A00] text-white font-semibold py-2 px-4 w-[15rem] mx-10 border rounded-lg text-lg"
							onClick={handleClickOpen}
						>
							Schedule new class
						</button>
						<button
							className="bg-white text-black font-semibold py-2 px-4 border  w-[15rem] mx-10 border-[#FDECE4] rounded-lg text-lg"
							onClick={() => setShowSetupAvailability(true)}
						>
							Set up availability
						</button>
						<button
							className="bg-white text-black font-semibold py-2 px-4 border  w-[15rem] mx-10 border-[#FDECE4] rounded-lg text-lg"
							onClick={handleTimeClickOpen}
						>
							Add time off
						</button>
						<NewClassDialog open={open} onClose={handleClose} />
						<TimeOff open={timeOpen} onClose={handleTimeClose} />
					</div>
				</div>
			)}
			{showSetupAvailability && (
				<SetupAvailability
					setShowSetupAvailability={setShowSetupAvailability}
					showSetupAvailability={showSetupAvailability}
				/>
			)}
		</section>
	);
};

export default Calender;
