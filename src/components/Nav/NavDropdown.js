import React, { useState } from 'react';
import router from 'next/router';
import Link from 'next/link';
import { BsBoxArrowRight } from 'react-icons/bs';
import { RiArrowRightSLine, RiArrowDownSLine } from 'react-icons/ri';

const NavDropdown = () => {
	const handleLink = subject => {
		router.push(`/tutors/subject=${subject}`);
	};

	const [subjectDropDown, setSubjectDropDown] = useState(true);
	const [businessDropDown, setBusinessDropDown] = useState(false);
	const [skillsDropDown, setSkillsDropDown] = useState(false);
	const [othersDropDown, setOthersDropDown] = useState(false);

	// closing dropdown logic
	const handleDropDowns = dropDown => {
		if (dropDown === 'subject') {
			setSubjectDropDown(!subjectDropDown);
			setBusinessDropDown(false);
			setSkillsDropDown(false);
			setOthersDropDown(false);
		}

		if (dropDown === 'business') {
			setBusinessDropDown(!businessDropDown);
			setSubjectDropDown(false);
			setSkillsDropDown(false);
			setOthersDropDown(false);
		}

		if (dropDown === 'skills') {
			setSkillsDropDown(!skillsDropDown);
			setSubjectDropDown(false);
			setBusinessDropDown(false);
			setOthersDropDown(false);
		}

		if (dropDown === 'others') {
			setOthersDropDown(!othersDropDown);
			setSubjectDropDown(false);
			setBusinessDropDown(false);
			setSkillsDropDown(false);
		}
	};
	return (
		<div className="opacity-0 py-7 cursor-pointer absolute rounded-md shadow-lg outline-none border border-gray-200 divide-y divide-gray-100  bg-white right-0 left-0 w-full top-[80px] invisible dropdown-menu transition-all duration-300 transform origin-top -translate-y-2 scale-95 px-5">
			<div
				className="max-w-[68rem] grid grid-cols-1 lg:grid-cols-4 mx-auto items-center justify-between"
				aria-labelledby="headlessui-menu-button-1"
				id="headlessui-menu-items-117"
				role="menu"
			>
				{/* Language Dropdown */}
				<div className="space-y-2 menu_p text-[#515164]">
					<h2
						onClick={() => handleDropDowns('subject')}
						className="flex text-[14px] md:text-[18px] text-[#313140] md:font-semibold mb-1 md:mb-3"
					>
						Language
						<span className="text-[#8b82c8] font-semibold py-1.5 md:hidden">
							{subjectDropDown ? <RiArrowDownSLine /> : <RiArrowRightSLine />}
						</span>
					</h2>
					<div
						className={
							subjectDropDown
								? 'flex text-[14px] md:text-[18px]'
								: 'hidden lg:flex'
						}
						onClick={() => handleLink('Arabic')}
					>
						<span className="text-[#8b82c8] py-1">
							<RiArrowRightSLine />
						</span>
						Arabic
					</div>
					<div
						className={
							subjectDropDown
								? 'flex text-[14px] md:text-[18px]'
								: 'hidden  lg:flex'
						}
						onClick={() => handleLink('English')}
					>
						<span className="text-[#8b82c8] py-1">
							<RiArrowRightSLine />
						</span>
						English
					</div>
					<div
						className={
							subjectDropDown
								? 'flex text-[14px] md:text-[18px]'
								: 'hidden  lg:flex'
						}
						onClick={() => handleLink('French')}
					>
						<span className="text-[#8b82c8] py-1">
							<RiArrowRightSLine />
						</span>
						French
					</div>
					<div
						className={
							subjectDropDown
								? 'flex text-[14px] md:text-[18px]'
								: 'hidden  lg:flex'
						}
						onClick={() => handleLink('German')}
					>
						<span
							className={
								subjectDropDown ? 'py-1 text-[#8b82c8]' : 'text-[#8b82c8]'
							}
						>
							<RiArrowRightSLine />
						</span>
						German
					</div>
					<div
						className={
							subjectDropDown
								? 'flex text-[14px] md:text-[18px]'
								: 'hidden  lg:flex'
						}
						onClick={() => handleLink('Chinese')}
					>
						<span className="text-[#8b82c8] py-1">
							<RiArrowRightSLine />
						</span>
						Chinese
					</div>
					<div
						className={
							subjectDropDown
								? 'flex text-[14px] md:text-[18px]'
								: 'hidden  lg:flex'
						}
						onClick={() => handleLink('Arabic')}
					>
						<span className="text-[#8b82c8] py-1">
							<RiArrowRightSLine />
						</span>
						Italian
					</div>
				</div>

				{/* Business Dropdown */}
				<div className="space-y-2 menu_p text-[#515164]">
					<h2
						onClick={() => handleDropDowns('business')}
						className="flex text-[14px] md:text-[18px] text-[#313140] md:font-semibold mb-1 md:mb-3"
					>
						Business
						<span className="text-[#8b82c8] font-semibold py-1.5 md:hidden">
							{businessDropDown ? <RiArrowDownSLine /> : <RiArrowRightSLine />}
						</span>
					</h2>
					<div
						className={
							businessDropDown
								? 'flex text-[14px] md:text-[18px]'
								: 'hidden lg:flex'
						}
						onClick={() => handleLink('Business Modeling')}
					>
						<span className="text-[#8b82c8] py-1">
							<RiArrowRightSLine />
						</span>
						Business Modeling
					</div>
					<div
						className={
							businessDropDown
								? 'flex text-[14px] md:text-[18px]'
								: 'hidden  lg:flex'
						}
						onClick={() => handleLink('Product Management')}
					>
						<span className="text-[#8b82c8] py-1">
							<RiArrowRightSLine />
						</span>
						Product Management
					</div>
					<div
						className={
							businessDropDown
								? 'flex text-[14px] md:text-[18px]'
								: 'hidden  lg:flex'
						}
						onClick={() => handleLink('Email Marketing')}
					>
						<span className="text-[#8b82c8] py-1">
							<RiArrowRightSLine />
						</span>
						Email Marketing
					</div>
					<div
						className={
							businessDropDown
								? 'flex text-[14px] md:text-[18px]'
								: 'hidden  lg:flex'
						}
						onClick={() => handleLink('Copywriting')}
					>
						<span className="text-[#8b82c8] py-1">
							<RiArrowRightSLine />
						</span>
						Copywriting
					</div>
					<div
						className={
							businessDropDown
								? 'flex text-[14px] md:text-[18px]'
								: 'hidden  lg:flex'
						}
						onClick={() => handleLink('Content Marketing')}
					>
						<span className="text-[#8b82c8] py-1">
							<RiArrowRightSLine />
						</span>
						Content Marketing
					</div>
					<div
						className={
							businessDropDown
								? 'flex text-[14px] md:text-[18px]'
								: 'hidden  lg:flex'
						}
						onClick={() => handleLink('Business And Management')}
					>
						<span className="text-[#8b82c8] py-1">
							<RiArrowRightSLine />
						</span>
						Business And Management
					</div>
				</div>

				{/* Skills DropDown */}
				<div className="space-y-2 menu_p text-[#515164]">
					<h2
						onClick={() => handleDropDowns('skills')}
						className="flex text-[14px] md:text-[18px] text-[#313140] md:font-semibold mb-1 md:mb-3"
					>
						Skills
						<span className="text-[#8b82c8] font-semibold py-1.5 md:hidden">
							{skillsDropDown ? <RiArrowDownSLine /> : <RiArrowRightSLine />}
						</span>
					</h2>
					<div
						className={
							skillsDropDown
								? 'flex text-[14px] md:text-[18px]'
								: 'hidden lg:flex'
						}
						onClick={() => handleLink('Computer Science')}
					>
						<span className="text-[#8b82c8] py-1">
							<RiArrowRightSLine />
						</span>
						Computer Science
					</div>
					<div
						className={
							skillsDropDown
								? 'flex text-[14px] md:text-[18px]'
								: 'hidden  lg:flex'
						}
						onClick={() => handleLink('UI UX')}
					>
						<span className="text-[#8b82c8] py-1">
							<RiArrowRightSLine />
						</span>
						UI/UX
					</div>
					<div
						className={
							skillsDropDown
								? 'flex text-[14px] md:text-[18px]'
								: 'hidden  lg:flex'
						}
						onClick={() => handleLink('Web Development')}
					>
						<span className="text-[#8b82c8] py-1">
							<RiArrowRightSLine />
						</span>
						Web Development
					</div>
					<div
						className={
							skillsDropDown
								? 'flex text-[14px] md:text-[18px]'
								: 'hidden  lg:flex'
						}
						onClick={() => handleLink('Graphic Design')}
					>
						<span className="text-[#8b82c8] py-1">
							<RiArrowRightSLine />
						</span>
						Graphic Design
					</div>
					<div
						className={
							skillsDropDown
								? 'flex text-[14px] md:text-[18px]'
								: 'hidden  lg:flex'
						}
						onClick={() => handleLink('Android app Development')}
					>
						<span className="text-[#8b82c8] py-1">
							<RiArrowRightSLine />
						</span>
						Android app Development
					</div>
					<div
						className={
							skillsDropDown
								? 'flex text-[14px] md:text-[18px]'
								: 'hidden  lg:flex'
						}
						onClick={() => handleLink('Data Science')}
					>
						<span className="text-[#8b82c8] py-1">
							<RiArrowRightSLine />
						</span>
						Data Science
					</div>
				</div>

				{/* Others Menu */}
				<div className="space-y-2 menu_p text-[#515164]">
					<h2
						onClick={() => handleDropDowns('others')}
						className="flex text-[14px] md:text-[18px] text-[#313140] md:font-semibold mb-1 md:mb-3"
					>
						Others
						<span className="text-[#8b82c8] font-semibold py-1.5 md:hidden">
							{othersDropDown ? <RiArrowDownSLine /> : <RiArrowRightSLine />}
						</span>
					</h2>
					<div
						className={
							othersDropDown
								? 'flex text-[14px] md:text-[18px]'
								: 'hidden lg:flex'
						}
						onClick={() => handleLink('Cooking')}
					>
						<span className="text-[#8b82c8] py-1">
							<RiArrowRightSLine />
						</span>
						Cooking
					</div>
					<div
						className={
							othersDropDown
								? 'flex text-[14px] md:text-[18px]'
								: 'hidden  lg:flex'
						}
						onClick={() => handleLink('Psychology')}
					>
						<span className="text-[#8b82c8] py-1">
							<RiArrowRightSLine />
						</span>
						Psychology
					</div>
					<div
						className={
							othersDropDown
								? 'flex text-[14px] md:text-[18px]'
								: 'hidden  lg:flex'
						}
						onClick={() => handleLink('Fitness')}
					>
						<span className="text-[#8b82c8] py-1">
							<RiArrowRightSLine />
						</span>
						Fitness
					</div>
					<div
						className={
							othersDropDown
								? 'flex text-[14px] md:text-[18px]'
								: 'hidden  lg:flex'
						}
						onClick={() => handleLink('Music')}
					>
						<span className="text-[#8b82c8] py-1">
							<RiArrowRightSLine />
						</span>
						Music
					</div>
					<div
						className={
							othersDropDown
								? 'flex text-[14px] md:text-[18px]'
								: 'hidden  lg:flex'
						}
						onClick={() => handleLink('Chess')}
					>
						<span className="text-[#8b82c8] py-1">
							<RiArrowRightSLine />
						</span>
						Chess
					</div>
					<div
						className={
							othersDropDown
								? 'flex text-[14px] md:text-[18px]'
								: 'hidden  lg:flex'
						}
						onClick={() => handleLink('Data Science')}
					>
						<span className="text-[#8b82c8] py-1">
							<RiArrowRightSLine />
						</span>
						Data Science
					</div>
					<p className="flex text-[#4285F4] items-center space-x-2">
						<Link href="/tutors">
							<span>All Subjects</span>
						</Link>
						<span className="text-[#4285F4] text-xl">
							<BsBoxArrowRight />
						</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default NavDropdown;
