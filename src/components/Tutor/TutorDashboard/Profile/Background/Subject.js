import React, { useState } from 'react';
import TutorSubjectList from '../../../../data/TutorSubjectList.json';
import { RiArrowDownSLine } from 'react-icons/ri';

const Subject = ({ label }) => {
	const [toggleFilter, setToggleFilter] = useState(false);
	const [placeholder, setPlaceHolder] = useState('');

	let iconStyles = { color: '#7A7A7A', fontSize: '1.5em' };
	return (
		<>
			<label htmlFor="subject" className="font-[400] text-[16px] ">
				{label}
			</label>
			<div
				className="group relative mt-3"
				onClick={() => setToggleFilter(!toggleFilter)}
			>
				<input
					className={
						placeholder
							? 'placeholder:text-[#7A7A7A] border-2 h-[2.5rem] pl-2 w-[374px] bg-[#f3f3f3]'
							: 'border-2 h-[2.5rem] pl-2 w-[374px] bg-[#f3f3f3]'
					}
					placeholder={placeholder ? placeholder : 'Select Subject'}
				/>

				<div className="absolute top-2 left-[21rem]">
					<RiArrowDownSLine style={iconStyles} />
				</div>
				<div
					className={
						toggleFilter
							? 'flex flex-col px-2 py-2 overflow-y-auto max-h-[300px] bg-[white] rounded-lg shadow-lg'
							: 'hidden'
					}
				>
					{TutorSubjectList.map(({ code, name }) => (
						<p
							key={code}
							className="hover:text-[#FF5A00] py-1"
							onClick={() => setPlaceHolder(name)}
						>
							{name}
						</p>
					))}
				</div>
			</div>
		</>
	);
};

export default Subject;
