import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from 'react';
import { useEffect } from 'react';
import { FaSlideshare } from 'react-icons/fa';
import { FiUserPlus } from 'react-icons/fi';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { MdPaid } from 'react-icons/md';
import Image from 'next/image';

import howImage from '../../../../public/images/how-it-works.jpg';

const HowItWorks = () => {
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
		<section ref={ref} className="mt-20 overflow-x-hidden">
			<div className="items-center max-w-[68rem] mx-auto md:grid gap-x-16 md:grid-cols-2">
				<motion.div
					className=""
					initial={{ opacity: 0, x: -150 }}
					animate={animation}
				>
					<Image src={howImage} alt="" className="rounded-lg" loading="lazy" />
				</motion.div>
				<motion.div initial={{ opacity: 0, x: 150 }} animate={animation}>
					<h2 className="text-[30px] font-semibold text-center">
						How to start tutoring on{' '}
						<span className="text-[#FF5A00]">Skilldizer?</span>
					</h2>
					<div className="mt-5 flex items-start space-x-5">
						<span className="text-2xl text-[#FF5A00] rounded-full p-4 bg-slate-100">
							<FiUserPlus />
						</span>
						<div>
							<h2 className="font-semibold text-[20px] leading-6">Register</h2>
							<p className="text-sm text-gray-700 mt-1">
								Fill out the application above and we&apos;ll notify you once
								you&apos;re accepted.
							</p>
						</div>
					</div>
					<div className="mt-12 flex items-start space-x-5">
						<span className="text-2xl text-[#FF5A00] rounded-full p-4 bg-slate-100">
							<HiOutlineUserGroup />
						</span>
						<div>
							<h2 className="font-semibold text-[20px] leading-6">
								Find a student
							</h2>
							<p className="text-sm text-gray-700 mt-1">
								Look for a student who you can help to take language or skill
								learning to the next level.
							</p>
						</div>
					</div>
					<div className="mt-12 flex items-start space-x-5">
						<span className="text-2xl text-[#FF5A00] rounded-full p-4 bg-slate-100">
							<FaSlideshare />
						</span>
						<div>
							<h2 className="font-semibold text-[20px] leading-6">Teach</h2>
							<p className="text-sm text-gray-700 mt-1">
								Meet your student in the classroom and help them learn to become
								whatever they want.
							</p>
						</div>
					</div>
					<div className="mt-12 flex items-start space-x-5">
						<span className="text-2xl text-[#FF5A00] rounded-full p-4 bg-slate-100">
							<MdPaid />
						</span>
						<div>
							<h2 className="font-semibold text-[20px] leading-6">Get paid</h2>
							<p className="text-sm text-gray-700 mt-1">
								After the class is taken and confirmed, you will be paid with a
								low commission rate.
							</p>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default HowItWorks;
