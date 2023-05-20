import React, { useEffect, useState } from 'react';
import SubjectFilter from './TutorFilter/SubjectFilter';
import AvailabilityFilter from './TutorFilter/AvailabilityFilter';
import FromFilter from './TutorFilter/FromFilter';
import PriceFilter from './TutorFilter/PriceFilter';
import SpeaksFilter from './TutorFilter/SpeaksFilter';
import Filter from './TutorFilter/Filter';
import SortFilter from './TutorFilter/SortFilter';
import MobileFilter from './MobileFilter/MobileFilter';
import { BsSearch } from 'react-icons/bs';
import router from 'next/router';
// import { clearError } from '../features/reducer/tutorReducer';

// * Images
import Image from 'next/image';
import findTutorImage from '../../../public/images/find-a-tutor.jpg';

const TutorFilter = ({ language }) => {
	// const {
	// 	loading,
	// 	error,
	// 	tutor,
	// products,
	// productCount,
	// parPageResult,
	// filterProductCount,
	// } = useSelector(state => state.tutor);
	// const dispatch = useDispatch();
	const [availability, setAvailability] = useState({ time: [], day: [] });
	const [filter, setFilter] = useState('Gender');
	const [from, setFrom] = useState('From');
	const [price, setPrice] = useState([0, 80]);
	const [speak, setSpeak] = useState([]);
	const [sort, setSort] = useState({ label: 'Sort by', value: '' });
	const [subjectTuition, setSubjectTuition] = useState(language || 'English');
	const [page, setPage] = useState(1);

	useEffect(() => {
		// const availabilityValidate =
		// 	availability.time.length > 0 && availability.day.length
		// 		? availability
		// 		: null;

		let queryFilter = [];
		queryFilter.push(`/tutors/subject=${subjectTuition}`);

		// if (availabilityValidate !== null) {
		// 	queryFilter.push(`&time=${availability.time}&day=${availability.day}`);
		// }
		if (from !== 'From') {
			queryFilter.push(`&from=${from}`);
		}
		if (filter !== 'Gender') {
			queryFilter.push(`&gender=${filter}`);
		}
		if (speak.length > 0) {
			queryFilter.push(`&speaks=${speak}`);
		}
		if (sort.value !== '') {
			queryFilter.push(`&sortBy=${sort.value}`);
		}

		if (price[0] > 0) {
			queryFilter.push(`&hourlyRateFrom=${price[0]}&hourlyRateTo=${price[1]}`);
		}
		if (queryFilter.length === 1) {
			router.push(`/tutors/subject=${subjectTuition}`);
		} else {
			let query = queryFilter.join(',').replaceAll(',', '');
			router.push(query);
		}
	}, [availability, filter, from, price, speak, sort, subjectTuition, page]);

	return (
		<div className="bg-white border-t w-full ">
			<div className="max-w-5xl md:flex md:flex-row flex-col items-center justify-between mx-auto my-20">
				<div>
					<h2 className="font-bold text-4xl text-[#313140] mx-4 md:mx-4">
						The best <span className="text-[#FF5A00]">{subjectTuition}</span>{' '}
						tutor for you
					</h2>
					<p className="mt-2 text-sm text-gray-900 max-w-md font-semibold mx-4 md:mx-4">
						Looking for a great way to improve your{' '}
						<span>{subjectTuition}</span>? Skilldizer provides you with
						qualified <span>{subjectTuition}</span> tutors. Hire an online{' '}
						<span>{subjectTuition}</span> tutor to help you learn{' '}
						<span>{subjectTuition}</span>.
					</p>
					<div className="relative mt-2 w-72 ml-4">
						<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
							<BsSearch />
						</div>
						<input
							className="select_input pl-10"
							placeholder="Name/Course/Interests"
						/>
					</div>
				</div>
				<Image
					className="md:max-w-[175px]"
					// loading="lazy"
					src={findTutorImage}
					alt=""
				/>
			</div>
			{/* Mobile Filter */}
			<MobileFilter price={price} setPrice={setPrice} />

			<div className="lg:space-x-5 lg:px-16 lg:w-full hidden lg:justify-between lg:sticky lg:top-0 lg:z-40 lg:flex lg:items-center h-16 bg-[#F1F5F9] pt-8 pl-20">
				<div className="md:flex items-center space-x-5">
					<SubjectFilter
						subjectTuition={subjectTuition}
						setSubjectTuition={setSubjectTuition}
					/>
					<AvailabilityFilter
						availability={availability}
						setAvailability={setAvailability}
					/>
					<FromFilter from={from} setFrom={setFrom} />
					<PriceFilter price={price} setPrice={setPrice} />
					<SpeaksFilter speak={speak} setSpeak={setSpeak} />
					<Filter filter={filter} setFilter={setFilter} />
					<SortFilter sort={sort} setSort={setSort} />
				</div>
			</div>
		</div>
	);
};

export default TutorFilter;
