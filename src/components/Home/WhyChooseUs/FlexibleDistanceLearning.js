import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

import flexibleDistanceImage from '../../../../public/images/flexible-distance.png';

const FlexibleDistanceLearning = () => {
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
					Flexible Distance Learning and Support
				</h3>
				<p className="mt-2 mb-5 md:mb-0 text-lg mx-5 md:mx-0 text-[#6f757b]">
					{' '}
					We provide flexible and 24/7 online learning that fits around you and
					amazing customer support team that will be available 24/7/365 to
					assist you!
				</p>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, x: -80 }}
				animate={animation}
				className="flex order-1 justify-start"
			>
				<Image
					className="h-full animation md:w-[65%]"
					src={flexibleDistanceImage}
					alt="flexible-distance"
				/>
			</motion.div>
		</div>
	);
};

export default FlexibleDistanceLearning;
