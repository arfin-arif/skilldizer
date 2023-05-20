import React from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { AiFillYoutube } from 'react-icons/ai';
import { FaFacebookF, FaPinterestP } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import { TfiLinkedin } from 'react-icons/tfi';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
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
		<section ref={ref} className="bg-[#454747]">
			<div className="mx-auto max-w-[68rem] md:pt-12 pt-6 pb-10">
				<motion.div
					initial={{ opacity: 0, y: 80 }}
					animate={animation}
					className="grid md:grid-cols-4 grid-cols-2 "
				>
					<div>
						<h2 className="text-[20px] text-[#fcfafa] font-semibold mx-3 md:mx-0">
							About Us
						</h2>
						<ul className="text-sm li-style text-[#d9d4d4] font-medium space-y-2 list-none md:mt-5 mt-2 mx-1 md:mx-0">
							<li>
								<span>
									<RiArrowRightSLine />
								</span>
								<Link href="/who-are-we">Who we are</Link>
							</li>
							<li>
								<span>
									<RiArrowRightSLine />
								</span>{' '}
								<Link href="/careers">Careers</Link>
							</li>
						</ul>
					</div>
					<div>
						<h2 className="text-[20px] text-[#fcfafa] font-semibold mx-3 md:mx-0">
							For Students
						</h2>
						<ul className="text-sm li-style text-[#d9d4d4] font-medium space-y-2 list-none md:mt-5 mt-2 ">
							<li>
								<span>
									<RiArrowRightSLine />
								</span>
								<Link href="/faqs"> FAQs</Link>
							</li>
							<li>
								<span>
									<RiArrowRightSLine />
								</span>{' '}
								<Link href="/blogs">Skilldizer Blog</Link>
							</li>
						</ul>
					</div>
					<div>
						<h2 className="text-[20px] text-[#fcfafa] font-semibold mt-2 md:mt-0 mx-3 md:mx-0">
							For Tutors
						</h2>
						<ul className="text-sm li-style text-[#d9d4d4] font-medium space-y-2 list-none md:mt-5 mt-2 mx-1 md:mx-0">
							<li className="">
								<span>
									<RiArrowRightSLine />
								</span>{' '}
								<Link href="/tutor-register">Become a tutor</Link>
							</li>
						</ul>
					</div>
					<div>
						<h2 className="text-[20px] text-[#fcfafa] font-semibold mt-2 md:mt-0 mx-3 md:mx-0">
							Support
						</h2>
						<p className="text-sm flex items-center duration-200 hover:ml-3 space-x-1 cursor-default hover:underline hover:text-[#fafafa] font-medium text-[#d9d4d4] md:mt-5 mt-2 mx-1 md:mx-0">
							<span className="text-[#FF5A00]">
								<RiArrowRightSLine />
							</span>
							<a href="mailto:support@skilldizer.com">We are here for help!</a>
						</p>
					</div>
				</motion.div>
				<hr className="my-6 text-[#cdc9c9]" />
				<div className="gird grid-cols-2 md:flex md:flex-row items-center justify-between">
					<motion.div
						initial={{ opacity: 0, x: -80 }}
						animate={animation}
						className="flex md:items-center items-start space-x-3 flex-col md:flex-row"
					>
						<p className="text-[#fcfafa] font-semibold text-base ml-3 my-2 md:my-0 md:ml-0">
							Don&apos;t miss out!
						</p>
						<div>
							<input
								className="px-4 py-3 rounded-l-lg outline-none "
								type="email"
								placeholder="Email address"
							/>
							<button className="text-sm font-medium px-2 pt-[15px] pb-[14px] bg-[#FF5A00] text-[#FFFFFF] rounded-r-lg">
								Subscribe
							</button>
						</div>
					</motion.div>
					<motion.div initial={{ opacity: 0, x: 80 }} animate={animation}>
						<ul className="flex items-center text-[#454747] md:space-x-4 space-x-3 text-2xl social-icon-style justify-start my-2 mx-2 md:mx-0 md:my-0">
							<li className=" p-2 bg-white rounded-full hover:scale-125 transition-all duration-200">
								<a href="https://www.facebook.com/Skilldizer-101614332566677">
									<FaFacebookF />
								</a>
							</li>
							<li className=" p-2 bg-white rounded-full hover:scale-125 transition-all duration-200">
								<a href="https://www.instagram.com/skilldizer">
									<BsInstagram />
								</a>
							</li>
							<li className=" p-2 bg-white rounded-full hover:scale-125 transition-all duration-200">
								<a href="https://www.youtube.com/channel/UCYqcSmy_M_9fCRefwnQBi_g">
									<AiFillYoutube />
								</a>
							</li>
							<li className=" p-2 bg-white rounded-full hover:scale-125 transition-all duration-200">
								<a href="https://www.linkedin.com/company/skilldizerllc">
									<TfiLinkedin />
								</a>
							</li>
							<li className=" p-2 bg-white  rounded-full hover:scale-125 transition-all duration-200">
								<a href="https://twitter.com/skilldizer">
									<BsTwitter />
								</a>
							</li>
							<li className=" p-2 bg-white rounded-full hover:scale-125 transition-all duration-200">
								<a href="https://www.pinterest.com/skilldizer/_saved">
									<FaPinterestP />
								</a>
							</li>
							<li className="bg-white p-2 rounded-full  hover:scale-125 transition-all duration-200">
								<a href="https://www.tiktok.com/@skilldizer">
									<SiTiktok />
								</a>
							</li>
						</ul>
					</motion.div>
				</div>
				<div className="flex items-center justify-between mt-16 text-sm text-[#c6c3c3] flex-col md:flex-row">
					<motion.p
						initial={{ opacity: 0, y: 80 }}
						animate={animation}
						className=""
					>
						Copyright © 2022 Skilldizer. All rights reserved.{' '}
					</motion.p>
					<div>
						<Link href="/legal-center">
							<span className="cursor-pointer hover:underline hover:text-[#fafafa]">
								{' '}
								Legal Center
							</span>{' '}
						</Link>
						|{' '}
						<span className="cursor-pointer hover:underline hover:text-[#fafafa]">
							<a href="/images/Skilldizer Privacy Policy.pdf">Privacy Policy</a>
						</span>{' '}
						|{' '}
						<span className="cursor-pointer hover:underline hover:text-[#fafafa]">
							<a href="/images/Skilldizer Cookie Policy.pdf">Cookie Policy</a>
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
