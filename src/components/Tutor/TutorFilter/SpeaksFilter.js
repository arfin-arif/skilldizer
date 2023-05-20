import React from 'react';
import { useState } from 'react';
import { BsChatDots } from 'react-icons/bs';
import { IoIosClose } from 'react-icons/io';
import LanguageList from '../../data/LanguageList.json';

const SpeaksFilter = ({ speak, setSpeak }) => {
	return (
		<div className="relative dropdown">
			<div className="select_input cursor-pointer rounded-full px-4 max-w-fit space-x-1 flex items-center">
				<BsChatDots />
				<div className="flex items-center justify-between ">
					{speak.length > 0 ? (
						speak.map(value => (
							<>
								<p key={value}>{value}</p>
								<span
									onClick={() => setSpeak(speak.filter(elm => elm !== value))}
									className="rounded-full ml-2 mr-2 p-1 cursor-pointer bg-slate-100"
								>
									<IoIosClose />
								</span>
							</>
						))
					) : (
						<p>Speaks</p>
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
					<p>Native speaker</p>
					{LanguageList.map(({ code, name }) => (
						<p key={code} onClick={() => setSpeak([...speak, name])}>
							{name}
						</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default SpeaksFilter;
