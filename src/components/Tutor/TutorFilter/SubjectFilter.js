import React from 'react';
import { useState } from 'react';
import { MdLanguage } from 'react-icons/md';
import TutorSubjectList from '../../data/TutorSubjectList.json';

const SubjectFilter = ({
	subjectTuition: subjectTuition,
	setSubjectTuition: setSubjectTuition,
}) => {
	return (
		<div className="relative dropdown">
			<div className="select_input cursor-pointer rounded-full px-4 space-x-1 flex items-center">
				<MdLanguage />
				<div className="flex items-center justify-between ">
					<p>{subjectTuition}</p>
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
					{TutorSubjectList.map(({ name, code }, index) => (
						<p key={index} onClick={() => setSubjectTuition(name)}>
							{name}
						</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default SubjectFilter;
