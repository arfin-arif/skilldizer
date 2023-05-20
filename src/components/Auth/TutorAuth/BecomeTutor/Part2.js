import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import StepComponent from '../../../Utils/Step';
import router from 'next/router';
import {
	MdOutlinePlaylistAddCheck,
	MdOutlineTipsAndUpdates,
} from 'react-icons/md';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import MobileStepper from '../../../Utils/MobileStepper';
const AvatarComponent = dynamic(() => import('../../../Utils/Avatar'), {
	ssr: false,
});

// * Images

import tutor1 from '../../../../../public/images/tutor-sample-image-1.png';
import tutor2 from '../../../../../public/images/tutor-sample-image-2.png';
import tutor3 from '../../../../../public/images/tutor-sample-image-3.png';

const ProfilePhoto = () => {
	const [profileImage, setProfileImage] = useState(() => {
		const image = localStorage.getItem('profileImage');
		if (image) {
			const imageData = JSON.parse(image);
			if (imageData) {
				return imageData;
			} else {
				return null;
			}
		} else {
			return null;
		}
	});

	const { avatar } = useSelector(state => state.tutor);

	const [error, setError] = useState(false);

	const handleSubmit = async e => {
		e.preventDefault();
		if (!profileImage || !avatar) {
			setError(true);
		}

		if (avatar) {
			localStorage.setItem('profileImage', JSON.stringify(avatar));
		}
		if (profileImage || avatar) {
			router.push('/become-tutor/part3');
		}
	};
	return (
		<section style={{ minHeight: 'calc(100vh - 80px' }} className="pb-40">
			<StepComponent activeStep={1} />
			<MobileStepper activeStep={1} />
			<form onSubmit={handleSubmit} className="grid place-items-center">
				<div className="mt-10 max-w-[43rem] shadow-md p-6 rounded-md">
					<div className="flex flex-col md:flex-row md:space-x-14 justify-center items-center">
						<div className="grid place-items-center relative order-2 md:order-none ">
							<AvatarComponent />

							{!avatar && (
								<span className="text-[#FF5A00] absolute top-[85px] text-[80px]">
									<AiOutlineCloudUpload />
								</span>
							)}

							{!avatar && error && (
								<p className="text-sm text-red-600 mt-2 text-start italic">
									Invalid image
								</p>
							)}
						</div>
						<div>
							{!avatar && !profileImage && (
								<div className="flex items-center justify-center space-x-2 mb-3">
									<Image
										className="w-[90px] h-[90px]"
										src={tutor1}
										alt="sample-tutor-image"
									/>
									<Image
										className="w-[90px] h-[90px]"
										src={tutor2}
										alt="sample-tutor-image"
									/>
									<Image
										className="w-[90px] h-[90px]"
										src={tutor3}
										alt="sample-tutor-image"
									/>
								</div>
							)}
							{avatar && (
								<div>
									<p className="text-[#FF5A00]">Preview</p>
									<Image
										className="w-24 h-24"
										src={avatar}
										width={150}
										height={20}
										alt="Preview"
									/>
								</div>
							)}
							{profileImage && !avatar && (
								<div>
									<p className="text-[#FF5A00]">Profile Image</p>
									<Image
										className="w-24 h-24"
										src={profileImage}
										width={150}
										height={20}
										alt="Preview"
									/>
								</div>
							)}

							<div className="flex mt-4 items-center space-x-2">
								<span className="text-[#FF5A00]">
									<MdOutlineTipsAndUpdates />
								</span>
								<p className="font-semibold text-[#313140]">
									Tips for an incredible photo:
								</p>
							</div>
							<div className="mt-5 space-y-[6px]">
								<p className="text-[10px] flex items-center space-x-2 text-gray-500">
									<span className="text-green-500 text-base mr-1">
										<MdOutlinePlaylistAddCheck />
									</span>{' '}
									Smile and look at the camera
								</p>
								<p className="text-[10px] flex items-center space-x-2 text-gray-500">
									<span className="text-green-500 text-base mr-1">
										<MdOutlinePlaylistAddCheck />
									</span>{' '}
									Centre your head and shoulders
								</p>
								<p className="text-[10px] flex items-center space-x-2 text-gray-500">
									<span className="text-green-500 text-base mr-1">
										<MdOutlinePlaylistAddCheck />
									</span>{' '}
									Centre your head and shoulders
								</p>
								<p className="text-[10px] flex items-center space-x-2 text-gray-500">
									<span className="text-green-500 text-base mr-1">
										<MdOutlinePlaylistAddCheck />
									</span>{' '}
									Use neutral lighting and backgrounds
								</p>
								<p className="text-[10px] flex items-center space-x-2 text-gray-500">
									<span className="text-green-500 text-base mr-1">
										<MdOutlinePlaylistAddCheck />
									</span>{' '}
									Your face and eyes should be fully visible (unless you have
									cultural reasons that contradict this)
								</p>
								<p className="text-[10px] flex items-center space-x-2 text-gray-500">
									<span className="text-green-500 text-base mr-1">
										<MdOutlinePlaylistAddCheck />
									</span>{' '}
									Avoid logos or contact information
								</p>
								<p className="text-[10px] flex items-center space-x-2 text-gray-500">
									<span className="text-green-500 text-base mr-1">
										<MdOutlinePlaylistAddCheck />
									</span>{' '}
									You should be the only person in the photo
								</p>
							</div>
						</div>
					</div>

					<div className="flex items-center space-x-3 mt-5">
						<p
							onClick={() => router.push('/become-tutor/part1')}
							className="button "
						>
							Back
						</p>
						<button type="submit" className="button">
							Save & Continue
						</button>
					</div>
				</div>
			</form>
		</section>
	);
};

export default ProfilePhoto;
