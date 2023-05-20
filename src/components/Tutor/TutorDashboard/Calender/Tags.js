import React from 'react';

const Tags = () => {
	return (
		<>
			<h1 className="font-semibold text-[#292929] text-lg">Tags</h1>
			<div className="flex items-center gap-4 mt-4">
				<div className="border rounded-lg bg-[#FFE598] w-4 h-4"></div>
				<h2 className="text-[#6F757B]">First Class</h2>
			</div>
			<div className="flex items-center gap-4 mt-4">
				<div className="border rounded-lg bg-[#F6CAAC] w-4 h-4"></div>
				<h2 className="text-[#6F757B]">Single Class</h2>
			</div>
			<div className="flex items-center gap-4 mt-4">
				<div className="border rounded-lg bg-[#B4C6E8] w-4 h-4"></div>
				<h2 className="text-[#6F757B]">Weekly Class</h2>
			</div>
			<div className="flex items-center gap-4 mt-4">
				<div className="border rounded-lg bg-[#FEC0C9] w-4 h-4"></div>
				<h2 className="text-[#6F757B]">Time off</h2>
			</div>
			<div className="flex items-center gap-4 mt-4">
				<div className="border rounded-lg bg-[#C5E0B3] w-4 h-4"></div>
				<h2 className="text-[#6F757B]">Google calendar</h2>
			</div>
		</>
	);
};

export default Tags;
