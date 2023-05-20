import React, { useState } from 'react';
import Image from 'next/image';
import Flag from 'react-world-flags';
import { Tooltip } from '@mui/material';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import Review from './Review';

// * Icons
import tutorImage from '../../../../public/images/tutor-sample-image-1.png';
import { MdVerified } from 'react-icons/md';

const TutorInfo = ({ paymentInfo }) => {
	const { tutor, totalFee, processFee } = paymentInfo;
	return (
		<>
			{/* Tutor Info Section */}
			<div className="basis-2/5 bg-[#fff] mt-10 px-8">
				{/* Tutor Details */}
				<div className="flex gap-5 mt-5">
					<div className="mt-2">
						<Image
							src={tutorImage}
							className="w-12 h-12 rounded-full object-cover"
							alt="tutor"
						/>
					</div>
					<div>
						<div className="flex gap-3">
							<h2 className="text-xl font-semibold text-gray-900 capitalize">
								{tutor.user.name}
							</h2>
							<p className="w-[25px] mt-2">
								<Flag code={tutor.country.substring(0, 3)} />
							</p>
							<Tooltip title="Verified tutor" arrow>
								<span className="text-xl text-[#FF5A00]  mt-2">
									<MdVerified />
								</span>
							</Tooltip>
						</div>
						<div>
							{tutor.languageTeach?.length > 0 &&
								tutor.languageTeach.map(({ language, level }, index) => (
									<p key={index} className="text-sm text-gray-700">
										{language}
									</p>
								))}
						</div>
					</div>
				</div>

				{/* Border */}
				<div className="border-b-2 my-5"></div>

				{/* Service Details */}
				<div className="flex flex-col">
					<div className="flex justify-between">
						<span>
							<h3 className="text-[#52667D]">Service details</h3>
						</span>
						<span className="text-[#52667D]">
							<h3>Price</h3>
						</span>
					</div>
					<div className="flex justify-between">
						<span>
							<h3>1 hour class</h3>
						</span>
						<span>
							<h3>${tutor.hourlyRate}</h3>
						</span>
					</div>
					<div className="flex justify-between">
						<span>
							<h3 className="flex gap-1">
								Processing fee
								<Tooltip
									title="This fee secures your payment and helps us make payments to your tutor when you complete your lessons"
									arrow
								>
									<span className=" text-[#52667D] mt-1">
										<AiOutlineQuestionCircle size={14} />
									</span>
								</Tooltip>
							</h3>
						</span>
						<span>
							<h3>${processFee}</h3>
						</span>
					</div>
				</div>

				{/* Promo Box */}

				<div className="mt-4 flex gap-2">
					<input
						type="text"
						placeholder="Enter your promo code"
						className="border-[#FF5A00] select_input p-2"
					/>
					<button className="border py-1 px-3 bg-[#F8F8F8]">Add</button>
				</div>

				{/* Border */}
				<div className="border-b-2 my-5"></div>

				{/* Total */}
				<div className="flex justify-between">
					<h2 className="text-xl">Total</h2>
					<h2 className="text-xl">${totalFee}</h2>
				</div>

				<div className="mt-12 mb-5">
					<Review ratings={tutor.ratings} reviews={tutor.reviews} />
				</div>
			</div>
		</>
	);
};

export default TutorInfo;
