import React from 'react';
import { useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import { MdEventAvailable } from 'react-icons/md';

const AvailabilityFilter = ({ availability, setAvailability }) => {
	return (
		<div className="relative dropdown">
			<div className="select_input cursor-pointer rounded-full px-4 space-x-1 flex items-center">
				<MdEventAvailable />
				<div className="flex items-center justify-between ">
					{availability.time?.length > 0 || availability.day?.length > 0 ? (
						<>
							{availability.day?.map((day, index) => (
								<>
									<p key={index} className="">
										{day}
									</p>
									<span
										onClick={() =>
											setAvailability({
												...availability,
												day: availability.day.filter(elm => elm !== day),
											})
										}
										className="rounded-full mr-2 ml-2 p-1 cursor-pointer bg-slate-100"
									>
										<IoIosClose />
									</span>
								</>
							))}
							{availability.time?.map((time, index) => (
								<>
									<p key={index} className="">
										{time}
									</p>
									<span
										onClick={() =>
											setAvailability({
												...availability,
												time: availability.time.filter(elm => elm !== time),
											})
										}
										className="rounded-full mr-2 ml-2 p-1 cursor-pointer bg-slate-100"
									>
										<IoIosClose />
									</span>
								</>
							))}
						</>
					) : (
						<p>Availability</p>
					)}
					<svg
						className="w-5 h-5 ml-2 -mr-1"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
							clipRule="evenodd"
						></path>
					</svg>
				</div>
			</div>
			<div className="opacity-0 min-w-[450px]  py-5 px-7 cursor-auto absolute rounded-lg shadow-md left-0 outline-none border border-gray-200 bg-white top-[50px] invisible dropdown-menu transition-all duration-300 transform origin-top -translate-y-2 scale-95">
				<div>
					<h3>Time of the day</h3>
					<div className="flex flex-wrap gap-4 items-center mt-3">
						<p
							onClick={() =>
								setAvailability({
									...availability,
									time: [...availability.time, '0:00-4:00'],
								})
							}
							className="filter_btn"
						>
							0:00 - 4:00
						</p>
						<p
							onClick={() =>
								setAvailability({
									...availability,
									time: [...availability.time, '4:00-8:00'],
								})
							}
							className="filter_btn"
						>
							4:00 - 8:00
						</p>
						<p
							onClick={() =>
								setAvailability({
									...availability,
									time: [...availability.time, '8:00-12:00'],
								})
							}
							className="filter_btn"
						>
							8:00 - 12:00
						</p>
						<p
							onClick={() =>
								setAvailability({
									...availability,
									time: [...availability.time, '12:00-16:00'],
								})
							}
							className="filter_btn"
						>
							12:00 - 16:00
						</p>
						<p
							onClick={() =>
								setAvailability({
									...availability,
									time: [...availability.time, '16:00-20:00'],
								})
							}
							className="filter_btn"
						>
							16:00 - 20:00
						</p>
						<p
							onClick={() =>
								setAvailability({
									...availability,
									time: [...availability.time, '20:00-24:00'],
								})
							}
							className="filter_btn"
						>
							20:00 - 24:00
						</p>
					</div>
					<div className="mt-4">
						<h3>Days of the week</h3>
						<div className="flex flex-wrap gap-4 mt-3 items-center">
							<p
								onClick={() =>
									setAvailability({
										...availability,
										day: [...availability.day, 'Mon'],
									})
								}
								className="filter_btn"
							>
								Mon
							</p>
							<p
								onClick={() =>
									setAvailability({
										...availability,
										day: [...availability.day, 'Tue'],
									})
								}
								className="filter_btn"
							>
								Tue
							</p>
							<p
								onClick={() =>
									setAvailability({
										...availability,
										day: [...availability.day, 'Wed'],
									})
								}
								className="filter_btn"
							>
								Wed
							</p>
							<p
								onClick={() =>
									setAvailability({
										...availability,
										day: [...availability.day, 'Thu'],
									})
								}
								className="filter_btn"
							>
								Thu
							</p>
							<p
								onClick={() =>
									setAvailability({
										...availability,
										day: [...availability.day, 'Fri'],
									})
								}
								className="filter_btn"
							>
								Fri
							</p>
							<p
								onClick={() =>
									setAvailability({
										...availability,
										day: [...availability.day, 'Sat'],
									})
								}
								className="filter_btn"
							>
								Sat
							</p>
							<p
								onClick={() =>
									setAvailability({
										...availability,
										day: [...availability.day, 'Sun'],
									})
								}
								className="filter_btn"
							>
								Sun
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AvailabilityFilter;
