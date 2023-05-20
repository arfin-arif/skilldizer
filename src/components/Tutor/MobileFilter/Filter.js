import React, { useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';

const Filter = props => {
	const { title, data } = props;
	const [toggleFilter, setToggleFilter] = useState(false);
	const [placeholder, setPlaceHolder] = useState('');
	let iconStyles = { color: '#CCCCCC', fontSize: '1.5em' };

	return (
		<div className="mx-4 my-3">
			<h2 className="font-semibold">{title}</h2>
			<div
				className="group relative max-w-full"
				onClick={() => setToggleFilter(!toggleFilter)}
			>
				<input
					className={
						placeholder
							? 'placeholder:text-[#333] border-2 w-full h-[2.5rem] pl-2 rounded-full'
							: 'border-2 w-full h-[2.5rem] pl-2 rounded-full'
					}
					placeholder={placeholder ? placeholder : 'Select...'}
				/>
				<div className="absolute top-2 right-8">
					<div className="text-[#ccc] font-normal">|</div>
				</div>
				<div className="absolute top-2 right-1">
					<RiArrowDownSLine style={iconStyles} />
				</div>
				<div
					className={
						toggleFilter
							? 'flex flex-col px-2 py-2 overflow-y-auto max-h-[300px] bg-[white] rounded-lg shadow-lg'
							: 'hidden'
					}
				>
					{data.map(({ code, name }) => (
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
		</div>
	);
};

export default Filter;
