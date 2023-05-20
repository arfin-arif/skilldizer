import React, { useState } from 'react';

// * Icons
import { BsSearch } from 'react-icons/bs';
import { FiFilter } from 'react-icons/fi';
import { RiArrowRightSLine } from 'react-icons/ri';

import MobileFilterDialog from './Dialog';

const MobileFilter = props => {
	const [mobileToggle, setMobileToggle] = useState(false);

	function handleClick() {
		setMobileToggle(false);
	}

	return (
		<>
			<div className="lg:hidden flex mx-3 justify-between gap-x-1 max-w-max">
				<div className="relative flex flex-3">
					<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
						<BsSearch className="text-[#FF5A00]" />
					</div>
					<input
						className="select_input pl-10"
						placeholder="Name/Course/Interests"
					/>
				</div>
				<div
					className="relative flex flex-1 "
					onClick={() => setMobileToggle(!mobileToggle)}
				>
					<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
						<FiFilter className="text-[#FF5A00]" />
					</div>
					<button className="px-10 py-2 border-2 rounded-lg font-semibold">
						Filters
					</button>
					<div className="flex absolute inset-y-0 right-5 items-center pointer-events-none font-semibold">
						<RiArrowRightSLine />
					</div>
				</div>
			</div>

			{mobileToggle ? <MobileFilterDialog handleClick={handleClick} /> : ''}
		</>
	);
};

export default MobileFilter;
