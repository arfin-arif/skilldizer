import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import ProfessionalTutors from './ProfessionalTutors';
import AffordablePriceSection from './AffordablePriceSection';
import FlexibleDistanceLearning from './FlexibleDistanceLearning';
import OngoingLearning from './OngoingLearning';
import ThinkingOverMemorization from './ThinkingOverMemorization';
import PrivateOneOnOneClasses from './PrivateOneOnOneClasses';
import RewardAndLoyaltyPrograms from './RewardAndLoyaltyPrograms';

const WhyChooseUs = () => {
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
		<section className="mt-32">
			<div ref={ref} className="max-w-[68rem] mx-5 lg:mx-auto">
				<div className="text-center">
					<motion.h2
						initial={{ opacity: 0, y: -60 }}
						animate={animation}
						className="text-[2.5rem] text-[#313140] font-semibold"
					>
						Why Skilldizer?
					</motion.h2>
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={animation}
						className="mt-3 text-lg mx-5 md:mx-0 text-left md:text-center  text-[#6f757b]"
					>
						{' '}
						Having trouble keeping up with your language or skill learning? With
						Skilldizer, <br />
						we&apos;ll help you boost your competitive edge so you can secure
						your future!
					</motion.p>
				</div>
				<div className="space-y-20 mt-[70px]">
					<ProfessionalTutors />
					<PrivateOneOnOneClasses />
					<ThinkingOverMemorization />
					<AffordablePriceSection />
					<OngoingLearning />
					<FlexibleDistanceLearning />
					<RewardAndLoyaltyPrograms />
				</div>
			</div>
		</section>
	);
};

export default WhyChooseUs;
