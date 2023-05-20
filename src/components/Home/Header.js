import React from 'react';
import { BsArrowDownCircle } from 'react-icons/bs';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import Link from 'next/link';

import HeaderImage from '../../../public/images/header.png';

const Header = () => {
	return (
		<div
			// style={{ minHeight: 'calc(100vh - 80px)' }}
			className="max-w-6xl mx-auto md:min-h-[70vh]"
		>
			<div
				// style={{ minHeight: 'calc(100vh - 80px)' }}
				className="flex flex-col max-h-full lg:flex lg:flex-row mx-3 md:min-h-[70vh]"
			>
				<div className="basis-1/2 mt-[120px]">
					<motion.h2
						initial={{ opacity: 0, y: -80 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1.5 }}
						className="text-3xl md:text-5xl text-[#313140] mb-7 font-bold"
					>
						Do you want to learn something new?
					</motion.h2>
					<Typewriter
						options={{
							wrapperClassName:
								'uppercase text-[#FF5A00] tracking-widest text-lg font-bold',
							strings: [
								'Languages',
								'Skills',
								'Business',
								'Programming',
								'Academic Subjects',
								'Cooking',
								'Fitness',
								'Psychology',
								'Yoga',
							],
							autoStart: true,
							loop: true,
							delay: 120,
						}}
					/>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1 }}
						className="cursor-pointer overflow-hidden hover:bg-[#fe4066] hover:space-x-3 py-3 mt-8 transition-all duration-300 ease-in-out max-w-[12rem] shadow-sm group flex items-center text-center rounded-md bg-[#FF5A00] text-white px-5"
					>
						<span className="-rotate-90 text-xl transition-all duration-300 ease-in-out -mb-[70px] opacity-0 group-hover:opacity-100 group-hover:mb-0">
							<BsArrowDownCircle />
						</span>
						<Link href="/signup">
							<button className="text-[18px] font-semibold transition-all duration-300 ease-in-out ">
								Start Learning
							</button>
						</Link>
					</motion.div>
				</div>
				<motion.div
					initial={{ opacity: 0, x: 80 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1.5 }}
					className="basis-1/2 overflow-hidden"
				>
					<Image className="mt-[3rem]" alt="banner_image" src={HeaderImage} />
				</motion.div>
			</div>
		</div>
	);
};

export default Header;
