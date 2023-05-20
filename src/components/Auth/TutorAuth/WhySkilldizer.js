import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import { BiTimeFive } from 'react-icons/bi';
import { BsGraphDown } from 'react-icons/bs';

const WhySkilldizer = ({ signUp }) => {
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
		<section ref={ref} className="bg-[#FFFFFF] pt-[3rem] relative">
			<div className="mx-auto max-w-[68rem]">
				<div className="text-center">
					<motion.h2
						initial={{ opacity: 0, x: 80 }}
						animate={animation}
						className="text-[2.5rem] text-[#313140] font-semibold"
					>
						Why <span className="text-[#FF5A00]">Skilldizer?</span>
					</motion.h2>
				</div>
				<motion.div
					initial={{ opacity: 0, y: -80 }}
					animate={animation}
					className="md:grid md:grid-cols-3 place-items-start gap-x-10 mt-[70px] md:mx-3 lg:mx-0"
				>
					<div className="grid place-items-center transition-all duration-[2s] ease-in-out hover:-mt-7">
						<div className="flex justify-center">
							<span className="text-2xl text-[#FF5A00] p-5 rounded-full bg-slate-100">
								<FaMoneyCheckAlt />
							</span>
						</div>
						<div className="text-center mt-3">
							<h3 className="font-semibold text-[20px]">
								Teach at your own rate
							</h3>
							<p className="text-[#131313] text-[15px]">
								Here at Skilldizer, you have the freedom to teach languages or
								skills at your own convenient rate per hour.
							</p>
						</div>
					</div>
					<div className="grid place-items-center transition-all duration-[2s] ease-in-out hover:-mt-7">
						<div className="flex justify-center">
							<span className="text-2xl text-[#FF5A00] p-5 rounded-full bg-slate-100">
								<BiTimeFive />
							</span>
						</div>
						<div className="text-center mt-3">
							<h3 className="font-semibold text-[20px]">
								Flexible teaching schedule
							</h3>
							<p className="text-[#131313] text-[15px]">
								Skilldizer provides a flexible scheduling system to set your
								availability and schedule just the way you want it.
							</p>
						</div>
					</div>
					<div className="grid place-items-center transition-all duration-[2s] ease-in-out hover:-mt-7">
						<div className="flex justify-center">
							<span className="text-2xl text-[#FF5A00] p-5 rounded-full bg-slate-100">
								<BsGraphDown />
							</span>
						</div>
						<div className="text-center mt-3">
							<h3 className="font-semibold text-[20px]">Low commission rate</h3>
							<p className="text-[#131313] text-[15px]">
								Skilldizer offers a very low commission rate for each class you
								do because we value our tutors so dearly!
							</p>
						</div>
					</div>
				</motion.div>
				<motion.div
					className="mt-14 border grid place-items-center p-8"
					initial={{ opacity: 0, y: 80 }}
					animate={animation}
				>
					<h2 className="font-semibold text-xl leading-7">
						Teach students from around the globe
					</h2>
					<p className="text-[15px] text-gray-700 mt-1">
						Skilldizer tutors 100,000+ students globally. Join us and you will
						have everything you need to teach successfully.
					</p>
					<button
						onClick={() => signUp.current.scrollIntoView()}
						className="button w-full mt-8"
					>
						Sign Up Now
					</button>
				</motion.div>
			</div>
		</section>
	);
};

export default WhySkilldizer;
