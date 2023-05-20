import React, { useState } from 'react';

const TimeAvailability = () => {
	const [time1Toggle, setTime1Toggle] = useState(false);
	const [time2Toggle, setTime2Toggle] = useState(false);
	const [time3Toggle, setTime3Toggle] = useState(false);
	const [time4Toggle, setTime4Toggle] = useState(false);
	const [time5Toggle, setTime5Toggle] = useState(false);
	const [time6Toggle, setTime6Toggle] = useState(false);

	return (
		<div className="mx-4 my-3">
			<h2 className="font-semibold">Availability</h2>
			<h2 className="mt-3">Time of the day</h2>
			<div className="grid grid-cols-3 border align-middle justify-center">
				<h3
					onClick={() => setTime1Toggle(!time1Toggle)}
					className={
						time1Toggle
							? 'border-r-2 px-8 py-2 bg-[#FF5A00] text-white'
							: 'border-r-2 px-8 py-2'
					}
				>
					00-04
				</h3>
				<h3
					onClick={() => setTime2Toggle(!time2Toggle)}
					className={
						time2Toggle
							? 'border-r-2 px-8 py-2 bg-[#FF5A00] text-white'
							: 'border-r-2 px-8 py-2'
					}
				>
					04-08
				</h3>
				<h3
					onClick={() => setTime3Toggle(!time3Toggle)}
					className={
						time3Toggle
							? 'border-r-2 px-8 py-2 bg-[#FF5A00] text-white'
							: 'border-r-2 px-8 py-2'
					}
				>
					08-12
				</h3>
			</div>
			<div className="grid grid-cols-3 border align-middle justify-center">
				<h3
					onClick={() => setTime4Toggle(!time4Toggle)}
					className={
						time4Toggle
							? 'border-r-2 px-8 py-2 bg-[#FF5A00] text-white'
							: 'border-r-2 px-8 py-2'
					}
				>
					12-16
				</h3>
				<h3
					onClick={() => setTime5Toggle(!time5Toggle)}
					className={
						time5Toggle
							? 'border-r-2 px-8 py-2 bg-[#FF5A00] text-white'
							: 'border-r-2 px-8 py-2'
					}
				>
					16-20
				</h3>
				<h3
					onClick={() => setTime6Toggle(!time6Toggle)}
					className={
						time6Toggle
							? 'border-r-2 px-8 py-2 bg-[#FF5A00] text-white'
							: 'border-r-2 px-8 py-2'
					}
				>
					20-00
				</h3>
			</div>
		</div>
	);
};

export default TimeAvailability;
