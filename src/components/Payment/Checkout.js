import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import TutorInfo from './Info/TutorInfo';
import PaymentSection from './PaymentSection/PaymentSection';

const Checkout = ({ tutor }) => {
	const router = useRouter();
	const { date, startTime, endTime } = router.query;
	const processFee = (3 / 100) * tutor.hourlyRate;
	const totalFee = processFee + tutor.hourlyRate;

	const paymentObj = {
		processFee: processFee,
		totalFee: totalFee,
		tutor: tutor,
		date: date,
		startTime: startTime,
		endTime: endTime,
	};
	return (
		<section className="max-w-4xl mx-auto pb-10 flex gap-8">
			<TutorInfo paymentInfo={paymentObj} />
			{/* Checkout Section */}

			<PaymentSection paymentInfo={paymentObj} />
		</section>
	);
};

export default Checkout;
