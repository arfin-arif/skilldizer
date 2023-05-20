import React, { useState } from 'react';

const DayAvailability = () => {
	const [day1Toggle, setDay1Toggle] = useState(false);
	const [day2Toggle, setDay2Toggle] = useState(false);
	const [day3Toggle, setDay3Toggle] = useState(false);
	const [day4Toggle, setDay4Toggle] = useState(false);
	const [day5Toggle, setDay5Toggle] = useState(false);
	const [day6Toggle, setDay6Toggle] = useState(false);
	const [day7Toggle, setDay7Toggle] = useState(false);

	return (
		<div className="mx-4 my-3">
			<h2 className="mt-3">Days of the week</h2>
			<div className="grid grid-cols-7 border align-middle justify-center">
				<h3
					onClick={() => setDay1Toggle(!day1Toggle)}
					className={
						day1Toggle
							? 'border-r-2 px-2 py-2 bg-[#FF5A00] text-white'
							: 'border-r-2 px-2 py-2'
					}
				>
					Mon
				</h3>
				<h3
					onClick={() => setDay2Toggle(!day2Toggle)}
					className={
						day2Toggle
							? 'border-r-2 px-2 py-2 bg-[#FF5A00] text-white'
							: 'border-r-2 px-2 py-2'
					}
				>
					Tue
				</h3>
				<h3
					onClick={() => setDay3Toggle(!day3Toggle)}
					className={
						day3Toggle
							? 'border-r-2 px-2 py-2 bg-[#FF5A00] text-white'
							: 'border-r-2 px-2 py-2'
					}
				>
					Wed
				</h3>
				<h3
					onClick={() => setDay4Toggle(!day4Toggle)}
					className={
						day4Toggle
							? 'border-r-2 px-2 py-2 bg-[#FF5A00] text-white'
							: 'border-r-2 px-2 py-2'
					}
				>
					Thu
				</h3>
				<h3
					onClick={() => setDay5Toggle(!day5Toggle)}
					className={
						day5Toggle
							? 'border-r-2 px-2 py-2 bg-[#FF5A00] text-white'
							: 'border-r-2 px-2 py-2'
					}
				>
					Fri
				</h3>
				<h3
					onClick={() => setDay6Toggle(!day6Toggle)}
					className={
						day6Toggle
							? 'border-r-2 px-2 py-2 bg-[#FF5A00] text-white'
							: 'border-r-2 px-2 py-2'
					}
				>
					Sat
				</h3>
				<h3
					onClick={() => setDay7Toggle(!day7Toggle)}
					className={
						day7Toggle
							? 'border-r-2 px-2 py-2 bg-[#FF5A00] text-white'
							: 'border-r-2 px-2 py-2'
					}
				>
					Sun
				</h3>
			</div>
		</div>
	);
};

export default DayAvailability;
