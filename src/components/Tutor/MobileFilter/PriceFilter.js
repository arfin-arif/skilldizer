import React from 'react';
import { Slider } from '@mui/material';

const PriceFilter = props => {
	const { price, setPrice } = props;
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
	const minDistance = 5;

	function valuetext(value) {
		return `${value}°C`;
	}

	return (
		<div className="mx-4 my-3">
			<h2 className="uppercase font-semibold">Price</h2>
			<Slider
				value={price}
				onChange={handleChange1}
				valueLabelDisplay="auto"
				getAriaValueText={valuetext}
				disableSwap
				max={80}
			/>
		</div>
	);
};

export default PriceFilter;
