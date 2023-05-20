import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import Image from 'next/image';
import Link from 'next/link';
import moment from 'moment';

// * Icons
import tutorImage from '../../../public/images/tutor-sample-image-1.png';
import { RxCross2 } from 'react-icons/rx';
import { CgCalendarDates } from 'react-icons/cg';
import { BiTime } from 'react-icons/bi';

function TutorCalender(props) {
	const { onClose, open, tutorId, schedule } = props;
	const [bookingDate, setBookingDate] = useState(null);
	const [bookingTime, setBookingTime] = useState({
		startTime: '',
		endTime: '',
	});

	// * Dates for calender
	const weekday = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];

	const scheduleDays = [
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
		'Sunday',
	];

	const date = new Date();
	const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
	const currentTime = new Date().toLocaleTimeString();
	let today = weekday[date.getDay()];

	function fetchMonthDates() {
		let start = moment().date();
		const thisMonth = date.getMonth() + 1;
		const year = date.getFullYear();
		let end = moment().endOf('month').date();

		const totalDays = end - start;
		const dates = [];
		for (let i = start; i <= end; i++) {
			dates.push({ month: thisMonth, date: i, year: year });
		}

		if (totalDays < 30) {
			const nextMonthDates = moment().add(1, 'month').calendar();
			const nextMonth = Number(nextMonthDates.split('/')[0]);
			const nextMonthDays = nextMonthDates.split('/')[1];

			for (let i = 1; i < nextMonthDays; i++) {
				dates.push({ month: nextMonth, date: i, year: year });
			}
		}

		const tutorDays = [];
		for (let i = 0; i <= 5; i++) {
			tutorDays.push(...scheduleDays);
		}

		const dayAndDate = [];

		let todayIndex = scheduleDays.findIndex(
			day => day.toUpperCase() === today.toUpperCase()
		);

		dates.map((date, index) => {
			dayAndDate.push({
				day: tutorDays[todayIndex],
				date: dates[index].date,
				month: date.month,
				year: date.year,
			});

			todayIndex = todayIndex + 1;
		});

		const tutorDayAndDates = schedule.map(schedule => {
			return dayAndDate.map(day => {
				if (schedule.day.toUpperCase() === day.day.toUpperCase()) {
					day.availability = schedule.availability;
					return day;
				}
			});
		});

		const flatArray = tutorDayAndDates.flat(1);

		let filteredDays = flatArray.filter(day => day !== undefined);

		filteredDays = filteredDays.sort((a, b) => (a.date > b.date ? -1 : 1));
		filteredDays = filteredDays.sort((a, b) => (a.month > b.month ? 1 : -1));

		return filteredDays;
	}

	const [monthDays, setMonthDays] = useState(() => fetchMonthDates());

	// * Date and Time select
	const [dateButton, setDateButton] = useState(false);
	const [buttonId, setButtonId] = useState(0);
	const [timeButtonId, setTimeButtonId] = useState(null);
	const [showTime, setShowTime] = useState(false);

	// * Getting time slots for hours
	const timeSlots = time => {
		const allTime = time.flat(1);

		const slots = [];
		for (let i = 0; i < allTime.length; i++) {
			let totalHours = allTime[i].endTime - allTime[i].startTime;
			for (let j = 1; j <= totalHours; j++) {
				if (j === 1) {
					slots.push(allTime[i].startTime);
				}

				slots.push(allTime[i].startTime + j);
			}

			slots.push(0);
		}
		return slots;
	};

	const capitalizeDate = time => {
		return time.charAt(0).toUpperCase() + time.slice(1, 3);
	};

	const handleClick = id => {
		setDateButton(true);
		setButtonId(id);
	};

	const handleTimeButton = id => {
		setTimeButtonId(id);
	};

	const handleShowTime = () => {
		setShowTime(true);
	};

	const handleClose = () => {
		onClose(!open);
	};

	const handleBookingDate = date => {
		setBookingDate(`${date.date}/${date.month}/${date.year}`);
	};
	const handleBookingTime = time => {
		setBookingTime({ startTime: time.startTime, endTime: time.endTime });
	};

	return (
		<Dialog onClose={handleClose} open={open}>
			<div className="w-[30rem] my-2 px-4">
				<div className="flex justify-between my-2">
					<Image
						src={tutorImage}
						className="w-9 h-9 rounded-full object-cover"
						alt="tutor"
					/>
					<h3>Book a trial class</h3>
					<RxCross2 onClick={handleClose} className="cursor-pointer" />
				</div>
				<div className="border-b-2"></div>
				<div className="my-2 flex justify-between mx-10">
					<div className="flex">
						<CgCalendarDates size={30} />
						<h4>Date</h4>
					</div>
					<div className="flex">
						<BiTime size={30} />
						<h4>Time</h4>
					</div>
				</div>
				<div className="my-3 flex justify-between mx-8">
					<div className="flex flex-col space-y-3">
						{monthDays.map((schedule, index) => (
							<button
								key={index}
								className={
									dateButton && buttonId == index
										? 'border-2 rounded-full px-5 py-3 border-[#FF5A00] text-[#FF5A00]'
										: 'border-2 rounded-full px-5 py-3'
								}
								onClick={() => {
									handleClick(index);
									handleShowTime();
									handleBookingDate(schedule);
								}}
							>
								{capitalizeDate(schedule.day)} {schedule.date}
							</button>
						))}
					</div>
					<div className={showTime ? 'flex flex-col space-y-3' : 'hidden'}>
						{monthDays[buttonId].availability.map((availability, index) => {
							if (index > 0) {
								return;
							}
							const slots = timeSlots(monthDays[buttonId].availability);

							{
								return slots.map(
									(slot, i) =>
										i !== slots.length - 1 &&
										slots[i] !== 0 &&
										slots[i + 1] !== 0 && (
											<button
												key={i}
												className={
													dateButton && timeButtonId == i
														? 'border-2 rounded-full px-5 py-3 border-[#FF5A00] text-[#FF5A00]'
														: 'border-2 rounded-full px-5 py-3'
												}
												onClick={() => {
													handleTimeButton(i);
													handleBookingTime({
														startTime: slots[i] !== 0 && slots[i],
														endTime: slots[i + 1] !== 0 && slots[i + 1],
													});
												}}
											>
												{slots[i] !== 0 && slots[i]} -{' '}
												{slots[i + 1] !== 0 && slots[i + 1]}
											</button>
										)
								);
							}
						})}
					</div>
				</div>
				<div className="border-b-2"></div>
				<div className="flex align-middle justify-between my-2">
					<h3>
						The calendar is in your time zone <br />
						<span className="font-semibold">
							{timeZone} {currentTime}
						</span>
					</h3>

					<Link
						href={{
							pathname: `/checkout/${tutorId}`,
							query: {
								date: bookingDate,
								startTime: bookingTime.startTime,
								endTime: bookingTime.endTime,
							},
						}}
					>
						<button
							disabled={bookingDate === null && bookingTime.startTime === ''}
							className="border-2 rounded-lg px-5 py-3 bg-[#FF5A00] text-white"
						>
							Confirm Time
						</button>
					</Link>
				</div>
			</div>
		</Dialog>
	);
}

export default TutorCalender;
