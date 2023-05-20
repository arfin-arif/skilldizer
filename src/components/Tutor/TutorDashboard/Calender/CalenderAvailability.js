import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Row from './Row';
const axios = require('axios');

const CalenderAvailability = ({ startDate, startDay }) => {
	const [booking, setBooking] = useState(null);

	const today = startDate.toString().split(' ')[0];
	const todayDate = startDate.toString().split(' ')[2];
	const day2 = moment(startDate).add(1, 'days');
	const day2Day = day2.toString().split(' ')[2];
	const day2Date = day2.toString().split(' ')[0];
	const day3 = moment(startDate).add(2, 'days');
	const day3Day = day3.toString().split(' ')[2];
	const day3Date = day3.toString().split(' ')[0];
	const day4 = moment(startDate).add(3, 'days');
	const day4Day = day4.toString().split(' ')[2];
	const day4Date = day4.toString().split(' ')[0];
	const day5 = moment(startDate).add(4, 'days');
	const day5Day = day5.toString().split(' ')[2];
	const day5Date = day5.toString().split(' ')[0];
	const day6 = moment(startDate).add(5, 'days');
	const day6Day = day6.toString().split(' ')[2];
	const day6Date = day6.toString().split(' ')[0];
	const day7 = moment(startDate).add(6, 'days');
	const day7Day = day7.toString().split(' ')[2];
	const day7Date = day7.toString().split(' ')[0];

	useEffect(() => {
		if (booking === null) {
			axios
				.get(
					`${process.env.REACT_APP_BACKEND_API}/api/v1/booking/weekly-bookings/${startDate}/${day7}`,

					{
						withCredentials: true,
						headers: {
							'Content-Type': 'application/json',
						},
					}
				)
				.then(res => {
					console.log(res);
					setBooking(res.data.bookings);
				});
		}
	}, [booking, startDate, day7]);
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

	return (
		<div>
			<table className="border border-[#DDDDDD] w-full">
				<tr className=""></tr>
				<tr className="font-[400] text-xs text-[#8A959E] border border-[#DDDDDD]">
					<th className="text-[#6F757B] py-2"></th>
					<th className="py-2 ">
						<div className="space-x-1">
							<span>{today}</span>
							<span>{todayDate}</span>
						</div>
					</th>
					<th className=" py-2 ">
						<div className="space-x-1">
							<span>{day2Day}</span>
							<span>{day2Date}</span>
						</div>
					</th>
					<th className=" py-2 ">
						<div className="space-x-1">
							<span>{day3Day}</span>
							<span>{day3Date}</span>
						</div>
					</th>
					<th className=" py-2 ">
						<div className="space-x-1">
							<span>{day4Day}</span>
							<span>{day4Date}</span>
						</div>
					</th>
					<th className=" py-2 ">
						<div className="space-x-1">
							<span>{day5Day}</span>
							<span>{day5Date}</span>
						</div>
					</th>
					<th className=" py-2 ">
						<div className="space-x-1">
							<span>{day6Day}</span>
							<span>{day6Date}</span>
						</div>
					</th>
					<th className=" py-2">
						<div className="space-x-1">
							<span>{day7Day}</span>
							<span>{day7Date}</span>
						</div>
					</th>
				</tr>
				{booking &&
					availabilityCounters.map((avail, index) => {
						{
							return booking.map(booking => (
								<Row
									key={index}
									booking={booking}
									start={index}
									end={index + 1}
									time={`${index}:00`}
									count={index + 30}
								/>
							));
						}
					})}
			</table>
		</div>
	);
};

export default CalenderAvailability;
