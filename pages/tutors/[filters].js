import React, { useEffect, useState } from 'react';
import TutorBox from '../../src/components/Tutor/TutorBox';
import TutorFilter from '../../src/components/Tutor/TutorFilter';
import { createQuery } from '../../src/components/Utils/filterUtils.js';
import axios from 'axios';
import Loader from '../../src/components/Utils/Loader';
import AvailabilityGrid from '../../src/components/Tutor/AvailabilityGrid';
import ReactPlayer from 'react-player';
import { GoTriangleLeft } from 'react-icons/go';

const Tutor = props => {
	const [tutor, setTutor] = useState(null);
	const [videoIndex, setIndex] = useState(null);
	// useEffect(() => {
	// 	console.log('re rendering filters');
	// }, [tutor]);
	console.log(tutor);

	const tutors = props.tutors;
	const iconStyle = { color: 'white' };

	return (
		<section className="bg-slate-100 min-h-screen pb-20">
			<TutorFilter language={props.subject} />
			<div className="flex ml-20 mr-10 pt-10 gap-x-6">
				{!tutors ? (
					<Loader />
				) : (
					<div className="w-[960px]">
						{tutors.length > 0 ? (
							tutors.map((tutor, index) => (
								<TutorBox
									key={tutor._id}
									tutor={tutor}
									hourlyRate={tutor.hourlyRate}
									name={tutor.user.name}
									country={tutor.country}
									saveTutors={tutor.saveTutors}
									languageTeach={tutor.languageTeach}
									teachingExperience={tutor.teachingExperience}
									languageSpeak={tutor.languageSpeak}
									aboutMe={tutor.aboutMe}
									ratings={tutor.ratings}
									numberOfReviews={tutor.numberOfReviews}
									tutorId={tutor._id}
									schedule={tutor.schedule}
									headline={tutor.headline}
									countryCode={tutor.countryCode}
									setTutor={setTutor}
									index={index}
									setIndex={setIndex}
								/>
							))
						) : (
							<div className="grid place-items-center mt-44">
								<p className="label text-2xl text-center">
									We don&apos;t have any tutor yet
								</p>
							</div>
						)}
					</div>
				)}
				<div className='grid grid-cols-1 grid-flow-row '>


					{tutors.map((tutor, index) => (
						<div key={index} className="max-w-[404px]" style={{
							marginTop:
								// videoIndex > 2
								// 	? `calc(15rem * ${videoIndex})`
								`calc(10rem * ${videoIndex})`,
						}}
						>
							<div className="relative bg-white rounded-lg shadow-sm p-4">
								<ReactPlayer
									url={tutor?.introduceVideo}
									width={370}
									height={200}
								/>
								<h3 className="text-[#6F757B] text-center">
									Times are shown in your local time zone
								</h3>
								<AvailabilityGrid tutor={tutor} />
								<button className="bg-white border-2 border-[#FDECE4] rounded-md w-[370px] mt-2 py-4">
									View full schedule
								</button>
							</div>
							<div
								className={
									videoIndex === 0
										? 'absolute top-[38rem] right-[29%]'
										: videoIndex === 1
											? 'absolute top-[53rem] right-[29%]'
											: videoIndex === 2
												? 'absolute top-[68rem] right-[29%]'
												: videoIndex === 3
													? 'absolute top-[83rem] right-[29%]'
													: videoIndex === 4
														? 'absolute top-[97rem] right-[29%]'
														: ''
								}
							>
								<GoTriangleLeft style={iconStyle} size={40} />
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export async function getServerSideProps(context) {
	const { params } = context;
	const filters = params.filters;
	let subject;
	let subjectFilter = filters.split('=');
	if (subjectFilter.length > 2) {
		subject = subjectFilter[1].split('&')[0];
	} else {
		subject = filters.split('=')[1];
	}

	const query = createQuery(filters);

	const { data } = await axios.get(query, {
		withCredentials: true,
		headers: {
			'Content-Type': 'application/json',
		},
	});

	return {
		props: {
			tutors: data.tutors,
		},
	};
}

export default Tutor;
