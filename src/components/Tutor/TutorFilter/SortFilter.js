import React from 'react';
import { useState } from 'react';
import { BsSortDownAlt } from 'react-icons/bs';
import { IoIosClose } from 'react-icons/io';

const SortFilter = ({ sort, setSort }) => {
	return (
		<div className="relative dropdown">
			<div className="select_input cursor-pointer rounded-full px-4 space-x-1 flex items-center">
				<BsSortDownAlt />
				<div className="flex items-center justify-between ">
					<p>{sort.label}</p>
					{sort.value && (
						<span
							onClick={() => setSort({ value: '', label: 'Sort by' })}
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
			<div className="opacity-0  py-5 px-7 cursor-auto absolute rounded-lg shadow-md min-w-[200px] left-0 outline-none border border-gray-200 divide-y divide-gray-100 bg-white top-[50px] invisible dropdown-menu transition-all duration-300 transform origin-top -translate-y-2 scale-95">
				<div className="space-y-5 menu_p nav_menu_link text-[#515164]">
					<p
						onClick={() =>
							setSort({ value: 'LowToHigh', label: 'Price Low-High' })
						}
					>
						Price Low-High
					</p>
					<p
						onClick={() =>
							setSort({ value: 'HighToLow', label: 'Price High-Low' })
						}
					>
						Price High-Low
					</p>
					<p
						onClick={() =>
							setSort({
								value: 'numberOfReviews',
								label: 'Number of reviews',
							})
						}
					>
						Number of reviews
					</p>
					<p onClick={() => setSort({ value: 'rating', label: 'Top rating' })}>
						Top rating
					</p>
				</div>
			</div>
		</div>
	);
};

export default SortFilter;
