import React, { useState } from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { BsBookmarkCheck, BsFillBookmarkCheckFill } from 'react-icons/bs';
import { FaUserGraduate } from 'react-icons/fa';
import { GrUserExpert } from 'react-icons/gr';
import { MdVerified } from 'react-icons/md';
import StarRatings from 'react-star-ratings';
import Flag from 'react-world-flags';
import { Tooltip } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import AuthDialog from '../Auth/AuthDialog';
import TutorCalender from './TutorCalender';
import axios from 'axios';
import ShowMore from '../Utils/ShowMore';
const { io } = require('socket.io-client');
const socket = io(`${process.env.REACT_APP_BACKEND_API}`);

// * Images
import tutorSampleImage from '../../../public/images/tutor-sample-image-2.png';

const TutorBox = ({
	tutorId,
	tutor,
	hourlyRate,
	name,
	country,
	saveTutors,
	languageTeach,
	teachingExperience,
	languageSpeak,
	aboutMe,
	ratings,
	numberOfReviews,
	schedule,
	headline,
	countryCode,
	setTutor,
	index,
	setIndex,
}) => {
	const [open, setOpen] = React.useState(false);
	const { user, message } = useSelector(state => state.user);

	const handleClickOpen = () => {
		setOpen(true);
		if (user) {
			const message = {
				senderId: user?._id,
				receiverId: tutorId,
				text: `${user?.name} started booking a lesson with you but hasn't completed a payment yet,You can start a conversation and ask if user the student needs your help or some more details`,
				userType: 'Skilldizer',
			};

			axios
				.post(
					`${process.env.REACT_APP_BACKEND_API}/api/v1/conversation/create-conversation`,
					message,
					{
						withCredentials: true,
						headers: {
							'Content-Type': 'application/json',
						},
					}
				)
				.then(({ data }) => {
					socket.emit('sendMessage', {
						receiverId: tutorId,
						messageId: data.chat._id,
						senderId: user?._id,
					});
				});

			axios
				.put(
					`${process.env.REACT_APP_BACKEND_API}/api/v1/stats/update-stats`,
					{ tutorId, key: 'trialMessage' },
					{
						withCredentials: true,
						headers: {
							'Content-Type': 'application/json',
						},
					}
				)
				.then(() => {
					axios
						.put(
							`${process.env.REACT_APP_BACKEND_API}/api/v1/stats/update-stats`,
							{ tutorId, key: 'profileViews' },
							{
								withCredentials: true,
								headers: {
									'Content-Type': 'application/json',
								},
							}
						)
						.then(() => { });
				});
		}
	};

	const handleClose = value => {
		setOpen(false);
	};

	return (
		<>
			<div
				// onClick={() => setTutor(tutor)}
				onMouseEnter={() => {
					setTutor(tutor), setIndex(index);
				}}
				onMouseLeave={() => {
					setTutor(null), setIndex(null);
				}}
				className="bg-white rounded-lg shadow-sm p-4 space-x-4 flex flex-col md:flex-row md:items-start justify-between"
			>
				<div className="grid relative place-items-center">
					<Image
						width={0}
						height={0}
						className="md:w-28  md:object-cover md:rounded-md"
						src={tutor.profileImage ? tutor.profileImage : tutorSampleImage}
						alt="tutor_image"
					/>
				</div>
				<div className="flex-1 space-y-1">
					<div className="flex items-center space-x-2">
						<Link href="/tutor/234">
							<h2 className="text-xl font-semibold text-gray-900 cursor-pointer">
								{name}
							</h2>
						</Link>
						<span className="text-xl text-[#FF5A00]">
							<MdVerified />
						</span>
						<p className="relative w-[25px] flex flex-col items-center group ">
							<Flag code={countryCode} />
							<div class="absolute bottom-0 flex flex-col items-center hidden mb-6 group-hover:flex">
								<span class="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">{country}</span>
								<div class="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
							</div>
						</p>
						{saveTutors?.length > 0 &&
							saveTutors?.find(ele => ele?._id === tutor?._id) ? (
							<Tooltip title="Saved" arrow>
								<span className="text-base font-bold cursor-pointer  text-[#FF5A00]">
									<BsFillBookmarkCheckFill />
								</span>
							</Tooltip>
						) : (
							<Tooltip title="Save tutor" arrow>
								<span className="text-base font-bold  cursor-pointer  text-[#FF5A00]">
									<BsBookmarkCheck />
								</span>
							</Tooltip>
						)}
					</div>

					<div className="flex items-center">
						<span className="pr-2">
							<FaUserGraduate />
						</span>
						{languageTeach.map((lang, index) => (
							<span key={lang._id} className="text-sm text-gray-500 ">
								{lang.language}
								{index >= 0 && index < languageTeach.length - 1 ? ',' : ''}
							</span>
						))}
						<span className="pl-2">
							<BiTimeFive />
						</span>
						<span className="text-sm text-gray-500 pl-2">320 classes</span>
					</div>

					<div className="flex items-center space-x-2">
						<span className="text-sm text-gray-500">Speaks:</span>
						<div className="flex items-center font-semibold">
							{languageSpeak?.length > 0 &&
								languageSpeak.map(({ language, level }, index) => (
									<p key={index} className="text-sm text-gray-700">
										{language}
										{index >= 0 && index < languageSpeak.length - 1 ? ',' : ''}
										{/* <span className="text-[#FF5A00] rounded-full px-2 bg-slate-200 font-normal">
											{level}
										</span> */}
									</p>
								))}
						</div>
					</div>

					<div className="mt-2 ">
						<span className="text-sm !font-semibold">{headline}</span>

						<ShowMore text={aboutMe} />

					</div>
				</div>
				<div className="flex flex-col justify-center items-center">
					<div>
						<div className="flex items-center space-x-2">
							<span className="text-[#FF5A00] flex space-x-1">
								{
									ratings > 0 && (
										<StarRatings
											rating={ratings}
											starDimension="15px"
											starSpacing="1px"
											starRatedColor="#FF5A00"
										/>)}
								<p className="text-sm text-black mt-[4px]">
									{ratings === 0 ? <p>NEW User</p> : <p>{ratings} out of 5</p>}


								</p>
							</span>
							{
								ratings > 0 && (
									<p className="text-sm mt-1  ">({numberOfReviews} reviews)</p>
								)
							}
						</div>
					</div>
					<div className="mt-3">
						<p className="font-semibold text-[#292929] text-lg tracking-wider">
							$ {hourlyRate}/hr
						</p>
					</div>
					<button
						onClick={handleClickOpen}
						className="button mt-4 mb-2 shadow-none"
					>
						Book trial class
					</button>
					{user ? (
						<TutorCalender
							open={open}
							onClose={handleClose}
							tutorId={tutorId}
							schedule={schedule}
						/>
					) : (
						<AuthDialog open={open} onClose={handleClose} />
					)}

					<button className="cursor-pointer border-2 rounded-lg px-10 py-2 font-bold border-[#FDECE4] transition-all duration-150 hover:border-[#ffd9c7] ">
						Message
					</button>
				</div>
			</div>
			<div className="py-4 bg-slate-100"></div>
		</>
	);
};

export default TutorBox;
