import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import ExportExcel from './Excelexport';
import moment from 'moment';

import ApexChart from './ApexChart';

const Statistics = ({ booking }) => {
	const [selectedButton, setSelectedButton] = useState('');
	const [from, setFrom] = useState(null);
	const [to, setTo] = useState(null);
	const [value, setValue] = useState(43);

	const handleWeekButton = () => {
		setSelectedButton('week');

		const from = moment()
			.startOf('week')
			.toDate()
			.toString()
			.split(' ')
			.slice(1, 4)
			.join(' ');
		const to = moment()
			.endOf('week')
			.toDate()
			.toString()
			.split(' ')
			.slice(1, 4)
			.join(' ');
		const value = 50;
		setFrom(from);
		setTo(to);
		setValue(value);
	};

	const handleMonthButton = () => {
		setSelectedButton('month');
		const from = moment()
			.subtract(1, 'month')
			.toDate()
			.toString()
			.split(' ')
			.slice(1, 4)
			.join(' ');

		const to = moment().toDate().toString().split(' ').slice(1, 4).join(' ');
		const value = 125;
		setFrom(from);
		setTo(to);
		setValue(value);
	};
	const handleQuarterButton = () => {
		setSelectedButton('quarter');
		const from = moment()
			.subtract(3, 'month')
			.toDate()
			.toString()
			.split(' ')
			.slice(1, 4)
			.join(' ');

		const to = moment().toDate().toString().split(' ').slice(1, 4).join(' ');
		const value = 475;
		setFrom(from);
		setTo(to);
		setValue(value);
	};
	const handleYearButton = () => {
		setSelectedButton('year');
		const from = moment()
			.subtract(1, 'year')
			.toDate()
			.toString()
			.split(' ')
			.slice(1, 4)
			.join(' ');

		const to = moment().toDate().toString().split(' ').slice(1, 4).join(' ');
		const value = 1575;
		setFrom(from);
		setTo(to);
		setValue(value);
	};
	const [currentChart, setCurrentChart] = useState('year');
	const year = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	const week = [
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
		'Sunday',
	];

	const monthData = [
		44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35, 22, 23, 24, 25, 26, 27,
		28, 29, 30, 31, 22, 23, 24, 25, 26, 27, 28, 29,
	];
	const yearData = [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65];
	const weekData = [44, 55, 41, 67, 22, 43, 21];

	const month = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
		22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
	];

	const chartData = {
		series: [
			{
				name: 'Earnings',
				data:
					currentChart === 'month'
						? monthData
						: currentChart === 'year'
						? yearData
						: weekData,
			},
		],
		options: {
			annotations: {
				points: [
					{
						x: 'Bananas',
						seriesIndex: 0,
						label: {
							borderColor: '#FF5A00',
							offsetY: 0,
							style: {
								color: '#fff',
								background: '#FF5A00',
							},
						},
					},
				],
			},
			responsive: [
				{
					breakpoint: 400,
					options: {
						chart: {
							height: '180px',
							width: 330,
							type: 'bar',
							toolbar: {
								show: false,
							},
							background: '#fff',
						},
					},
				},
			],

			colors: ['#FF5A00', '#FF5A00', '#FF5A00'],
			chart: {
				height: '100px',
				width: 10,
				type: 'bar',
				toolbar: {
					show: false,
				},
				background: '#fff',
			},

			plotOptions: {
				bar: {
					borderRadius: 10,
					columnWidth: '20%',
				},
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				width: 2,
			},

			xaxis: {
				labels: {
					rotate: -45,
				},
				categories:
					currentChart === 'month'
						? month
						: currentChart === 'year'
						? year
						: week,
				tickPlacement: 'on',
			},
		},
	};

	const { user } = useSelector(state => state.user);
	const [stats, setStats] = useState(null);
	const [tutor, setTutor] = useState(null);

	// * Availability Hours
	let availabilityHours;
	if (tutor) {
		const total = tutor.schedule.map(avail => {
			return avail.availability.map(
				availability => availability.endTime - availability.startTime
			);
		});

		const flattenedArray = total.flat(1);

		availabilityHours = flattenedArray.reduce((total, val) => total + val, 0);
	}

	// *  Student conversion
	let studentConversion;
	if (booking) {
		const trialStudents = booking.filter(
			element => element.bookingType === 'Trial'
		);

		const convertedStudents = trialStudents.map(student => {
			return booking.filter(
				booking =>
					booking.bookingType !== 'Trial' && booking.userId == student.userId
			);
		});
		const flattenedArray = convertedStudents.flat(1);

		const totalStudents = flattenedArray.filter(
			elem => elem !== [] || elem !== undefined
		);

		studentConversion = (totalStudents.length / trialStudents.length).toFixed(
			2
		);
	}

	// * Hours Per Students
	let hoursPerStudent;
	let uniqueStudents;
	if (booking) {
		const totalStudents = booking.map(booking => booking.userId._id);
		uniqueStudents = [...new Set(totalStudents)];
		hoursPerStudent = (totalStudents.length / uniqueStudents.length).toFixed(2);
	}

	// * New Students
	let newStudents;
	if (booking) {
		const totalStudents = booking.filter(
			booking =>
				booking.classStatus === 'Upcoming' || booking.classStatus === 'Active'
		);
		const allStudents = totalStudents.map(booking => booking.userId._id);
		newStudents = [...new Set(allStudents)];
	}

	// * Active Students
	let activeStudents;
	if (booking) {
		const totalStudents = booking.filter(
			booking => booking.classStatus === 'Active'
		);

		const allStudents = totalStudents.map(booking => booking.userId._id);
		activeStudents = [...new Set(allStudents)];
	}
	// * Tutoring Hours
	let tutoringHours;
	if (booking) {
		tutoringHours = booking.filter(
			booking => booking.classStatus === 'Completed'
		);
	}

	// * Canceled Trials
	let canceledTrials;
	let totalTrials;
	if (booking) {
		canceledTrials = booking.filter(
			booking => booking.classStatus === 'Canceled'
		);
		totalTrials = booking.filter(booking => booking.bookingType === 'Trial');
	}

	// * Getting Tutor and Bookings
	useEffect(() => {
		if (stats === null) {
			axios
				.get(
					`${process.env.REACT_APP_BACKEND_API}/api/v1/stats/get-stats`,

					{
						withCredentials: true,
						headers: {
							'Content-Type': 'application/json',
						},
					}
				)
				.then(({ data }) => {
					setStats(data?.tutor);
				});
		}
	}, [stats, booking]);
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
		<div className="w-[70rem] md:px-10 px-6 my-10">
			{stats && tutor && booking && (
				<div>
					<div className="flex items-center gap-4">
						<h1 className="font-[500] md:text-2xl">
							Profile and trial classes
						</h1>
						<h4 className="text-[#989C9E] pt-1"> Last 365 days</h4>
					</div>

					<div className="mt-8 flex gap-4 flex-col md:flex-row">
						<div className="flex gap-6">
							<div className="bg-white  px-4 py-4 h-[18rem] md:w-[14rem] w-[150px] rounded-xl">
								<h3 className="text-[#1D1E20] md:text-lg text-[12px]">
									Conversion to trial
								</h3>
								<h2 className="font-[500] md:text-2xl text-[16px]">
									{(booking.length / stats.trialMessage).toFixed(2)}%
								</h2>
								<p className="text-[#737678] md:text-[14px] text-[12px] pt-2">
									The average conversion to trial for all Arabic tutors is 0.24%
								</p>
								<p className="text-[#737678] md:text-[14px] text-[12px] pt-4">
									To improve your result, you can increase your availability and
									boost your profile score.
								</p>
							</div>
							<div className="bg-white  px-4 py-4 h-[18rem]  md:w-[14rem] w-[150px] rounded-xl">
								<h3 className="text-[#1D1E20] md:text-lg text-[12px]">
									Hourly rate
								</h3>
								<h2 className="font-[500] md:text-2xl text-[16px]">
									${tutor.hourlyRate}
									<span className="text-[#24BB36] bg-[#F8F8F8] font-[400] text-[14px] px-2 rounded-lg">
										Live
									</span>
								</h2>
								<p className="text-[#737678]  md:text-[14px] text-[12px] pt-2">
									16% of Arabic classes were booked at $15 or above%
								</p>
							</div>
						</div>
						<div className="flex gap-6">
							<div className="flex flex-col gap-3">
								<div className="bg-white  px-4 py-4 h-[5.5rem]  md:w-[14rem] w-[150px] rounded-xl">
									<h3 className="text-[#1D1E20] md:text-lg text-[12px]">
										Profile views
									</h3>
									<h2 className="font-[500] md:text-2xl text-[18px]">
										{stats.profileViews}
									</h2>
								</div>
								<div className="bg-white  px-4 py-4 h-[5.5rem]  md:w-[14rem] w-[150px] rounded-xl">
									<h3 className="text-[#1D1E20] md:text-lg text-[12px]">
										First messages
									</h3>
									<h2 className="font-[500] md:text-2xl text-[18px]">
										{stats.trialMessage}
									</h2>
								</div>
								<div className="bg-white  px-4 py-4 h-[5.5rem]  md:w-[14rem] w-[150px] rounded-xl">
									<h3 className="text-[#1D1E20] md:text-lg text-[12px]">
										Booked trials
									</h3>
									<h2 className="font-[500] md:text-2xl text-[18px]">
										{booking.length}
									</h2>
								</div>
							</div>
							<div className="flex flex-col gap-3">
								<div className="bg-white  px-4 py-4 h-[5.5rem] md:w-[14rem] w-[150px] rounded-xl">
									<h3 className="text-[#1D1E20] md:text-lg text-[12px]">
										Profile score
									</h3>
									<h2 className="font-[500] md:text-2xl text-[18px]">
										87%
										<span className="text-[#24BB36] bg-[#F8F8F8] font-[400] text-[14px] px-2 rounded-lg">
											Live
										</span>
									</h2>
								</div>
								<div className="bg-white  px-4 py-4 h-[5.5rem] md:w-[14rem] w-[150px] rounded-xl">
									<h3 className="text-[#1D1E20] md:text-lg text-[12px]">
										Profile position
									</h3>
									<h2 className="font-[500] md:text-2xl text-[18px]">
										39
										<span className="text-[#24BB36] bg-[#F8F8F8] font-[400] text-[14px] px-2 rounded-lg">
											Live
										</span>
									</h2>
								</div>
								<div className="bg-white  px-4 py-4 h-[5.5rem] md:w-[14rem] w-[150px] rounded-xl">
									<h3 className="text-[#1D1E20] md:text-lg text-[12px]">
										{' '}
										Availability{' '}
									</h3>
									<h2 className="font-[500] md:text-2xl text-[18px]">
										{availabilityHours} hrs
										<span className="text-[#24BB36] bg-[#F8F8F8] font-[400] text-[14px] px-2 rounded-lg">
											Live
										</span>
									</h2>
								</div>
							</div>
						</div>
					</div>

					{/* //* New Students */}
					<div className="flex items-center gap-4 mt-10">
						<h1 className="font-[500] md:text-2xl">New students</h1>
					</div>

					<div className="mt-6 flex flex-col md:flex-row gap-4">
						<div className="flex gap-6">
							<div className="bg-white  md:px-4 px-2 py-4 md:h-[18rem] h-[20-rem] md:w-[14rem] w-[150px] rounded-xlv relative">
								<h3 className="text-[#1D1E20] md:text-lg text-[12px]">
									Conversion to students
								</h3>
								<h2 className="font-[500]  md:text-2xl text-[18px]">
									{studentConversion}%
								</h2>
								<p className="text-[#737678] text-[14px] pt-2">
									Don’t worry! To increase your conversion to student, you can:
									<ol>
										<li>• lower your hourly rate</li>
										<li>• expand your availability</li>
										<li>• improve your trial classes</li>
									</ol>
								</p>
								<h3 className="absolute bottom-5 text-[#FF574D] font-[500]">
									Low
								</h3>
								<div className="border-[3px] border-b absolute bottom-2 w-[3rem] border-[#FF574D]"></div>
								<div className="border-[3px] border-b absolute left-14 w-[10rem] bottom-2 border-[#F3F3F3]"></div>
							</div>
							<div className="bg-white  px-4 py-4 md:h-[18rem] h-[20rem] md:w-[14rem] w-[150px] rounded-xl relative">
								<h3 className="text-[#1D1E20] md:text-lg text-[12px]">
									Hours per student
								</h3>
								<h2 className="font-[500]  md:text-2xl text-[18px]">
									{hoursPerStudent} hrs
									<span className="text-[#24BB36] bg-[#F8F8F8] font-[400] text-[14px] px-2 rounded-lg">
										Live
									</span>
								</h2>
								<p className="text-[#737678] text-[14px] pt-2">
									Don’t worry! To increase your hours per active student, try
									to:
									<ol>
										<li>• improve your trial classes</li>
										<li>
											• motivate your students to learn more often with you
										</li>
									</ol>
								</p>
								<h3 className="absolute bottom-5 text-[#FF574D] font-[500]">
									Low
								</h3>
								<div className="border-[3px] border-b absolute bottom-2 w-[3rem] border-[#FF574D]"></div>
								<div className="border-[3px] border-b absolute left-14 w-[10rem] bottom-2 border-[#F3F3F3]"></div>
							</div>
						</div>
						<div className="flex gap-6">
							<div className="flex flex-col gap-3">
								<div className="bg-white  px-4 py-4 h-[5.5rem] md:w-[14rem] w-[150px] rounded-xl">
									<h3 className="text-[#1D1E20] md:text-lg text-[12px]">
										New students
									</h3>

									<h2 className="font-[500]  md:text-2xl text-[18px]">
										{newStudents.length}
									</h2>
								</div>
								<div className="bg-white  px-4 py-4 h-[5.5rem] md:w-[14rem] w-[150px] rounded-xl">
									<h3 className="text-[#1D1E20] md:text-lg text-[12px]">
										Active students
									</h3>
									<h2 className="font-[500]  md:text-2xl text-[18px]">
										{activeStudents.length}
									</h2>
								</div>
								<div className="bg-white  px-4 py-4 h-[5.5rem] md:w-[14rem] w-[150px] rounded-xl">
									<h3 className="text-[#1D1E20] md:text-lg text-[12px]">
										Tutoring hours
									</h3>
									<h2 className="font-[500]  md:text-2xl text-[18px]">
										{tutoringHours.length} hrs
									</h2>
								</div>
							</div>
							<div className="flex flex-col gap-3">
								<div className="bg-white  px-4 py-4 h-[5.5rem] md:w-[14rem] w-[150px] rounded-xl">
									<h3 className="text-[#1D1E20] md:text-lg text-[12px]">
										Trial classes rating
									</h3>
									<h2 className="font-[500] md:text-2xl text-[18px]">--</h2>
								</div>
								<div className="bg-white  px-4 py-4 h-[5.5rem] md:w-[14rem] w-[150px] rounded-xl">
									<h3 className="text-[#1D1E20] md:text-lg text-[12px]">
										Trials you didn’t attend
									</h3>
									<h2 className="font-[500] md:text-2xl text-[18px]">
										0/{totalTrials.length}
									</h2>
								</div>
								<div className="bg-white  px-4 py-4 h-[5.5rem] md:w-[14rem] w-[150px] rounded-xl">
									<h3 className="text-[#1D1E20] md:text-lg text-[12px]">
										Trials you canceled
									</h3>
									<h2 className="font-[500] md:text-2xl text-[18px]">
										{canceledTrials.length}
									</h2>
								</div>
							</div>
						</div>
					</div>

					{/* //* Achievements */}
					<div className="flex items-center gap-4 mt-10">
						<h1 className="font-[500] md:text-2xl">Lifetime achievements</h1>
					</div>

					<div className="flex gap-8 pt-4  ">
						<div className="flex flex-col md:flex-row  gap-3">
							<div className="flex flex-col gap-3">
								<div className="bg-white  px-4 py-4 h-[5.5rem] md:w-[14rem] w-[150px] rounded-xl">
									<h3 className="text-[#1D1E20] md:text-lg text-[12px]">
										Total net earnings
									</h3>
									<h2 className="font-[500] md:text-2xl text-[18px]">
										${tutoringHours.length * tutor.hourlyRate}
									</h2>
								</div>
								<div className="bg-white  px-4 py-4 h-[5.5rem] md:w-[14rem] w-[150px] rounded-xl">
									<h3 className="text-[#1D1E20] md:text-lg text-[12px]">
										Total reviews
									</h3>
									<h2 className="font-[500] md:text-2xl text-[18px]">
										{tutor.reviews.length}
									</h2>
								</div>
							</div>
							<div className="flex flex-col gap-3">
								<div className="bg-white  px-4 py-4 h-[5.5rem] md:w-[14rem] w-[150px] rounded-xl">
									<h3 className="text-[#1D1E20] md:text-lg text-[12px]">
										Total tutoring hours
									</h3>
									<h2 className="font-[500] md:text-2xl text-[18px]">
										{tutoringHours.length} hrs
									</h2>
								</div>
								<div className="bg-white  px-4 py-4 h-[5.5rem] md:w-[14rem] w-[150px] rounded-xl">
									<h3 className="text-[#1D1E20] md:text-lg text-[12px]">
										Average review rating
									</h3>
									<h2 className="font-[500] md:text-2xl text-[18px]">
										{tutor.ratings}
									</h2>
								</div>
							</div>
						</div>
						<div className="flex flex-col md:flex-row  gap-3">
							<div className="flex flex-col gap-3">
								<div className="bg-white  px-4 py-4 h-[5.5rem] md:w-[14rem] w-[150px] rounded-xl">
									<h3 className="text-[#1D1E20] md:text-lg text-[12px]">
										Total students
									</h3>
									<h2 className="font-[500] md:text-2xl text-[18px]">
										{uniqueStudents.length}
									</h2>
								</div>
								<div className="bg-white  px-4 py-4 h-[5.5rem] md:w-[14rem] w-[150px] rounded-xl">
									<h3 className="text-[#1D1E20] md:text-lg text-[12px]">
										Average classes rating
									</h3>
									<h2 className="font-[500] md:text-2xl text-[18px]">
										{tutor.ratings}
									</h2>
								</div>
							</div>
							<div className="flex flex-col gap-3">
								<div className="bg-white  px-4 py-4 h-[5.5rem] md:w-[14rem] w-[150px] rounded-xl">
									<h3 className="text-[#1D1E20] md:text-lg text-[12px]">
										Hours per student
									</h3>
									<h2 className="font-[500] md:text-2xl text-[18px]">
										{hoursPerStudent} hrs
									</h2>
								</div>
								<div className="bg-white  px-4 py-4 h-[5.5rem] md:w-[14rem] w-[150px] rounded-xl">
									<h3 className="text-[#1D1E20] md:text-lg text-[12px]">
										Your total absences
									</h3>
									<h2 className="font-[500] md:text-2xl text-[18px]">
										{canceledTrials.length}
									</h2>
								</div>
							</div>
						</div>
					</div>

					<ExportExcel
						selectedButton={selectedButton}
						setSelectedButton={setSelectedButton}
						handleWeekButton={handleWeekButton}
						handleMonthButton={handleMonthButton}
						handleQuarterButton={handleQuarterButton}
						handleYearButton={handleYearButton}
						setFrom={setFrom}
						setTo={setTo}
						from={from}
						to={to}
						excelData={[
							{
								from: from,
								to: to,
								earnings: value,
							},
						]}
						fileName="Earnings Report"
					/>

					<div className="flex md:gap-8 gap-2">
						<button
							className={
								currentChart === 'year'
									? 'bg-[#1D1E20] py-2 md:px-8 px-6 text-white rounded-[10px] mt-8 md:w-[13rem] h-[3rem]'
									: 'bg-[##F5F5F5] py-2  md:px-8 px-6 text-black rounded-[10px] mt-8  md:w-[13rem] h-[3rem] border-2 border-[#1D1E20]'
							}
							onClick={() => {
								setCurrentChart('year');
							}}
						>
							All Time
						</button>
						<button
							className={
								currentChart === 'month'
									? 'bg-[#1D1E20] py-2  md:px-8 px-6 text-white rounded-[10px] mt-8  md:w-[13rem] h-[3rem]'
									: 'bg-[##F5F5F5] py-2  md:px-8 px-6 text-black rounded-[10px] mt-8  md:w-[13rem] h-[3rem] border-2 border-[#1D1E20]'
							}
							onClick={() => {
								setCurrentChart('month');
							}}
						>
							Month
						</button>
						<button
							className={
								currentChart === 'week'
									? 'bg-[#1D1E20] py-2  md:px-8 px-6 text-white rounded-[10px] mt-8  md:w-[13rem] h-[3rem]'
									: 'bg-[##F5F5F5] py-2  md:px-8 px-6 text-black rounded-[10px] mt-8  md:w-[13rem] h-[3rem] border-2 border-[#1D1E20]'
							}
							onClick={() => setCurrentChart('week')}
						>
							Week
						</button>
					</div>
					<div className="mt-8 border border-[#000] rounded-xl bg-white w-[21rem] md:w-full">
						<div className="flex px-10 pt-6 md:gap-28 gap-10 items-center">
							<span>
								<h3 className="font-[700] md:text-[28px] text-[20px]">
									${tutoringHours.length * tutor.hourlyRate}
								</h3>
								<h3 className="font-[500] text-[16px]">Income Earned</h3>
							</span>
							<span>
								<select className="border border-[#000] rounded-md md:w-[40rem] w-[8rem] bg-white py-2">
									<option value="Earnings" selected>
										Earnings
									</option>
									<option value="Hours">Hours</option>
								</select>
							</span>
						</div>
						<div className="bg-white relative">
							{<ApexChart currentChart={currentChart} chartData={chartData} />}
							<div className="border-[6px] border-b absolute md:bottom-12 w-[17rem] bottom-[6rem] left-12 md:w-[60rem] border-[#FF7326] rounded-lg"></div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Statistics;
