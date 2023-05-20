import React, { useEffect, useState } from 'react';
const axios = require('axios');
import { useSelector } from 'react-redux';
import Monday from './CalenderRows/Monday';
import ClassBooking from './ClassBooking';
import CalendarSettings from './CalendarSettings';
import GoogleCalendar from './GoogleCalendar';

const SetupAvailability = ({
	setShowSetupAvailability,
	showSetupAvailability,
}) => {
	const [showClassBooking, setShowClassBooking] = useState(false);
	const [showCalendarSettings, setShowCalendarSettings] = useState(false);
	const [showGoogleCalendar, setShowGoogleCalendar] = useState(false);
	const { user } = useSelector(state => state.user);
	const [tutor, setTutor] = useState(null);
	const availabilityCounters = [
		{ count: 1 },
		{ count: 1 },
		{ count: 1 },
		{ count: 1 },
		{ count: 1 },
		{ count: 1 },
		{ count: 1 },
		{ count: 1 },
		{ count: 1 },
		{ count: 1 },
		{ count: 1 },
		{ count: 1 },
		{ count: 1 },
		{ count: 1 },
		{ count: 1 },
		{ count: 1 },
		{ count: 1 },
		{ count: 1 },
		{ count: 1 },
		{ count: 1 },
		{ count: 1 },
		{ count: 1 },
		{ count: 1 },
		{ count: 1 },
	];

	useEffect(() => {
		if (user._id !== undefined) {
			axios
				.get(
					`${process.env.REACT_APP_BACKEND_API}/api/v1/tutor/getTutor/${user._id}`,

					{
						withCredentials: true,
						headers: {
							'Content-Type': 'application/json',
						},
					}
				)
				.then(res => {
					setTutor(res.data.tutor);
				});
		}
	}, [user._id]);

	return (
		<div className="flex">
			<div className="basis-2/3">
				<div className=" w-[55rem]  my-4 py-2 px-4 mx-10 rounded-lg">
					{tutor &&
						!showClassBooking &&
						!showCalendarSettings &&
						!showGoogleCalendar && (
							<div>
								<h1 className="font-bold text-xl bg-white px-4">
									Select time slots when you’re available for booking
								</h1>
								<h2 className="text-[#914100] py-2 bg-white px-4">
									You’ve made night time slots (1:00 AM — 5:00 AM) available for
									class booking. Make sure you’ll be able to teach during the
									night to avoid missing classes.
								</h2>
								<table className="border border-[#DDDDDD] w-[53rem] bg-white mt-4">
									<tr className="font-[400] text-xs text-[#8A959E] border border-[#DDDDDD]">
										<th className="text-[#6F757B] py-2"></th>
										<th className="py-2">Mon</th>
										<th className="py-2 ">Tue</th>
										<th className="py-2 ">Wed</th>
										<th className="py-2 ">Thu</th>
										<th className="py-2 ">Fri</th>
										<th className="py-2 ">Sat</th>
										<th className="py-2 ">Sun</th>
									</tr>
									{availabilityCounters.map((avail, index) => (
										<Monday
											key={index}
											tutor={tutor}
											start={index}
											end={index + 1}
											time={`${index}:00`}
											count={index + 30}
										/>
									))}
								</table>
							</div>
						)}
					{showClassBooking && <ClassBooking />}
					{showCalendarSettings && <CalendarSettings />}
					{showGoogleCalendar && <GoogleCalendar />}
				</div>
			</div>
			<div className="basis-1/3">
				<button
					className={
						!showClassBooking && !showCalendarSettings && !showGoogleCalendar
							? 'bg-[#FF5A00] text-white font-semibold py-3 px-4 border border-[#FDECE4] rounded-lg text-lg w-72 mt-4 mb-2'
							: 'bg-white text-black font-semibold py-3 px-4 border border-[#FDECE4] rounded-lg text-lg w-72 mt-4 mb-2'
					}
					onClick={() => {
						setShowSetupAvailability(true),
							setShowClassBooking(false),
							setShowGoogleCalendar(false);
					}}
				>
					Availability
				</button>
				<button
					className={
						showClassBooking
							? 'bg-[#FF5A00] text-white font-semibold py-3 px-4 border border-[#FDECE4] rounded-lg text-lg w-72 mt-4 mb-2'
							: 'bg-white text-black font-semibold py-3 px-4 border border-[#FDECE4] rounded-lg text-lg w-72 mt-4 mb-2'
					}
					onClick={() => {
						setShowClassBooking(true),
							setShowCalendarSettings(false),
							setShowGoogleCalendar(false);
					}}
				>
					Class Booking
				</button>
				<button
					className={
						showCalendarSettings
							? 'bg-[#FF5A00] text-white font-semibold py-3 px-4 border border-[#FDECE4] rounded-lg text-lg w-72 mt-4 mb-2'
							: 'bg-white text-black font-semibold py-3 px-4 border border-[#FDECE4] rounded-lg text-lg w-72 mt-4 mb-2'
					}
					onClick={() => {
						setShowClassBooking(false),
							setShowCalendarSettings(true),
							setShowGoogleCalendar(false);
					}}
				>
					Class Settings
				</button>
				<button
					className={
						showGoogleCalendar
							? 'bg-[#FF5A00] text-white font-semibold py-3 px-4 border border-[#FDECE4] rounded-lg text-lg w-72 mt-4 mb-2'
							: 'bg-white text-black font-semibold py-3 px-4 border border-[#FDECE4] rounded-lg text-lg w-72 mt-4 mb-2'
					}
					onClick={() => {
						setShowClassBooking(false),
							setShowCalendarSettings(false),
							setShowGoogleCalendar(true);
					}}
				>
					Google Calendar
				</button>
			</div>
		</div>
	);
};

export default SetupAvailability;
