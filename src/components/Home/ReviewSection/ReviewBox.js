import React from 'react';
import { ImQuotesLeft } from 'react-icons/im';
import { AiTwotoneStar } from 'react-icons/ai';
import Image from 'next/image';

const ReviewBox = ({ review, image }) => {
	return (
		<div className="bg-[#dfdfdf] max-h-[205px] mb-4 rounded-lg p-6">
			<div className="flex space-x-5 items-start">
				<Image
					className="min-w-[80px] h-[80px] rounded-full object-top object-cover"
					src={image}
					alt="tutor_image"
				/>
				<div className="">
					<div className="flex items-center justify-end">
						<div className="flex items-center space-x-1">
							<span className="text-[#FF5A00] text-2xl">
								<AiTwotoneStar />
							</span>
							<span className="text-[#FF5A00] text-2xl">
								<AiTwotoneStar />
							</span>
							<span className="text-[#FF5A00] text-2xl">
								<AiTwotoneStar />
							</span>
							<span className="text-[#FF5A00] text-2xl">
								<AiTwotoneStar />
							</span>
							<span className="text-[#FF5A00] text-2xl">
								<AiTwotoneStar />
							</span>
						</div>
					</div>
					<div className="flex items-start space-x-3 mt-3">
						<span className="text-[#FF5A00] text-3xl">
							<ImQuotesLeft />
						</span>

						<p className="text-ellipsis  max-h-[72px] overflow-hidden text-[1rem] max-h font-light">
							{review}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ReviewBox;
