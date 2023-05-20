import React, { useEffect } from 'react';
const AvailabilityCheck = ({
	tutor,
	index,
	start,
	end,
	setCheck,
	check,
	time,
}) => {
	console.log('re rendering availability check ');
	const availabilityCheck = (index, start, end) => {
		return tutor.schedule[index].availability.map(
			availability =>
				(availability.startTime > start && availability.startTime < end) ||
				(availability.endTime > start && availability.endTime < end)
		);
	};
	useEffect(() => {
		const availability = availabilityCheck(index, start, end);
		if (availability[0]) {
			setCheck(check => [...check, { index, time: time }]);
		}
	}, []);

	return (
		<></>
		// <>{checkTest && <tr className="border-2 border-white bg-green-400"></tr>}</>
	);
};

export default AvailabilityCheck;
