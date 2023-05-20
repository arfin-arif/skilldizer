import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

import image1 from '../../../public/images/polygon.png';
import image2 from '../../../public/images/start-your-journey.png';
import image3 from '../../../public/images/pick-up-tutor.png';
import image4 from '../../../public/images/book-your-classes.png';

const HowSkilldizerWorkSection = () => {
	const { ref, inView } = useInView({
		threshold: 0.5,
	});
	const animation = useAnimation();

	useEffect(() => {
		if (inView) {
			animation.start({
				opacity: 1,
				transition: { duration: 1.5 },
				y: 0,
				x: 0,
			});
		}
	}, [inView, animation]);
	return (
		<section ref={ref} className="bg-[#FFFFFF] pt-[90px] relative">
			<div>
				<Image
					className="absolute right-[57px] top-[180px] opacity-20 duration-[15s] animation_spin"
					src={image1}
					alt="polygon"
				/>
			</div>
			<div className="mx-auto max-w-[68rem]">
				<div className="text-center">
					<motion.h2
						initial={{ opacity: 0, x: 80 }}
						animate={animation}
						className="text-[2.5rem] text-[#313140] font-semibold"
					>
						How <span className="text-[#FF5A00]">Skilldizer</span> Works?
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, x: -80 }}
						animate={animation}
						className="mt-1 text-lg  text-[#6f757b]"
					>
						{' '}
						Let Skilldizer help you achieving your learning ambitions.
					</motion.p>
				</div>
				<motion.div
					initial={{ opacity: 0, y: -80 }}
					animate={animation}
					className="md:grid md:grid-cols-3 md:place-items-start md:gap-x-10 mt-[70px]"
				>
					<div className="grid place-items-center transition-all duration-[2s] ease-in-out hover:-mt-7">
						<div className="flex justify-center">
							<Image
								className="w-[60%]"
								src={image2}
								alt="start-your-journey"
								loading="lazy"
							/>
						</div>
						<div className="text-center">
							<h3 className="font-semibold text-[20px]">Start your journey</h3>
							<p className="text-[#131313] text-[15px]">
								Watch tutor introduction video and read reviews from others
								students
							</p>
						</div>
					</div>
					<div className="grid place-items-center transition-all duration-[2s] ease-in-out hover:-mt-7">
						<div className="flex justify-center">
							<Image
								className="w-[60%]"
								src={image3}
								alt="pick-up-tutor"
								loading="lazy"
							/>
						</div>
						<div className="text-center">
							<h3 className="font-semibold text-[20px]">Choose your tutor</h3>
							<p className="text-[#131313] text-[15px]">
								Find the best tutor for your needs
							</p>
						</div>
					</div>
					<div className="grid place-items-center transition-all duration-[2s] ease-in-out hover:-mt-7">
						<div className="flex justify-center">
							<Image
								className="w-[60%]"
								src={image4}
								alt="book-your-class"
								loading="lazy"
							/>
						</div>
						<div className="text-center">
							<h3 className="font-semibold text-[20px]">Book your class</h3>
							<p className="text-[#131313] text-[15px]">
								Choose the best time for you from the tutor&apos;s availability
							</p>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default HowSkilldizerWorkSection;
