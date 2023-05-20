import React, { useState, useEffect } from 'react';
import AvailabilityCheck from './AvailabilityCheck';

const AvailabilityGrid = ({ tutor }) => {
	console.log(tutor, 'tutor');
	// const availabilityCounters = [
	// 	{ count: 1 },
	// 	{ count: 1 },
	// 	{ count: 1 },
	// 	{ count: 1 },
	// 	{ count: 1 },
	// 	{ count: 1 },
	// 	{ count: 1 },
	// ];
	console.log('re rendering availability grid ');
	const [check, setCheck] = useState([]);
	// useEffect(() => {
	// 	console.log('re rendering avaialbility grid');
	// }, [tutor]);

	return (
		<div>
			<table className="border border-white bg-[#F1F5F9] ">
				<tr className="border-4 border-white"></tr>
				<tr className="border-4 border-white">
					<th className="border-4 border-white text-sm text-[#6F757B] py-6 w-28 h-2"></th>
					<th className="border-4 border-white text-sm text-[#6F757B] py-6 w-12 h-2">
						Mon
					</th>
					<th className="border-4 border-white text-sm text-[#6F757B] py-6 w-12">
						Tue
					</th>
					<th className="border-4 border-white text-sm text-[#6F757B] py-6 w-12">
						Wed
					</th>
					<th className="border-4 border-white text-sm text-[#6F757B] py-6 w-12">
						Thu
					</th>
					<th className="border-4 border-white text-sm text-[#6F757B] py-6 w-12">
						Fri
					</th>
					<th className="border-4 border-white text-sm text-[#6F757B] py-6 w-12">
						Sat
					</th>
					<th className="border-4 border-white text-sm text-[#6F757B] py-6 w-12">
						Sun
					</th>
				</tr>
				<tr className="border-4 border-white w-24 ">
					<td className="border-2 border-white text-sm text-[#6F757B] py-2 text-center">
						Morning 06:00 - 12:00
					</td>
					{tutor?.schedule?.map((counter, index) => (
						<AvailabilityCheck
							key={index}
							tutor={tutor}
							index={index}
							start={6}
							end={12}
							setCheck={setCheck}
							check={check}
							time={'Morning'}
						/>
					))}
					{check.length > 0 && (
						<td
							className={
								check.filter(e => e.index === 0 && e.time === 'Morning')
									.length > 0 && 'border-4 border-white bg-green-400'
							}
						></td>
					)}
					{check.length > 1 && (
						<td
							className={
								check.filter(e => e.index === 1 && e.time === 'Morning')
									.length > 0 && 'border-4 border-white bg-green-400'
							}
						></td>
					)}
					{check.length > 2 && (
						<td
							className={
								check.filter(e => e.index === 2 && e.time === 'Morning')
									.length > 0 && 'border-4 border-white bg-green-400'
							}
						></td>
					)}
					{check.length > 3 && (
						<td
							className={
								check.filter(e => e.index === 3 && e.time === 'Morning')
									.length > 0 && 'border-4 border-white bg-green-400'
							}
						></td>
					)}
					{check.length > 4 && (
						<td
							className={
								check.filter(e => e.index === 4 && e.time === 'Morning')
									.length > 0 && 'border-4 border-white bg-green-400'
							}
						></td>
					)}
					{check.length > 5 && (
						<td
							className={
								check.filter(e => e.index === 5 && e.time === 'Morning')
									.length > 0 && 'border-4 border-white bg-green-400'
							}
						></td>
					)}
					{check.length > 6 && (
						<td
							className={
								check.filter(e => e.index === 6 && e.time === 'Morning')
									.length > 0 && 'border-4 border-white bg-green-400'
							}
						></td>
					)}
				</tr>
				<tr className="border-2 border-white">
					<td className="border-2 border-white text-sm text-[#6F757B] py-2 text-center">
						Afternoon <br /> 12:00 - 18:00
					</td>
					{tutor.schedule.map((counter, index) => (
						<AvailabilityCheck
							key={index}
							tutor={tutor}
							index={index}
							start={12}
							end={18}
							setCheck={setCheck}
							check={check}
							time={'Afternoon'}
						/>
					))}
					{check.length > 0 && (
						<td
							className={
								check.filter(e => e.index === 0 && e.time === 'Afternoon')
									.length > 0 && 'border-4 border-white bg-green-400'
							}
						></td>
					)}
					{check.length > 1 && (
						<td
							className={
								check.filter(e => e.index === 1 && e.time === 'Afternoon')
									.length > 0 && 'border-4 border-white bg-green-400'
							}
						></td>
					)}
					{check.length > 2 && (
						<td
							className={
								check.filter(e => e.index === 2 && e.time === 'Afternoon')
									.length > 0 && 'border-4 border-white bg-green-400'
							}
						></td>
					)}
					{check.length > 3 && (
						<td
							className={
								check.filter(e => e.index === 3 && e.time === 'Afternoon')
									.length > 0 && 'border-4 border-white bg-green-400'
							}
						></td>
					)}
					{check.length > 4 && (
						<td
							className={
								check.filter(e => e.index === 4 && e.time === 'Afternoon')
									.length > 0 && 'border-4 border-white bg-green-400'
							}
						></td>
					)}
					{check.length > 5 && (
						<td
							className={
								check.filter(e => e.index === 5 && e.time === 'Afternoon')
									.length > 0 && 'border-4 border-white bg-green-400'
							}
						></td>
					)}
					{check.length > 6 && (
						<td
							className={
								check.filter(e => e.index === 6 && e.time === 'Afternoon')
									.length > 0 && 'border-4 border-white bg-green-400'
							}
						></td>
					)}
				</tr>
				<tr className="border-2 border-white">
					<td className="border-2 border-white text-sm text-[#6F757B] py-2 text-center">
						Evening <br /> 18:00 - 24:00
					</td>
					{tutor.schedule.map((counter, index) => (
						<AvailabilityCheck
							key={index}
							tutor={tutor}
							index={index}
							start={18}
							end={24}
							setCheck={setCheck}
							check={check}
							time={'Evening'}
						/>
					))}
					{check.length > 0 && (
						<td
							className={
								check.filter(e => e.index === 0 && e.time === 'Evening')
									.length > 0 && 'border-4 border-white bg-green-400'
							}
						></td>
					)}
					{check.length > 1 && (
						<td
							className={
								check.filter(e => e.index === 1 && e.time === 'Evening')
									.length > 0 && 'border-4 border-white bg-green-400'
							}
						></td>
					)}
					{check.length > 2 && (
						<td
							className={
								check.filter(e => e.index === 2 && e.time === 'Evening')
									.length > 0 && 'border-4 border-white bg-green-400'
							}
						></td>
					)}
					{check.length > 3 && (
						<td
							className={
								check.filter(e => e.index === 3 && e.time === 'Evening')
									.length > 0 && 'border-4 border-white bg-green-400'
							}
						></td>
					)}
					{check.length > 4 && (
						<td
							className={
								check.filter(e => e.index === 4 && e.time === 'Evening')
									.length > 0 && 'border-4 border-white bg-green-400'
							}
						></td>
					)}
					{check.length > 5 && (
						<td
							className={
								check.filter(e => e.index === 5 && e.time === 'Evening')
									.length > 0 && 'border-4 border-white bg-green-400'
							}
						></td>
					)}
					{check.length > 6 && (
						<td
							className={
								check.filter(e => e.index === 6 && e.time === 'Evening')
									.length > 0 && 'border-4 border-white bg-green-400'
							}
						></td>
					)}
				</tr>
				<tr className="border-2 border-white">
					<td className="border-2 border-white text-sm text-[#6F757B] py-2 text-center">
						Night <br /> 00:00 - 06:00
					</td>
					{tutor.schedule.map((counter, index) => (
						<AvailabilityCheck
							key={index}
							tutor={tutor}
							index={index}
							start={24}
							end={6}
							setCheck={setCheck}
							check={check}
							time={'Night'}
						/>
					))}
					{check.length > 0 && (
						<td
							className={
								check.filter(e => e.index === 0 && e.time === 'Night').length >
								0 && 'border-4 border-white bg-green-400'
							}
						></td>
					)}
					{check.length > 1 && (
						<td
							className={
								check.filter(e => e.index === 1 && e.time === 'Night').length >
								0 && 'border-4 border-white bg-green-400'
							}
						></td>
					)}
					{check.length > 2 && (
						<td
							className={
								check.filter(e => e.index === 2 && e.time === 'Night').length >
								0 && 'border-4 border-white bg-green-400'
							}
						></td>
					)}
					{check.length > 3 && (
						<td
							className={
								check.filter(e => e.index === 3 && e.time === 'Night').length >
								0 && 'border-4 border-white bg-green-400'
							}
						></td>
					)}
					{check.length > 4 && (
						<td
							className={
								check.filter(e => e.index === 4 && e.time === 'Night').length >
								0 && 'border-4 border-white bg-green-400'
							}
						></td>
					)}
					{check.length > 5 && (
						<td
							className={
								check.filter(e => e.index === 5 && e.time === 'Night').length >
								0 && 'border-4 border-white bg-green-400'
							}
						></td>
					)}
					{check.length > 6 && (
						<td
							className={
								check.filter(e => e.index === 6 && e.time === 'Night').length >
								0 && 'border-4 border-white bg-green-400'
							}
						></td>
					)}
				</tr>
			</table>
		</div>
	);
};

export default AvailabilityGrid;
