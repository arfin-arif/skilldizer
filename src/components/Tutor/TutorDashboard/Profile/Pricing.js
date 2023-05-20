// import { Slider } from '@mui/material';
import Slider from '@mui/material/Slider';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { updateTutorPrice } from '../../../../store/actions/tutorAction';
import { useDispatch, useSelector } from 'react-redux';
import {
	clearError,
	clearSuccess,
} from '../../../../store/reducer/tutorReducer';
import { openAlert } from '../../../../store/reducer/alertReducer';
function valuetext(value) {
	return `${value}°C`;
}

const Pricing = () => {
	const dispatch = useDispatch();

	const { error, message } = useSelector(state => state.tutor);
	const [price, setPrice] = useState(0);
	const minDistance = 5;
	const handleChange1 = (event, newValue, activeThumb) => {
		if (typeof newValue === 'number') {
			setPrice(newValue);
		  }
	  
	};

	const CustomSliderStyles = {
		'& .MuiSlider-thumb': {
			color: '#FF5A00',
		},
		'& .MuiSlider-track': {
			color: '#808080',
		},
		'& .MuiSlider-rail': {
			color: '#FF5A09',
		},
		'& .MuiSlider-active': {
			color: '#FF5A00',
		},
	};

	const handleSubmit = () => {
		dispatch(updateTutorPrice(price));
	};

	useEffect(() => {
		if (error) {
			dispatch(openAlert({ severity: 'error', message: error }));
			dispatch(clearError());
			return;
		}

		if (message) {
			dispatch(openAlert({ severity: 'success', message: message }));
			dispatch(clearSuccess());
		}
	}, [error, message, dispatch]);

	const style = { color: '#00C013' };

	return (
		<section className="pb-20 bg-white my-10 ml-10 mr-20 pt-8  flex flex-col justify-center items-center">
			<div>
				<h1 className="text-[400] text-[28px]">Set your hourly base rate</h1>
				<h3 className="text-[500] text-[14px] text-[#808080]">
					Customize your Income according to your hourly rate
				</h3>
			</div>
			<div className="py-5 px-7 mt-4 relative">
				<h3 className="text-[400] text-[14px]">Choose your hourly base rate</h3>
				<div className="w-[35rem]">
					<Slider
						value={price}
						onChange={handleChange1}
						valueLabelDisplay="auto"
						getAriaValueText={valuetext}
						disableSwap
						className="text-[#FF5A00]"
						sx={CustomSliderStyles}
						max={80}
						onMouseUp={handleSubmit}
					/>
				</div>
				<div className="bg-[#F7F7F7] flex w-[15rem] gap-2 absolute right-10 px-4 py-1">
					<span>
						<AiOutlineInfoCircle style={style} size={20} />
					</span>
					<h3 className="text-[700] text-[12px] text-[#808080]">
						Change your base rate in settings after approval
					</h3>
				</div>
			</div>
		</section>
	);
};

export default Pricing;
