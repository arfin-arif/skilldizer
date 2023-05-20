import React, { useState, useMemo } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';

function CountrySelector() {
	const [value, setValue] = useState('');
	const options = useMemo(() => countryList().getData(), []);

	const changeHandler = value => {
		setValue(value);
	};

	return (
		<div className="mx-4 my-3">
			<h2 className="font-semibold">From</h2>
			<Select
				options={options}
				value={value}
				onChange={changeHandler}
				styles={{
					control: (baseStyles, state) => ({
						...baseStyles,
						borderColor: state.isFocused ? '#FF5A00' : '#ccc',
						borderRadius: '100px',
					}),
				}}
			/>
		</div>
	);
}

export default CountrySelector;
