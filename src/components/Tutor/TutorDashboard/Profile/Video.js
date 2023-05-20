import { ErrorMessage } from '@hookform/error-message';
import React, { useEffect, useState, useRef } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import router from 'next/router';
import Image from 'next/image';
import tutorImage from '../../../../../public/images/Skilldizer Picture.jpeg';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { updateTutorVideo } from '../../../../store/actions/tutorAction';
import { useDispatch, useSelector } from 'react-redux';
import {
	clearError,
	clearSuccess,
} from '../../../../store/reducer/tutorReducer';
import { openAlert } from '../../../../store/reducer/alertReducer';

const Video = () => {
	const dispatch = useDispatch();

	const { error, message, tutor, loading } = useSelector(state => state.tutor);
	const [userVideoLink, setUserVideoLink] = useState(null);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		watch,
	} = useForm({});

	const handleUserVideo = e => {
		setUserVideoLink(e.target.value);
	};

	const onSubmit = data => {
		dispatch(updateTutorVideo(userVideoLink));
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
		<section className="pb-20 bg-white my-10 ml-10 mr-20 pt-8 px-10">
			<div>
				<h3 className="font-[500] text-[24px]">Video introduction</h3>
				<h3 className="font-[400] text-[24px] pt-8"> Record your video</h3>
				<p className="font-[400] text-[18px] pt-3 text-[#808080]">
					Now introduce yourself to students! You can watch and re-record your
					intro before <br /> you submit it.
				</p>
			</div>
			<div className=" ">
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex gap-10 rounded-md mt-4 p-8 space-x-14 flex-col md:flex-row"
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
							<button
								disabled={userVideoLink === ''}
								type="submit"
								className="bg-[#FF5A00] px-10 py-2 border border-[#FF5A00] rounded text-white"
							>
								Save
							</button>
						</div>
					</div>

					<div>
						<div className="flex mt-4 items-center space-x-2">
							<p className="font-semibold text-[#313140]">
								Tips for an incredible Video:
							</p>
						</div>
						<div className="mt-5 space-y-[6px]">
							<p className="text-[16px] flex items-center space-x-2 font-[500] text-[#666666]">
								<span className="text-[#257CFF] text-base mr-1">
									<AiOutlineCheckCircle size={20} />
								</span>{' '}
								Keep your video between 30 seconds and 2 minutes long
							</p>
							<p className="text-[16px] flex items-center space-x-2 font-[500] text-[#666666]">
								<span className="text-[#257CFF] text-base mr-1">
									<AiOutlineCheckCircle size={20} />
								</span>{' '}
								Record in horizontal mode and at eye level
							</p>
							<p className="text-[16px] flex items-center space-x-2 font-[500] text-[#666666]">
								<span className="text-[#257CFF] text-base mr-1">
									<AiOutlineCheckCircle size={20} />
								</span>{' '}
								Use good lighting and a neutral background
							</p>
							<p className="text-[16px] flex items-center space-x-2 font-[500] text-[#666666]">
								<span className="text-[#257CFF] text-base mr-1">
									<AiOutlineCheckCircle size={20} />
								</span>{' '}
								Say Hi and Introduce yourself briefly
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
								Highlight your teaching experience and any relevant teaching
								certification(s)
							</p>
							<p className="text-[16px] flex items-center space-x-2 font-[500] text-[#666666]">
								<span className="text-[#257CFF] text-base mr-1">
									<AiOutlineCheckCircle size={20} />
								</span>{' '}
								Talk a bit about your teaching style
							</p>
						</div>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Video;
