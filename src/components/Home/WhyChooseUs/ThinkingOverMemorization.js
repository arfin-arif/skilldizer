import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

import thinkingImage from '../../../../public/images/thinking-over-memorazition.webp';

const ThinkingOverMemorization = () => {
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
			className="md:grid md:grid-cols-2 items-center justify-between gap-x-16"
		>
			<motion.div
				initial={{ opacity: 0, x: 80 }}
				animate={animation}
				className=""
			>
				<h3 className="text-[2rem] text-[#313140] text-center md:text-left font-semibold">
					Thinking Over Memorization
				</h3>
				<p className="mt-2 mb-5 md:mb-0 text-lg mx-5 md:mx-0 text-[#6f757b]]">
					{' '}
					Our tutors teaching method is based on an innovative and
					result-oriented technique that helps students overcome barriers to
					bring concrete results.
				</p>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, x: -80 }}
				animate={animation}
				className="flex justify-end"
			>
				<Image
					className="md:w-[65%] h-full animation"
					src={thinkingImage}
					alt="thinking-over-memorazition"
				/>
			</motion.div>
		</div>
	);
};

export default ThinkingOverMemorization;
