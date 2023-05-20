import React, { useRef } from 'react';
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from 'react-icons/bs';
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import StarRatings from 'react-star-ratings';
import tutorImage from '../../../../public/images/tutor-sample-image-1.png';

const ReviewSection = ({ ratings, reviews }) => {
	const sliderRef = useRef();
	const settings = {
		infinite: true,
		speed: 700,
		slidesToShow: 1,
		autoplay: false,
		arrows: false,
		slidesToScroll: 1,
		vertical: false,
		verticalSwiping: false,
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
		<section ref={ref}>
			<motion.div initial={{ opacity: 0, y: 80 }} animate={animation}>
				<div className="flex justify-between">
					<div className="space-x-4">
						<span className="border-[#FF5A00] border px-2 py-0.5 space-x-1">
							<span>
								<StarRatings
									rating={1}
									numberOfStars="1"
									starDimension="15px"
									starSpacing="1px"
									starRatedColor="#FF5A00"
								/>
							</span>
							<span>{ratings}.0</span>
						</span>

						<span>{reviews.length} reviews</span>
					</div>
					<div className="flex gap-1">
						<span
							onClick={() => sliderRef?.current?.slickNext()}
							className="text-3xl cursor-pointer text-gray-300 hover:text-[rosybrown] transition-all duration-150"
						>
							<BsArrowLeftCircleFill />
						</span>
						<span
							onClick={() => sliderRef?.current?.slickPrev()}
							className="text-3xl cursor-pointer text-gray-300 hover:text-[rosybrown] transition-all duration-150"
						>
							<BsArrowRightCircleFill />
						</span>
					</div>
				</div>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, y: -80 }}
				animate={animation}
				className="w-64 mt-3"
			>
				<Slider ref={sliderRef} {...settings}>
					{reviews.map((review, index) => (
						<div key={index}>
							<span className="flex gap-2 my-2">
								<Image
									src={tutorImage}
									className="w-6 h-6 rounded-full object-cover"
									alt="tutor"
								/>
								Ali
							</span>

							<p>{review.comment}</p>
						</div>
					))}
				</Slider>
			</motion.div>
		</section>
	);
};

export default ReviewSection;
