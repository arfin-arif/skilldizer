import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import React from 'react';

const StepComponent = ({ activeStep }) => {
	const steps = [
		'Personal Information',
		'Profile Image',
		'Education & Experience',
		'Introduction Video',
		'Schedule & Pricing',
		'Success',
	];
	return (
		<div className="max-w-5xl mt-8 mx-auto hidden md:block">
			<Stepper activeStep={activeStep} alternativeLabel>
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

export default StepComponent;
