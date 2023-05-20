import React from 'react';
import { useMemo } from 'react';
import { useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { IoIosClose } from 'react-icons/io';
import countryList from 'react-select-country-list';

const FromFilter = ({ from, setFrom }) => {
	const options = useMemo(() => countryList().getData(), []);

	return (
		<div className="relative dropdown">
			<div className="select_input cursor-pointer rounded-full px-4 space-x-1 flex items-center">
				<CiLocationOn />
				<div className="flex items-center justify-between ">
					<p>{from}</p>
					{from !== 'From' && (
						<span
							onClick={() => setFrom('From')}
							className="rounded-full ml-2 p-1 cursor-pointer bg-slate-100"
						>
							<IoIosClose />
						</span>
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
			<div className="opacity-0 max-h-[300px] overflow-y-auto py-5 px-7 cursor-auto absolute rounded-lg shadow-md min-w-[200px] left-0 outline-none border border-gray-200 divide-y divide-gray-100 bg-white top-[50px] invisible dropdown-menu transition-all duration-300 transform origin-top -translate-y-2 scale-95">
				<div className="space-y-5 menu_p nav_menu_link text-[#515164]">
					{options.map(({ value, label }) => (
						<p key={label} onClick={() => setFrom(label)}>
							{label}
						</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default FromFilter;
