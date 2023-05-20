import { motion } from 'framer-motion';
import React from 'react';
import { VscGithubAction, VscVersions } from 'react-icons/vsc';
import {
	GiBurningPassion,
	GiFist,
	GiGloves,
	GiProgression,
	GiStairsGoal,
} from 'react-icons/gi';
import { BsShieldCheck } from 'react-icons/bs';
import { FaPeopleCarry } from 'react-icons/fa';
import { FiUserCheck } from 'react-icons/fi';
import { FaUserGraduate } from 'react-icons/fa';

import Image from 'next/image';
import whoAreImage from '../../public/images/unsplash_Bf_ItbkEBjI.png';
import coreValueImage from '../../public/images/our-core-value.png';

const WhoAreWe = () => {
	return (
		<section style={{
			minHeight: 'calc(100vh - 80px',
			fontFamily: "'Inter', Arial, Helvetica, sans-serif"
		}} className="pb-20">
			<div className="max-w-5xl mx-auto">
				{/* <motion.h2
					initial={{ opacity: 0, y: -60 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.5 }}
					className="text-[2.5rem] text-center mt-10 text-[#313140] font-semibold"
				>
					Who are we
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.5 }}
					className=" text-lg  text-center text-[#6f757b]"
				>
					We’re inspiring the next generation of the brightest minds.
				</motion.p> */}
				<div className="mt-16 flex md:gap-x-8 items-center h-[70vh]">
					<motion.div
						initial={{ opacity: 0, x: -150 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1.5 }}
						className="mx-3 lg:mx-0 basis-3/5  "
					>
						<h1 className="text-[#6F757B]  mt-10 font-semibold">Who we are</h1>
						<h2 className="text-3xl font-semibold ">
							This is <span className="text-[#FA5500]"> Skilldizer</span>
						</h2>
						<p className="text-base leading-6 mt-3 text-gray-800 ">
							To show the world what unique language and skills learning looks
							like, Skilldizer was developed in 2022. You might be curious about
							the folks behind Skilldizer, but there is more to them than
							computer screens and language classes. To be straightforward, they
							are a great group! We refer to one another as Skilldizers, and
							they share the same vision and mission of influencing effective
							and successful learning in the future. We are also unstoppable
							when it comes to achieving our goals!
						</p>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 150 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1.5 }}
						className="basis-2/5 w-[37%]"
					>
						<Image
							className="rounded-lg px-3 lg:px-0 mt-3 md:mt-0 h-[95vh] object-cover"
							loading="lazy"
							src={whoAreImage}
							alt=""
						/>
					</motion.div>
				</div>
				<div className="mt-28">
					<h2 className="text-[2.5rem] text-center text-[#313140] font-semibold">
						The Story of<span className="text-[#FF5A00]"> Skilldizer</span>
					</h2>
					<p className="text-[#131313] text-center text-[15px]">
						Every journey has a special story all its own. And our story is one
						to shout about with pride!
					</p>
					<div className="md:grid md:grid-cols-3 place-items-start gap-x-10 mt-[40px]">
						<div className="grid place-items-center transition-all duration-[1s] ease-in-out hover:-mt-7 rounded-lg shadow-md p-6 pt-8 min-h-[350px]">
							<div className="flex justify-center">
								<span className="text-2xl text-[#FF5A00] p-5 rounded-full bg-slate-100">
									<FaUserGraduate />
								</span>
							</div>
							<div className="text-center mt-3">
								<h3 className="font-semibold text-[20px]">
									2022- Get Ready for Action
								</h3>
								<p className="text-[#131313] text-[15px]">
									One concept is where it all begins. What a wonderful idea it
									is to improve language and skills learning for everyone!
									Skilldizer is established by our entrepreneur, and the
									adventure started.
								</p>
							</div>
						</div>
						<div className="grid place-items-center transition-all duration-[1s] ease-in-out hover:-mt-7 rounded-lg shadow-md p-6 pt-8 min-h-[350px]">
							<div className="flex justify-center">
								<span className="text-2xl text-[#FF5A00] p-5 rounded-full bg-slate-100">
									<FaUserGraduate />
								</span>
							</div>
							<div className="text-center mt-3">
								<h3 className="font-semibold text-[20px]">Our Vision </h3>
								<p className="text-[#131313] text-[15px]">
									We are keen to promote language and skills learning through
									technology to connect and collaborate to discover, learn,
									utilize, and share the finest ways that technology can improve
									learning, teaching, and leading in the 21st century
								</p>
							</div>
						</div>
						<div className="grid place-items-center transition-all duration-[1s] ease-in-out hover:-mt-7 rounded-lg shadow-md p-6 pt-8 min-h-[350px]">
							<div className="flex justify-center">
								<span className="text-2xl text-[#FF5A00] p-5 rounded-full bg-slate-100">
									<FaUserGraduate />
								</span>
							</div>
							<div className="text-center mt-3">
								<h3 className="font-semibold text-[20px]">Our Mission</h3>
								<p className="text-[#131313] text-[15px]">
									What we care about the most is being a supportive platform for
									lifelong learners with collaborative teaching in a 1-on-1
									class model, where students are doing most of the talking and
									heavy lifting of their learning
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-28 md:grid md:grid-cols-2 gap-x-24 md:items-center">
					<motion.div
						initial={{ opacity: 0, x: -150 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1.5 }}
					>
						<Image src={coreValueImage} alt="" />
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 150 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1.5 }}
						className="mx-3 md:mx-0"
					>
						<h2 className="text-[30px] font-semibold text-start">
							Our Core Values
						</h2>
						<div className="grid lg:grid-cols-none md:grid-cols-none sm:grid-cols-none text-[#FF5A00]">
							<div className="flex items-center gap-[3rem]">
								<div className="mt-10 flex items-start space-x-3">
									<h2 className="font-semibold text-base">Passion</h2>
								</div>
								<div className="flex mt-10 items-center space-x-3">
									<h2 className="font-semibold ">Integrity</h2>
								</div>
								<div className="flex mt-10 items-end space-x-3">
									<h2 className="font-semibold">Honesty</h2>
								</div>
							</div>
							<div className="flex items-center gap-[.5rem] lg:gap-[2rem] md:gap-[2rem]">
								<div className="flex mt-4 items-start">
									<h2 className="font-semibold">Empowerment </h2>
								</div>
								<div className="flex mt-4 items-center">
									<h2 className="font-semibold ">Transparency</h2>
								</div>
								<div className="flex mt-4 items-end">
									<h2 className="font-semibold">Reliability</h2>
								</div>
							</div>
							<div className="flex items-center gap-[3rem]">
								<div className="flex mt-4 items-center space-x-3">
									<h2 className="font-semibold">Efficiency</h2>
								</div>
								<div className="flex mt-4 items-center space-x-3">
									<h2 className="font-semibold">Boldness</h2>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default WhoAreWe;
