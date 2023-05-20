import React from 'react';
import tutorImage from '../../../../../public/images/profile_image.png';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../../Utils/Loader';

const Description = () => {
	const { user, loading } = useSelector(state => state.user);
	return (
		<section className="pb-10 bg-white ml-10 mr-20">
			{loading ? (
				<Loader />
			) : (
				user && (
					<div className='px-10'>
						<div className="flex justify-between mt-10 pt-6">
							<span>
								<h2 className="main-heading">Profile description</h2>
								<h3 className="main-heading-subtitle">
									Update or create a new profile headline and description. It will
									appear on your tutor card on the “Find <br /> tutors” page.
								</h3>
							</span>
							<span className="space-x-4">
								<button className="form-btn-cancel">
									Cancel
								</button>
								<button
									className="form-btn-save"
									type="submit"
								>
									Save
								</button>
							</span>
						</div>
						

						<div className="mt-8 flex gap-6 items-center">
							<span>
								<Image
									src={user?.avatar?.url ? user?.avatar?.url : tutorImage}
									width={80}
									height={80}
									alt="tutor profile"
									className="h-16 w-16 object-cover"
								/>
							</span>
							<span className="flex flex-col gap-2">
								<h3 className="font-[500] text-[16px]">{user.name}</h3>
								<input
									className="placeholder:text-black border-2 h-[2.5rem] pl-2 w-[600px]"
									placeholder="Experienced native Arabic tutor"
								/>
							</span>
						</div>
						<h3 className="sub-heading-16 mt-8">
							Description for English-speaking students
						</h3>
						<div>
							<h3 className="form-label-1 font-[500]">Experience</h3>
							<input
								className="placeholder:text-black mt-2 border-2  pl-2 w-[630px] h-[40px] font-400 text-[16px]"
								placeholder="I am specialized in teaching English - Arabic speakers experience of 5 years"
							/>
						</div>
						<div className="mt-8">
							<h3 className="form-label-1 font-[500]">
								Introduce yourself and share briefly about your interests
							</h3>
							<textarea
								type="text"
								className="placeholder:text-black mt-2 border-2 border-[#E5E7EB]  pl-2 w-[927px] font-400 text-[16px] p-2"
								placeholder={`Welcome to my profile, my name is Safwan, from Jordan, and i live in Virginia, I have been working as an Arabic teacher and a translator since 4 years, I can teach you Modern Standard Arabic (MSA) and spoken Jordanian/ Palestinian dialect!!! I hold a Bachelor’s degree in Translation from English-Arabic and vice versa, join my classes to learn so many things!!!

I have worked with adults and children and I assure you that my Classes are both enjoyable and beneficial.
							
I am specialized in teaching non-native Arabic speakers and we can even start from scratch.`}
								rows={10}
							/>
						</div>
						<div className="mt-8">
							<h3 className="form-label-1 font-[500]">
								Describe your teaching experience, certification and methodology
							</h3>
							<textarea
								type="text"
								className="mt-2 placeholder:text-black border-2 border-[#E5E7EB] pl-2 w-[927px] font-400 text-[16px] p-2"
								rows={10}
							/>
						</div>
						<div className="mt-8">
							<h3 className="form-label-1 font-[500]">
								Motivate students to book a trial class with you
							</h3>
							<textarea
								type="text"
								className="mt-2 placeholder:text-black border-2 border-[#E5E7EB] pl-2 w-[927px] font-400 text-[16px] p-2"
								rows={10}
							/>
						</div>
						<p className="font-[500] text-[16px] text-[#808080]">
							400 characters minimum. 935 characters currently
						</p>

						<div className="space-x-4 mt-5">
							<button className="form-btn-cancel">
								Cancel
							</button>
							<button
								className="form-btn-save"
								type="submit"
							>
								Save
							</button>
						</div>
					</div>
				)
			)}
		</section>
	);
};

export default Description;
