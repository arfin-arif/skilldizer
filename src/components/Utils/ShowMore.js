import React, { useState } from 'react';

const ShowMore = ({ text }) => {
	const [showMore, setShowMore] = useState(false);

	function truncateString(str, maxLength) {
		if (str.length <= maxLength) {
			return str;
		}
		const lastSpaceIndex = str.slice(0, maxLength).lastIndexOf(" ");
		if (lastSpaceIndex === -1) {
			return str.slice(0, maxLength) + "...";
		}
		return str.slice(0, lastSpaceIndex) + "...";
	}

	return (
		<div>
			<h6>
				{showMore ? text : `${truncateString(text, 150)}`}
				<br className='mt-2' />
				<button
					className="text-[#FF5A00]"
					onClick={() => setShowMore(!showMore)}
				>
					{showMore ? 'Show less' : 'Show more'}
				</button>
			</h6>
		</div>
	);
};

export default ShowMore;
