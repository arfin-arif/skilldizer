import React from 'react';
import DotLoader from 'react-spinners/DotLoader';

const Loader = () => {
	return (
		<div className="flex flex-col justify-center items-center">
			<DotLoader color="#FF5A00" />
		</div>
	);
};

export default Loader;
