import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

import privateTutorImage from '../../../../public/images/private-one-on-one-tutor.png';

const PrivateOneOnOneClasses = () => {
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
				initial={{ opacity: 0, x: -80 }}
				animate={animation}
				className="flex justify-start order-2 md:order-1"
			>
				<Image
					className="md:w-[65%] h-full animation"
					src={privateTutorImage}
					alt="private-one-on-one-tutor"
					loading="lazy"
				/>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, x: 80 }}
				animate={animation}
				className="order-1 md:order-2"
			>
				<h3 className="text-[2rem] text-[#313140] text-center md:text-left font-semibold">
					Private 1 on 1 Classes
				</h3>
				<p className="mt-2 mb-5 md:mb-0 text-lg mx-5 md:mx-0 text-[#6f757b]">
					{' '}
					Some people learn best on their own; if you are the one that focuses
					that way. With Skilldizer, you can be in this learning environment
					that works best for you.
				</p>
			</motion.div>
		</div>
	);
};

export default PrivateOneOnOneClasses;
