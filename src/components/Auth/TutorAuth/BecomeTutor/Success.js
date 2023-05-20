import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import StepComponent from '../../../Utils/Step';
import router from 'next/router';
import MobileStepper from '../../../Utils/MobileStepper';

const Success = () => {
	const handleClick = () => {
		router.push('/');
	};
	return (
		<section style={{ minHeight: 'calc(100vh - 80px)' }} className="">
			<StepComponent activeStep={5} />
			<MobileStepper activeStep={5} />
			<div className="grid place-items-center mt-20">
				<div className="rounded-lg p-10 bg-slate-100 min-w-[350px] shadow-sm grid place-items-center">
					<span className="text-white rounded-full p-4 text-5xl bg-green-500">
						<AiOutlineCheck />
					</span>
					<h3 className="text-green-500 text-3xl font-semibold mt-4">
						Success
					</h3>
					<p className="text-sm font-semibold text-gray-700 mt-2">
						We are successfully received your request. Within 5 business day you{' '}
						<br />
						will get an email with your application status update.{' '}
					</p>
					<button onClick={handleClick} className="button mt-4">
						Home
					</button>
				</div>
			</div>
		</section>
	);
};

export default Success;
