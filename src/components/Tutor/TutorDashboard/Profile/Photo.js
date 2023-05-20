import React, { useState, useEffect } from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import router from 'next/router';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { updateTutorPhoto } from '../../../../store/actions/tutorAction';
import { useDispatch, useSelector } from 'react-redux';
import {
	clearError,
	clearSuccess,
} from '../../../../store/reducer/tutorReducer';
import { openAlert } from '../../../../store/reducer/alertReducer';
const AvatarComponent = dynamic(() => import('../../../Utils/Avatar'), {
	ssr: false,
});

// * Images

import tutor1 from '../../../../../public/images/unsplash_sgZX15Da8YE.png';
import tutor2 from '../../../../../public/images/unsplash_SJvDxw0azqw.png';
import tutor3 from '../../../../../public/images/unsplash_qLUSn99qvAc.png';

const Photo = () => {
	const dispatch = useDispatch();

	const { error, message, tutor, loading } = useSelector(state => state.tutor);

	const { avatar } = useSelector(state => state.tutor);

	const [photoError, setError] = useState(false);

	const handleSubmit = async e => {
		console.log('submitting');
		e.preventDefault();
		if (!avatar) {
			setError(true);
		}

		if (avatar && !photoError) {
			dispatch(updateTutorPhoto(avatar));
			router.push('/profile/dashboard');
		}
	};

	useEffect(() => {
		if (error) {
			dispatch(openAlert({ severity: 'error', message: error }));
			dispatch(clearError());
			return;
		}

		if (message) {
			dispatch(openAlert({ severity: 'success', message: message }));
			dispatch(clearSuccess());
		}
	}, [error, message, dispatch]);
	return (
		<section className="pb-40 bg-white my-10 ml-10 mr-20 pt-8 px-10">
			<div>
				<h3 className="main-heading">Profile Photo</h3>
			</div>
			<form onSubmit={handleSubmit} className="grid">
				<div className="mt-5 max-w-[70rem] rounded-md">
					<div className="flex gap-20 md:flex-row md:space-x-14">
						<div>
							<div>
								<h3 className="sub-heading-18">
									Make a great first impression
								</h3>
								<p className="main-heading-subtitle tracking-normal">
									Tutors who look friendly and professional get <br /> most
									students
								</p>
							</div>

							<div className="grid place-items-center relative order-2 md:order-none mt-2">
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
						</div>

						<div>
							<div>
								<h3 className="font-[600] text-[22px]  tracking-normal">
									Tips for an amazing photo
								</h3>
							</div>

							<div className="flex space-x-2 mb-3 mt-2">
								<Image
									className="w-[90px] h-[90px] object-cover"
									src={tutor1}
									alt="sample-tutor-image"
								/>
								<Image
									className="w-[90px] h-[90px] object-cover"
									src={tutor2}
									alt="sample-tutor-image"
								/>
								<Image
									className="w-[90px] h-[90px] object-cover"
									src={tutor3}
									alt="sample-tutor-image"
								/>
							</div>

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

							<div className="mt-5 space-y-[6px]">
								<p className="text-[16px] flex items-center space-x-2 font-[500] text-[#666666]">
									<span className="text-[#257CFF] text-base mr-1">
										<AiOutlineCheckCircle size={20} />
									</span>{' '}
									Smile and look at the camera
								</p>
								<p className="text-[16px] flex items-center space-x-2 font-[500] text-[#666666]">
									<span className="text-[#257CFF] text-base mr-1">
										<AiOutlineCheckCircle size={20} />
									</span>{' '}
									Centre your head and shoulders
								</p>
								<p className="text-[16px] flex items-center space-x-2 font-[500] text-[#666666]">
									<span className="text-[#257CFF] text-base mr-1">
										<AiOutlineCheckCircle size={20} />
									</span>{' '}
									Use neutral lighting and backgrounds
								</p>
								<p className="text-[16px] flex items-center space-x-2 font-[500] text-[#666666]">
									<span className="text-[#257CFF] text-base mr-1">
										<AiOutlineCheckCircle size={20} />
									</span>{' '}
									Use a stable surface so that your video does not appear shaky
								</p>
								<p className="text-[16px] flex items-center space-x-2 font-[500] text-[#666666]">
									<span className="text-[#257CFF] text-base mr-1">
										<AiOutlineCheckCircle size={20} />
									</span>{' '}
									Your face and eyes are fully visible (except for religious
									reasons)
								</p>
								<p className="text-[16px] flex items-center space-x-2 font-[500] text-[#666666]">
									<span className="text-[#257CFF] text-base mr-1">
										<AiOutlineCheckCircle size={20} />
									</span>{' '}
									Avoid logos or contact information
								</p>
								<p className="text-[16px] flex items-center space-x-2 font-[500] text-[#666666]">
									<span className="text-[#257CFF] text-base mr-1">
										<AiOutlineCheckCircle size={20} />
									</span>{' '}
									You should be the only person in the photo
								</p>
							</div>
						</div>
					</div>

					<div className="flex items-center space-x-3 mt-5">
						<p
							onClick={() => router.push('/become-tutor/part1')}
							className="form-btn-cancel"
						>
							Cancel
						</p>
						<button
							type="submit"
							className="form-btn-save"
						>
							Save
						</button>
					</div>
				</div>
			</form>
		</section>
	);
};

export default Photo;
