import { ErrorMessage } from '@hookform/error-message';
import React, { useEffect, useState, useRef } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import {
	MdOutlinePlaylistAddCheck,
	MdOutlineTipsAndUpdates,
} from 'react-icons/md';
import router from 'next/router';
import StepComponent from '../../../Utils/Step';
import MobileStepper from '../../../Utils/MobileStepper';
import Image from 'next/image';
import tutorImage from '../../../../../public/images/Skilldizer Picture.jpeg';

const IntroductionVideo = () => {
	const [userVideoLink, setUserVideoLink] = useState(() => {
		const information = localStorage.getItem('introduceVideo');
		if (information) {
			return JSON.parse(information);
		}
	});
	const videoRef = useRef();
	const [videoLink, setVideoLink] = useState(() => {
		const information = localStorage.getItem('introduceVideo');
		if (information) {
			return JSON.parse(information);
		}
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		watch,
	} = useForm({
		defaultValues: {
			videoLink,
		},
	});

	const handleUserVideo = e => {
		setUserVideoLink(e.target.value);
	};

	const video = watch('videoLink');

	useEffect(() => {
		setVideoLink(video);
	}, [video]);

	const onSubmit = data => {
		localStorage.setItem('introduceVideo', JSON.stringify(data?.videoLink));
		router.push('/become-tutor/part5');
	};

	return (
		<section style={{ minHeight: 'calc(100vh - 80px)' }} className="pb-20">
			<StepComponent activeStep={3} />
			<MobileStepper activeStep={3} />

			<div className="grid place-items-center">
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="md:max-w-[50rem]  flex rounded-md mt-10 shadow-md p-8 space-x-14 flex-col md:flex-row"
				>
					<div className="order-2 md:order-none">
						<h2 className="text-[1.2rem] text-[#313140] font-semibold mb-3">
							Record your video like this
						</h2>
						{/* <ReactPlayer width={310} height={230} url={videoLink} /> */}
						<Image src={tutorImage} alt="tutor" />
						<label className="label mt-7">Paste a link to your video</label>

						<input
							{...register('videoLink', {
								required: 'Video is required',
							})}
							className="select_input"
							type="text"
							// placeholder="www.youtube.com/watch?v=DFNOd-RnQZM"
							onChange={handleUserVideo}
						/>
						<ErrorMessage
							errors={errors}
							name="videoLink"
							render={({ message }) => (
								<p className="text-sm text-red-600 italic">{message}</p>
							)}
						/>
						{userVideoLink === '' && (
							<p className="text-red-600">Video link is required</p>
						)}

						<div className="flex items-center space-x-3 mt-5">
							<p
								onClick={() => router.push('/become-tutor/part3')}
								className="button "
							>
								Back
							</p>
							<button
								disabled={userVideoLink === ''}
								type="submit"
								className="button"
							>
								Save & Continue
							</button>
						</div>
					</div>

					<div>
						<div className="flex mt-4 items-center space-x-2">
							<span className="text-[#FF5A00]">
								<MdOutlineTipsAndUpdates />
							</span>
							<p className="font-semibold text-[#313140]">
								Tips for an incredible Video:
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
				</form>
			</div>
		</section>
	);
};

export default IntroductionVideo;
