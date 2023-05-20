import React, { useState, useEffect } from 'react';
import { openAlert } from '../../../../store/reducer/alertReducer';
import { clearSuccess } from '../../../../store/reducer/userReducer';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const Subject = () => {
	const dispatch = useDispatch();
	const [savedChecked, setSavedChecked] = useState(null);
	const [beginnerChecked, setBeginnerChecked] = useState(true);
	const [preChecked, setPreChecked] = useState(true);
	const [intermediateChecked, setIntermediateChecked] = useState(true);
	const [upperChecked, setUpperChecked] = useState(false);
	const [advanceChecked, setAdvanceChecked] = useState(true);
	const [proficiencyChecked, setProficiencyChecked] = useState(true);
	const [notSpecifiedChecked, setNotSpecifiedChecked] = useState(true);
	const [toddlersChecked, setToddlersChecked] = useState(true);
	const [preschoolersChecked, setPreschoolersChecked] = useState(true);
	const [primaryChecked, setPrimaryChecked] = useState(false);
	const [secondaryChecked, setSecondaryChecked] = useState(true);
	const [studentsChecked, setStudentsChecked] = useState(true);
	const [adultsChecked, setAdultsChecked] = useState(true);
	const [adults40Checked, setAdults40Checked] = useState(true);

	useEffect(() => {
		if (savedChecked === null) {
			axios
				.get(
					`${process.env.REACT_APP_BACKEND_API}/api/v1/notification/get-preferences`,

					{
						withCredentials: true,
						headers: {
							'Content-Type': 'application/json',
						},
					}
				)
				.then(res => {
					if (res.data.data.preference) {
						setSavedChecked(res.data.data.preference);
						setBeginnerChecked(res.data.data?.preference?.beginnerChecked);
						setPreChecked(res.data.data?.preference?.preChecked);
						setIntermediateChecked(
							res.data.data?.preference?.intermediateChecked
						);
						setUpperChecked(res.data.data?.preference?.upperChecked);
						setAdvanceChecked(res.data.data?.preference?.advanceChecked);
						setProficiencyChecked(
							res.data.data?.preference?.proficiencyChecked
						);
						setNotSpecifiedChecked(
							res.data.data?.preference?.notSpecifiedChecked
						);
						setToddlersChecked(res.data.data?.preference?.toddlersChecked);
						setPreschoolersChecked(
							res.data.data?.notifications?.preschoolersChecked
						);
						setPrimaryChecked(res.data.data?.notifications?.primaryChecked);
						setSecondaryChecked(res.data.data?.notifications?.secondaryChecked);
						setStudentsChecked(res.data.data?.notifications?.studentsChecked);
						setAdultsChecked(res.data.data?.notifications?.adultsChecked);
						setAdults40Checked(res.data.data?.notifications?.adults40Checked);
					}
				});
		}
	}, [savedChecked]);

	const handleSubmit = () => {
		axios
			.put(
				`${process.env.REACT_APP_BACKEND_API}/api/v1/notification/update-preferences`,
				{
					beginnerChecked,
					preChecked,
					intermediateChecked,
					upperChecked,
					advanceChecked,
					proficiencyChecked,
					notSpecifiedChecked,
					toddlersChecked,
					preschoolersChecked,
					primaryChecked,
					secondaryChecked,
					studentsChecked,
					adultsChecked,
					adults40Checked,
				},
				{
					withCredentials: true,
					headers: {
						'Content-Type': 'application/json',
					},
				}
			)
			.then(res => {
				dispatch(
					openAlert({ severity: 'success', message: res.data.data.message })
				);
				dispatch(clearSuccess());
			})
			.catch(err => {
				dispatch(
					openAlert({
						severity: 'error',
						message: err?.response?.data?.message,
					})
				);
				dispatch(clearSuccess());
			});
	};

	return (
		<section className="bg-white my-10 ml-10 mr-20">
			<div className="px-10 py-6">
				<h1 className="main-heading">Tutoring Subject</h1>
				<div className="mt-2 flex flex-col gap-3">
					<h3 className="main-heading-subtitle">
						Years of experience
					</h3>
					<input
						type="text"
						name=""
						id=""
						placeholder="4"
						className="placeholder:text-[#808080] border border-[#808080] py-1 px-4 w-[8rem] rounded-md"
					/>
				</div>
				<div className="mt-8">
					<h2 className="main-heading font-[400]">Student proficiency level</h2>
					<div className="flex items-center gap-4 ml-1 mt-2">
						<input
							checked={beginnerChecked}
							onChange={e => setBeginnerChecked(e.target.checked)}
							type="checkbox"
							className="cursor-pointer scale-[1] accent-[#FF5A00] appearance-none checked:bg-[#FF5A00] checked:border-transparent active:ring-2 active:ring-[#FF5A00] active:outline-none focus:ring-2 focus:ring-[#FF5A00] focus:outline-none"
						/>
						<h3 className="text-[15px] font-[400] text-[#000000] ">Beginner</h3>
					</div>
					<div className="flex items-center gap-4 ml-1 mt-2">
						<input
							checked={preChecked}
							onChange={e => setPreChecked(e.target.checked)}
							type="checkbox"
							className="cursor-pointer scale-[1] accent-[#FF5A00]  appearance-none checked:bg-[#FF5A00] checked:border-transparent active:ring-2 active:ring-[#FF5A00] active:outline-none focus:ring-2 focus:ring-[#FF5A00] focus:outline-none"
						/>
						<h3 className="text-[15px] font-[400] text-[#000000] ">
							Pre Intermediate
						</h3>
					</div>
					<div className="flex items-center gap-4 ml-1 mt-2">
						<input
							checked={intermediateChecked}
							onChange={e => setIntermediateChecked(e.target.checked)}
							type="checkbox"
							className="cursor-pointer scale-[1] accent-[#FF5A00]  appearance-none checked:bg-[#FF5A00] checked:border-transparent active:ring-2 active:ring-[#FF5A00] active:outline-none focus:ring-2 focus:ring-[#FF5A00] focus:outline-none"
						/>
						<h3 className="text-[15px] font-[400] text-[#000000] ">
							Intermediate
						</h3>
					</div>
					<div className="flex items-center gap-4 ml-1 mt-2">
						<input
							checked={upperChecked}
							onChange={e => setUpperChecked(e.target.checked)}
							type="checkbox"
							className="cursor-pointer scale-[1] accent-[#FF5A00]  appearance-none checked:bg-[#FF5A00] checked:border-transparent active:ring-2 active:ring-[#FF5A00] active:outline-none focus:ring-2 focus:ring-[#FF5A00] focus:outline-none"
						/>
						<h3 className="text-[15px] font-[400] text-[#000000] ">
							Upper Intermediate
						</h3>
					</div>
					<div className="flex items-center gap-4 ml-1 mt-2">
						<input
							checked={advanceChecked}
							onChange={e => setAdvanceChecked(e.target.checked)}
							type="checkbox"
							className="cursor-pointer scale-[1] accent-[#FF5A00]  appearance-none checked:bg-[#FF5A00] checked:border-transparent active:ring-2 active:ring-[#FF5A00] active:outline-none focus:ring-2 focus:ring-[#FF5A00] focus:outline-none"
						/>
						<h3 className="text-[15px] font-[400] text-[#000000] ">Advanced</h3>
					</div>
					<div className="flex items-center gap-4 ml-1 mt-2">
						<input
							checked={proficiencyChecked}
							onChange={e => setProficiencyChecked(e.target.checked)}
							type="checkbox"
							className="cursor-pointer scale-[1] accent-[#FF5A00]  appearance-none checked:bg-[#FF5A00] checked:border-transparent active:ring-2 active:ring-[#FF5A00] active:outline-none focus:ring-2 focus:ring-[#FF5A00] focus:outline-none"
						/>
						<h3 className="text-[15px] font-[400] text-[#000000] ">
							Proficiency
						</h3>
					</div>
					<div className="flex items-center gap-4 ml-1 mt-2">
						<input
							checked={notSpecifiedChecked}
							onChange={e => setNotSpecifiedChecked(e.target.checked)}
							type="checkbox"
							className="cursor-pointer scale-[1] accent-[#FF5A00]  appearance-none checked:bg-[#FF5A00] checked:border-transparent active:ring-2 active:ring-[#FF5A00] active:outline-none focus:ring-2 focus:ring-[#FF5A00] focus:outline-none"
						/>
						<h3 className="text-[15px] font-[400] text-[#000000] ">
							Not Specified
						</h3>
					</div>
				</div>

				<div className="mt-8">
					<h2 className="font-[400] text-[20px]">Preferred age group</h2>
					<div className="flex items-center gap-4 ml-1 mt-2">
						<input
							checked={toddlersChecked}
							onChange={e => setToddlersChecked(e.target.checked)}
							type="checkbox"
							className="cursor-pointer scale-[1] accent-[#FF5A00]  appearance-none checked:bg-[#FF5A00] checked:border-transparent active:ring-2 active:ring-[#FF5A00] active:outline-none focus:ring-2 focus:ring-[#FF5A00] focus:outline-none"
						/>
						<h3 className="text-[15px] font-[400] text-[#000000] ">
							Toddlers (1-3)
						</h3>
					</div>
					<div className="flex items-center gap-4 ml-1 mt-2">
						<input
							checked={preschoolersChecked}
							onChange={e => setPreschoolersChecked(e.target.checked)}
							type="checkbox"
							className="cursor-pointer scale-[1] accent-[#FF5A00]  appearance-none checked:bg-[#FF5A00] checked:border-transparent active:ring-2 active:ring-[#FF5A00] active:outline-none focus:ring-2 focus:ring-[#FF5A00] focus:outline-none"
						/>
						<h3 className="text-[15px] font-[400] text-[#000000] ">
							Preschoolers (4-6)
						</h3>
					</div>
					<div className="flex items-center gap-4 ml-1 mt-2">
						<input
							checked={primaryChecked}
							onChange={e => setPrimaryChecked(e.target.checked)}
							type="checkbox"
							className="cursor-pointer scale-[1] accent-[#FF5A00]  appearance-none checked:bg-[#FF5A00] checked:border-transparent active:ring-2 active:ring-[#FF5A00] active:outline-none focus:ring-2 focus:ring-[#FF5A00] focus:outline-none"
						/>
						<h3 className="text-[15px] font-[400] text-[#000000] ">
							Primary school (6-12)
						</h3>
					</div>
					<div className="flex items-center gap-4 ml-1 mt-2">
						<input
							checked={secondaryChecked}
							onChange={e => setSecondaryChecked(e.target.checked)}
							type="checkbox"
							className="cursor-pointer scale-[1] accent-[#FF5A00]  appearance-none checked:bg-[#FF5A00] checked:border-transparent active:ring-2 active:ring-[#FF5A00] active:outline-none focus:ring-2 focus:ring-[#FF5A00] focus:outline-none"
						/>
						<h3 className="text-[15px] font-[400] text-[#000000] ">
							Secondary school (12-17)
						</h3>
					</div>
					<div className="flex items-center gap-4 ml-1 mt-2">
						<input
							checked={studentsChecked}
							onChange={e => setStudentsChecked(e.target.checked)}
							type="checkbox"
							className="cursor-pointer scale-[1] accent-[#FF5A00]  appearance-none checked:bg-[#FF5A00] checked:border-transparent active:ring-2 active:ring-[#FF5A00] active:outline-none focus:ring-2 focus:ring-[#FF5A00] focus:outline-none"
						/>
						<h3 className="text-[15px] font-[400] text-[#000000] ">
							Students (17-22)
						</h3>
					</div>
					<div className="flex items-center gap-4 ml-1 mt-2">
						<input
							checked={adultsChecked}
							onChange={e => setAdultsChecked(e.target.checked)}
							type="checkbox"
							className="cursor-pointer scale-[1] accent-[#FF5A00]  appearance-none checked:bg-[#FF5A00] checked:border-transparent active:ring-2 active:ring-[#FF5A00] active:outline-none focus:ring-2 focus:ring-[#FF5A00] focus:outline-none"
						/>
						<h3 className="text-[15px] font-[400] text-[#000000] ">
							Adults (23-40)
						</h3>
					</div>
					<div className="flex items-center gap-4 ml-1 mt-2">
						<input
							checked={adults40Checked}
							onChange={e => setAdults40Checked(e.target.checked)}
							type="checkbox"
							className="cursor-pointer scale-[1] accent-[#FF5A00]  appearance-none checked:bg-[#FF5A00] checked:border-transparent active:ring-2 active:ring-[#FF5A00] active:outline-none focus:ring-2 focus:ring-[#FF5A00] focus:outline-none"
						/>
						<h3 className="text-[15px] font-[400] text-[#000000] ">
							Adults (40+)
						</h3>
					</div>
				</div>
				<div className="mt-8">
					<button
						className="form-btn-save"
						type="submit"
						onClick={handleSubmit}
					>
						Save Settings
					</button>
				</div>
			</div>
		</section>
	);
};

export default Subject;
