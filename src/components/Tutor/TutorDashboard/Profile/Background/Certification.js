import React, { useState } from 'react';
import Subject from './Subject';
import { RiArrowDownSLine } from 'react-icons/ri';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';
const generateYearOptions = () => {
	const arr = [];

	const startYear = 1950;
	const endYear = new Date().getFullYear();

	for (let i = endYear; i >= startYear; i--) {
		arr.push(<option value={i}>{i}</option>);
	}

	return arr;
};
const Certification = ({ index, removeCertification }) => {
	const [fromValue, setFromValue] = useState(null);
	const [toValue, setToValue] = useState(null);
	const [degrees, setDegrees] = useState({
		institution: '',
		degree: '',
		degreeType: '',
		from: '',
		to: '',
	});
	const handleFromChange = e => {
		setFromValue(e.target.value);
	};
	const handleToChange = e => {
		setToValue(e.target.value);
	};

	const handleDegreeFormChange = (index, event) => {
		let data = [...degrees];
		data[index][event.target.name] = event.target.value;
		setDegrees(data);
	};

	let iconStyles = { color: '#7A7A7A', fontSize: '1.5em' };
	const style = { color: '#00C013' };

	return (
		<div className="bg-white py-6 px-10 mt-5">
			<div className="flex justify-between">
				<h3 className="main-heading">Teaching Certification</h3>
				{index > 0 && (
					<RxCross2
						size={26}
						onClick={removeCertification}
						className="cursor-pointer"
					/>
				)}
			</div>
			<div className="pt-6 flex flex-col gap-8">
				<span>
					<Subject label={'Subject'} />
				</span>
				<span>
					<Subject label={'Certificate'} />
				</span>
				<span className="flex flex-col">
					<label htmlFor="description" className="font-[400] text-[16px] ">
						Description
					</label>

					<input
						className="mt-3 placeholder:text-[#7A7A7A] text-[#7A7A7A] border-2 h-[2.5rem] pl-2 w-[374px] bg-[#f3f3f3]"
						placeholder="General Translation"
					/>
				</span>
				<span className="flex flex-col">
					<label htmlFor="description" className="font-[400] text-[16px] ">
						Issued By
					</label>

					<input
						className="mt-3 placeholder:text-[#7A7A7A] text-[#7A7A7A] border-2 h-[2.5rem] pl-2 w-[374px] bg-[#f3f3f3]"
						placeholder="Al-Yarmouk University"
					/>
				</span>
				<div className="flex flex-col">
					<label htmlFor="description" className="font-[400] text-[16px] ">
						Year of Study
					</label>
					<span className="flex gap-12 relative">
						<select
							className="mt-3 placeholder:text-[#7A7A7A] border-[#E5E7EB] text-[#7A7A7A] border-2 h-[2.5rem] pl-2 w-[166px] bg-[#f3f3f3]"
							// onChange={event => handleDegreeFormChange(i event)}
							value={fromValue}
							onChange={handleFromChange}
						>
							<option value="" disabled selected>
								From
							</option>

							{generateYearOptions()}
						</select>
						<div className="border border-b absolute  w-[29px] border-black left-[11rem] bottom-[1.2rem]"></div>
						<select
							className="mt-3 placeholder:text-[#7A7A7A] border-[#E5E7EB] text-[#7A7A7A] border-2 h-[2.5rem] pl-2 w-[166px] bg-[#f3f3f3]"
							// onChange={event => handleDegreeFormChange( event)}
							onChange={handleToChange}
							value={toValue}
						>
							<option value="" disabled selected>
								To
							</option>

							{generateYearOptions()}
						</select>
					</span>

					<div className="bg-[#F7F7F7] py-6 px-8 flex gap-4 mt-8">
						<span className="mt-1">
							<AiOutlineCheckCircle style={style} size={24} />
						</span>
						<span>
							<h3 className="font-[400] text-[20px]">
								You passed verification
							</h3>
							<p className="font-[400] text-[16px] text-[#454B45] ">
								See a green verification badge on your tutor profile
							</p>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Certification;
