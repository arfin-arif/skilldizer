import React, { useState, useEffect, useRef } from 'react';

const Monday = ({ tutor, start, end, time, count }) => {
	const clickRef = useRef();
	const [firstColumn, SetFirstColumn] = useState(0);
	const [secondColumn, SetsecondColumn] = useState(0);
	const [thirdColumn, SetthirdColumn] = useState(0);
	const [fourthColumn, SetfourthColumn] = useState(0);
	const [fifthColumn, SetfifthColumn] = useState(0);
	const [sixthColumn, SetsixthColumn] = useState(0);
	const [seventhColumn, SetseventhColumn] = useState(0);
	const handleClick = count => {
		SetFirstColumn(count);
	};
	const handleSecondClick = count => {
		SetsecondColumn(count);
	};
	const handleThirdClick = count => {
		SetthirdColumn(count);
	};
	const handleFourthClick = count => {
		SetfourthColumn(count);
	};
	const handleFifthClick = count => {
		SetfifthColumn(count);
	};
	const handleSixthClick = count => {
		SetsixthColumn(count);
	};
	const handleSeventhClick = count => {
		SetseventhColumn(count);
	};

	return (
		<tr className="h-12 text-center border border-[#DDDDDD]">
			<td>{time}</td>

			<td
				onClick={() => handleClick(count + 50)}
				className={
					start >= tutor.schedule[0]?.availability[0].startTime &&
					end <= tutor.schedule[0]?.availability[0].endTime
						? ' bg-[#FF5A00] border border-[#DDDDDD] w-24 text-white'
						: firstColumn == count + 50
						? 'bg-[#3BB3BD] border border-[#DDDDDD] w-24 text-white'
						: ' border border-[#DDDDDD] w-24'
				}
			>
				{firstColumn == count + 50 && `${start}-${end}`}
				{start >= tutor.schedule[0]?.availability[0].startTime &&
					end <= tutor.schedule[0]?.availability[0].endTime &&
					`${start}-${end}`}
			</td>

			{/* //* Second Column */}
			<td
				onClick={() => handleSecondClick(count + 60)}
				className={
					start >= tutor.schedule[1]?.availability[0]?.startTime &&
					end <= tutor.schedule[1]?.availability[0]?.endTime
						? ' bg-[#FF5A00] border border-[#DDDDDD] w-24 text-white'
						: secondColumn == count + 60
						? 'bg-[#3BB3BD] border border-[#DDDDDD] w-24 text-white'
						: ' border border-[#DDDDDD] w-24'
				}
			>
				{secondColumn == count + 60 && `${start}-${end}`}
				{start >= tutor.schedule[1]?.availability[0].startTime &&
					end <= tutor.schedule[1]?.availability[0].endTime &&
					`${start}-${end}`}
			</td>

			{/* //* Third Column */}
			<td
				onClick={() => handleThirdClick(count + 70)}
				className={
					start >= tutor.schedule[2]?.availability[0]?.startTime &&
					end <= tutor.schedule[2]?.availability[0]?.endTime
						? ' bg-[#FF5A00] border border-[#DDDDDD] w-24 text-white'
						: thirdColumn == count + 70
						? 'bg-[#3BB3BD] border border-[#DDDDDD] w-24 text-white'
						: ' border border-[#DDDDDD] w-24'
				}
			>
				{thirdColumn == count + 70 && `${start}-${end}`}
				{start >= tutor.schedule[2]?.availability[0].startTime &&
					end <= tutor.schedule[2]?.availability[0].endTime &&
					`${start}-${end}`}
			</td>

			{/* //* Fourth Column */}
			<td
				onClick={() => handleFourthClick(count + 80)}
				className={
					start >= tutor.schedule[3]?.availability[0]?.startTime &&
					end <= tutor.schedule[3]?.availability[0]?.endTime
						? ' bg-[#FF5A00] border border-[#DDDDDD] w-24 text-white'
						: fourthColumn == count + 80
						? 'bg-[#3BB3BD] border border-[#DDDDDD] w-24 text-white'
						: ' border border-[#DDDDDD] w-24'
				}
			>
				{fourthColumn == count + 80 && `${start}-${end}`}
				{start >= tutor.schedule[3]?.availability[0].startTime &&
					end <= tutor.schedule[3]?.availability[0].endTime &&
					`${start}-${end}`}
			</td>

			{/* //* Fifth Column */}
			<td
				onClick={() => handleFifthClick(count + 90)}
				className={
					start >= tutor.schedule[4]?.availability[0]?.startTime &&
					end <= tutor.schedule[4]?.availability[0]?.endTime
						? ' bg-[#FF5A00] border border-[#DDDDDD] w-24 text-white'
						: fifthColumn == count + 90
						? 'bg-[#3BB3BD] border border-[#DDDDDD] w-24 text-white'
						: ' border border-[#DDDDDD] w-24'
				}
			>
				{fifthColumn == count + 90 && `${start}-${end}`}
				{start >= tutor.schedule[4]?.availability[0].startTime &&
					end <= tutor.schedule[4]?.availability[0].endTime &&
					`${start}-${end}`}
			</td>

			{/* //* Sixth Column */}
			<td
				onClick={() => handleSixthClick(count + 100)}
				className={
					start >= tutor.schedule[5]?.availability[0]?.startTime &&
					end <= tutor.schedule[5]?.availability[0]?.endTime
						? ' bg-[#FF5A00] border border-[#DDDDDD] w-24 text-white'
						: sixthColumn == count + 100
						? 'bg-[#3BB3BD] border border-[#DDDDDD] w-24 text-white'
						: ' border border-[#DDDDDD] w-24'
				}
			>
				{sixthColumn == count + 100 && `${start}-${end}`}
				{start >= tutor.schedule[5]?.availability[0].startTime &&
					end <= tutor.schedule[5]?.availability[0].endTime &&
					`${start}-${end}`}
			</td>

			{/* //* Seventh Column */}
			<td
				onClick={() => handleSeventhClick(count + 110)}
				className={
					start >= tutor.schedule[6]?.availability[0]?.startTime &&
					end <= tutor.schedule[6]?.availability[0]?.endTime
						? ' bg-[#FF5A00] border border-[#DDDDDD] w-24 text-white'
						: seventhColumn == count + 110
						? 'bg-[#3BB3BD] border border-[#DDDDDD] w-24 text-white'
						: ' border border-[#DDDDDD] w-24'
				}
			>
				{seventhColumn == count + 110 && `${start}-${end}`}
				{start >= tutor.schedule[6]?.availability[0].startTime &&
					end <= tutor.schedule[6]?.availability[0].endTime &&
					`${start}-${end}`}
			</td>
		</tr>
	);
};

export default Monday;
