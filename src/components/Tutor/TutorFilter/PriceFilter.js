import { Slider } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import { IoPricetagOutline } from 'react-icons/io5';

function valuetext(value) {
	return `${value}°C`;
}

const PriceFilter = ({ price, setPrice }) => {
	const minDistance = 5;
	const handleChange1 = (event, newValue, activeThumb) => {
		if (!Array.isArray(newValue)) {
			return;
		}

		if (activeThumb === 0) {
			setPrice([Math.min(newValue[0], price[1] - minDistance), price[1]]);
		} else {
			setPrice([price[0], Math.max(newValue[1], price[0] + minDistance)]);
		}
	};

	return (
		<div className="relative dropdown">
			<div className="select_input cursor-pointer rounded-full px-4 space-x-1 flex items-center">
				<IoPricetagOutline />
				<div className="flex items-center justify-between ">
					<p>
						{price[0] === 0 && price[1] === 80
							? 'Price'
							: `$${price[0]} - ${price[1]}`}
					</p>
					{(price[0] !== 0 || price[1] !== 80) && (
						<span
							onClick={() => setPrice([0, 80])}
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
				<div className="w-[250px]">
					<Slider
						value={price}
						onChange={handleChange1}
						valueLabelDisplay="auto"
						getAriaValueText={valuetext}
						disableSwap
						max={80}
					/>
					<h2 className="mt-3 text-center font-semibold text-xl tracking-wider text-gray-900">
						${price[0]} - {price[1]}
					</h2>
				</div>
			</div>
		</div>
	);
};

export default PriceFilter;
