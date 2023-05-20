import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import React from 'react';

const MobileStepper = ({ activeStep }) => {
	const steps = [
		'Personal Information',
		'Profile Image',
		'Education & Experience',
		'Introduction Video',
		'Schedule & Pricing',
		'Success',
	];
	return (
		<div className="mt-8 flex flex-col justify-center items-center md:hidden">
			<Stepper activeStep={activeStep} orientation="vertical">
				{steps.map((label, index) => (
					<Step
						key={index}
						active={activeStep === index ? true : false}
						completed={activeStep >= index ? true : false}
					>
						<StepLabel>{label}</StepLabel>
					</Step>
				))}
			</Stepper>
		</div>
	);
};

export default MobileStepper;
