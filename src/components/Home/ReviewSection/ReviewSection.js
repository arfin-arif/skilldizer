import React, { useRef } from 'react';
import {
	BsArrowDownCircleFill,
	BsArrowRightCircle,
	BsFillArrowUpCircleFill,
} from 'react-icons/bs';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ReviewBox from './ReviewBox';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
// Images
import Image from 'next/image';
import test1 from '../../../../public/images/test_01.png';
import test8 from '../../../../public/images/test_08.png';
import bottomLeft from '../../../../public/images/bottom-left-one.png';
import bottomRight from '../../../../public/images/test-bottom-right.png';

// tutor sample images
import tutorSample1 from '../../../../public/images/tutor-sample-image-1.png';
import tutorSample2 from '../../../../public/images/tutor-sample-image-2.png';
import tutorSample3 from '../../../../public/images/tutor-sample-image-3.png';
import tutorSample4 from '../../../../public/images/tutor-sample-image-4.jpg';
import tutorImage from '../../../../public/images/tutor_image.png';

const ReviewSection = () => {
	const sliderRef = useRef();
	const settings = {
		infinite: true,
		speed: 700,
		slidesToShow: 2,
		autoplay: false,
		arrows: false,
		slidesToScroll: 1,
		vertical: true,
		verticalSwiping: true,
	};

	const { ref, inView } = useInView({
		threshold: 0.2,
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
		<>
			<section
				ref={ref}
				className="bg-white relative overflow-hidden mt-[120px] py-[120px]"
			>
				<div>
					<Image
						className="absolute top-0 left-0 animate-pulse transition-all duration-500 ease-in-out"
						src={test1}
						alt="text_01"
					/>
					<Image
						className="absolute top-[50px] right-[20px]  opacity-20 animate-pulse transition-all duration-500 ease-in-out"
						src={test8}
						alt="test_08"
					/>
					<Image
						className="absolute top-[50px] left-[300px] opacity-20 animate-pulse transition-all duration-500 ease-in-out"
						src={test8}
						alt="test"
					/>
					<Image
						className="absolute bottom-[52px] left-[23%] opacity-20 animate-pulse transition-all duration-500 ease-in-out"
						src={bottomLeft}
						alt="bottom_left_one"
					/>
					<Image
						className="absolute -right-[10%]  -bottom-[91px] animate-pulse transition-all duration-500 ease-in-out"
						src={bottomRight}
						alt="test_bottom_right"
					/>
				</div>
				<div className="max-w-[68rem] flex flex-col md:grid md:grid-cols-5 md:gap-x-8 mx-auto">
					<motion.div
						initial={{ opacity: 0, y: -80 }}
						animate={animation}
						className="col-span-3"
					>
						<Slider ref={sliderRef} {...settings}>
							<ReviewBox
								name="Ivo"
								review="An incredible tutor with whom you can learn a lot. He shall help you with English and know more 
about South Africa. I really appreciate his willingness and I couldn't be happier. The best one!"
								image={tutorSample1}
							/>
							<ReviewBox
								name="Martha"
								review="I have really enjoyed working with Martha on Calculus 1. My understanding of the subject has 
                improved greatly and I have gained hope to pass the course!"
								image={tutorSample2}
							/>
							<ReviewBox
								name="Fredrik"
								review="I like Fredrik’s teaching style. He is smart, comes prepeared to all lessons, and has a very good 
                command of Python. After teaching, he solves many questions to strengthen my learning. I 
                appreciate his effort very much. Thank you Fredrik."
								image={tutorSample3}
							/>
							<ReviewBox
								name="Ana"
								review="Learning with Inna is a joy. I hadn't touched a sketchbook since I was a child, but she adapted the 
                lessons to my needs and helped me get a much better understanding of how to develop my skill. 
                Even at this early stage I feel like I am growing in confidence on my sketching! She is patient, 
                friendly, encouraging and understanding. I would highly recommend her as a tutor."
								image={tutorImage}
							/>
							<ReviewBox
								name="Andrea"
								review="Ms Andrea is a very calm and thoughtful tutor who really cares about her students. She helped me 
                prepare for my chemistry quiz and I would highly recommend her!"
								image={tutorSample4}
							/>
						</Slider>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 80 }}
						animate={animation}
						className="col-span-2 flex items-center space-x-8"
					>
						<div className="md:grid md:gap-y-5 ">
							<span
								onClick={() => sliderRef?.current?.slickNext()}
								className="text-3xl cursor-pointer text-gray-300 hover:text-[rosybrown] transition-all duration-150"
							>
								<BsFillArrowUpCircleFill />
							</span>
							<span
								onClick={() => sliderRef?.current?.slickPrev()}
								className="text-3xl cursor-pointer text-gray-300 hover:text-[rosybrown] transition-all duration-150"
							>
								<BsArrowDownCircleFill />
							</span>
						</div>
						<div>
							<h2 className="text-[2.5rem] text-[#313140] font-semibold">
								What Our{' '}
								<span className="text-[#FF5A00]">Students Are Saying</span>
							</h2>
							<Link href="/signup">
								<button className="text-semibold cursor-pointer space-x-3 mt-7 hover:text-[#d06125] flex items-center text-xl text-[#FF5A00] ">
									<p>Get Started</p>
									<span className="">
										<BsArrowRightCircle />
									</span>
								</button>
							</Link>
						</div>
					</motion.div>
				</div>
			</section>
		</>
	);
};

export default ReviewSection;
