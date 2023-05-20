import React, { useState, useEffect, useRef } from 'react';

const Row = ({ booking, start, end, time, count }) => {
	console.log(booking.startTime, booking.endTime, count);
	return (
		<tr className="h-12  text-center border border-[#DDDDDD]">
			<td className="w-20">{time}</td>

			<td
				className={
					start >= booking.startTime.split(':')[0] &&
					end <= booking.endTime.split(':')[0] &&
					count
						? ' bg-[#FFE598] border border-[#DDDDDD] w-24 text-white'
						: ' border border-[#DDDDDD] w-24'
				}
			></td>

			{/* //* Second Column */}
			<td
				className={
					start >= booking.startTime.split(':')[0] &&
					end <= booking.endTime.split(':')[0]
						? ' bg-[#FFE598] border border-[#DDDDDD] w-24 text-white'
						: ' border border-[#DDDDDD] w-24'
				}
			></td>

			{/* //* Third Column */}
			<td
				className={
					start >= booking.startTime.split(':')[0] &&
					end <= booking.endTime.split(':')[0]
						? ' bg-[#FFE598] border border-[#DDDDDD] w-24 text-white'
						: ' border border-[#DDDDDD] w-24'
				}
			></td>

			{/* //* Fourth Column */}
			<td
				className={
					start >= booking.startTime.split(':')[0] &&
					end <= booking.endTime.split(':')[0]
						? ' bg-[#FFE598] border border-[#DDDDDD] w-24 text-white'
						: ' border border-[#DDDDDD] w-24'
				}
			></td>

			{/* //* Fifth Column */}
			<td
				className={
					start >= booking.startTime.split(':')[0] &&
					end <= booking.endTime.split(':')[0]
						? ' bg-[#FFE598] border border-[#DDDDDD] w-24 text-white'
						: ' border border-[#DDDDDD] w-24'
				}
			></td>

			{/* //* Sixth Column */}
			<td
				className={
					start >= booking.startTime.split(':')[0] &&
					end <= booking.endTime.split(':')[0]
						? ' bg-[#FFE598] border border-[#DDDDDD] w-24 text-white'
						: ' border border-[#DDDDDD] w-24'
				}
			></td>

			{/* //* Seventh Column */}
			<td
				className={
					start >= booking.startTime.split(':')[0] &&
					end <= booking.endTime.split(':')[0]
						? ' bg-[#FFE598] border border-[#DDDDDD] w-24 text-white'
						: ' border border-[#DDDDDD] w-24'
				}
			></td>
		</tr>
	);
};

export default Row;
