import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

import affordablePricesImage from '../../../../public/images/afordable-prices.png';

const AffordablePriceSection = () => {
	const { ref, inView } = useInView({
		threshold: 0.1,
	});
	const animation = useAnimation();

	useEffect(() => {
		if (inView) {
			animation.start({
				opacity: 1,
				y: 0,
				x: 0,
				transition: { duration: 1.5 },
			});
		}
	}, [inView, animation]);

	return (
		<div
			ref={ref}
			className="flex flex-col md:grid md:grid-cols-2 items-center justify-between gap-x-16"
		>
			<motion.div
				initial={{ opacity: 0, x: 80 }}
				animate={animation}
				className="md:order-last order-1"
			>
				<h3 className="text-[2rem] text-[#313140] text-center md:text-left font-semibold">
					Affordable Prices
				</h3>
				<p className="mt-2 mb-5 md:mb-0 text-lg mx-5 md:mx-0 text-[#6f757b]">
					{' '}
					Choose the expert tutor that matches your budget as our tutors’ rates
					are priced reasonably.
				</p>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, x: -80 }}
				animate={animation}
				className="flex md:order-1 order-2 justify-start"
			>
				<Image
					className="animation h-full md:w-[60%]"
					src={affordablePricesImage}
					alt="Affordable Prices"
				/>
			</motion.div>
		</div>
	);
};

export default AffordablePriceSection;
