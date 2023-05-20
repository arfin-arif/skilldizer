import React, { useEffect, useMemo, useState } from 'react';
import countryList from 'react-select-country-list';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { useForm } from 'react-hook-form';
import LanguageList from '../../../data/LanguageList.json';
import TutorSubjectList from '../../../data/TutorSubjectList.json';
import {
	updateTutorAbout,
	getTutor,
} from '../../../../store/actions/tutorAction';
import { useDispatch, useSelector } from 'react-redux';
import {
	clearError,
	clearSuccess,
} from '../../../../store/reducer/tutorReducer';
import Loader from '../../../Utils/Loader';
import { openAlert } from '../../../../store/reducer/alertReducer';

const generateYearOptions = () => {
	const arr = [];

	const startYear = 1900;
	const endYear = new Date().getFullYear();

	for (let i = endYear; i >= startYear; i--) {
		arr.push(<option value={i}>{i}</option>);
	}

	return arr;
};

const generateMonthOptions = () => {
	const arr = [];
	for (let i = 1; i <= 12; i++) {
		arr.push(<option value={i}>{i}</option>);
	}
	return arr;
};
const generateDayOptions = () => {
	const arr = [];
	for (let i = 1; i <= 31; i++) {
		arr.push(<option value={i}>{i}</option>);
	}
	return arr;
};

const About = () => {
	const dispatch = useDispatch();
	const { error, message, tutor, loading } = useSelector(state => state.tutor);

	// const options = useMemo(() => countryList().getData(), []);

	const [value, setValue] = useState(null);

	const [inputFields, setInputFields] = useState(() => {
		return [{ language: '', level: '' }];
	});

	const [subjectFields, setSubjectFields] = useState([{ language: '' }]);

	// const [focus, setFocus] = useState(false);
	const [profileInformation, setProfileInformation] = useState(null);

	useEffect(() => {
		if (tutor === undefined) {
			dispatch(getTutor());
		}
	}, [tutor]);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		defaultValues: profileInformation,
	});

	const removeFields = index => {
		let data = [...inputFields];
		data.splice(index, 1);
		setInputFields(data);
	};

	const removeSubjectFields = index => {
		let data = [...subjectFields];
		data.splice(index, 1);
		setSubjectFields(data);
	};

	const addFields = () => {
		let newField = { language: '', level: '' };
		setInputFields([...inputFields, newField]);
	};
	const addSubjectFields = () => {
		let newField = { language: '' };
		setSubjectFields([...subjectFields, newField]);
	};

	const handleFormChange = (index, event) => {
		let data = [...inputFields];
		data[index][event.target.name] = event.target.value;
		setInputFields(data);
	};

	const handleSubjectChange = (index, event) => {
		let data = [...subjectFields];
		data[index][event.target.name] = event.target.value;
		setSubjectFields(data);
	};

	const onSubmit = data => {
		const newData = { ...data };
		Object.assign(newData, { number: value, languageSpeak: inputFields });
		Object.assign(newData, { number: value, languageTeach: subjectFields });

		const formattedData = {};

		newData.full_name !== '' ? (formattedData.name = newData.full_name) : '';

		if (newData.year !== '' && newData.month !== '' && newData.day !== '') {
			formattedData.dateOfBirth = `${newData.year}-${newData.month}-${newData.day}`;
		}
		newData.number !== null ? (formattedData.number = newData.number) : '';
		newData.country !== '' ? (formattedData.country = newData.country) : '';
		newData.gender !== ''
			? (formattedData.gender = newData.current_situation)
			: '';
		newData.current_situation !== ''
			? (formattedData.currentSituation = newData.current_situation)
			: '';
		newData.teaching_experience !== ''
			? (formattedData.teachingExperienceValue = newData.teaching_experience)
			: '';
		newData.languageSpeak.length > 0 && newData.languageSpeak[0].language !== ''
			? (formattedData.languageSpeak = newData.languageSpeak)
			: '';
		newData.languageTeach.length > 0 && newData.languageTeach[0].language !== ''
			? (formattedData.languageTeach = newData.languageTeach)
			: null;
		dispatch(updateTutorAbout(formattedData));
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
		<section
			style={{ minHeight: 'calc(100vh - 80px' }}
			className="pb-40 bg-white mx-10"
		>
			{loading ? (
				<Loader />
			) : (
				tutor && (
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="flex justify-between my-10 pt-6 px-10">
							<span>
								<h2 className="main-heading">About</h2>
								<h3 className="main-heading-subtitle">
									Update your photo and personal details here
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

						<div className="grid mt-10 w-full px-5 md:px-0 ">
							<div className="max-w-[682px] mx-10 border border-[#D9D9D9] rounded-lg space-y-3">
								<h2 className="sub-heading-18 border-b px-6 border-[#D9D9D9]">
									Personal Information
								</h2>
								<div className="px-6 space-y-3">
									<div>
										<label htmlFor="email-address-icon" className="label">
											Full Name
										</label>
										<div className="relative mt-[5px]">
											<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
												<HiOutlineUserCircle />
											</div>
											<input
												{...register('full_name')}
												type="text"
												id="email-address-icon"
												className="select_input pl-10"
												placeholder="John Doe"
												min={3}
											/>
										</div>
									</div>
									<div>
										<label
											htmlFor="email"
											className="label"
										>
											Email Address
										</label>
										<input
											type="email"
											id="email"
											className="select_input mt-[5px] text-[16px] text-[#808080]  "
											placeholder="@  For eg. : xyz123@gmail.com"
											min={3}
										/>
									</div>
									{/* <label htmlFor="password" className="label pt-3">
										Date of birth
									</label>
									<div className="grid max-h-[300px] grid-cols-3 gap-x-4 items-start">
										<div>
											<select
												{...register('year')}
												className="select_input"
												placeholder="Year"
											>
												<option value="" disabled selected>
													Year
												</option>

												{generateYearOptions()}
											</select>
										</div>
										<div>
											<select {...register('month')} className="select_input">
												<option value="" disabled selected>
													Month
												</option>
												{generateMonthOptions()}
											</select>
										</div>
										<div>
											<select {...register('day')} className="select_input">
												<option value="" disabled selected>
													Day
												</option>
												{generateDayOptions()}
											</select>
										</div>
									</div> */}
									{/* <div>
										<label className="label pt-3">
											Mobile Number{' '}
											<span className="text-gray-500 font-normal text-sm">
												(Optional)
											</span>
										</label>
										<PhoneInput
											placeholder="Enter your number"
											rules={{ required: true }}
											value={value}
											onChange={setValue}
											onFocus={() => setFocus(true)}
											onBlur={() => setFocus(false)}
											defaultCountry="US"
											className={`select_input outline-none ${
												focus ? 'ring-1 border-purple-500 ring-purple-500' : null
											}`}
										/>
									</div> */}
									{/* <div className="grid pt-3 max-h-[300px] grid-cols-2 gap-x-4 w-full items-start">
										<div>
											<label className="label">Country</label>
											<select {...register('country')} className="select_input">
												<option value="" disabled selected>
													Country
												</option>
												{options.map(({ value, label, index }) => (
													<option key={index} value={value + ',' + label}>
														{label}
													</option>
												))}
											</select>
										</div>
										<div>
											<label className="label">Gender</label>
											<select {...register('gender')} className="select_input">
												<option value="" disabled selected>
													Gender
												</option>
												<option value="male">Male</option>
												<option value="female">Female</option>
												<option value="not given">Not given</option>
											</select>
										</div>
									</div> */}
									<div className="pt-1">
										<label className="label	">Languages spoken</label>
										{inputFields?.map(({ language, level }, index) => (
											<div
												className={`${
													index > 0 && 'mt-3'
												} flex max-h-[300px] justify-between items-start space-x-4`}
												key={index}
											>
												<div className="w-full">
													<select
														name="language"
														value={language}
														className="select_input"
														onChange={event => handleFormChange(index, event)}
													>
														<option value="" disabled selected>
															Choose your language
														</option>
														{LanguageList.map(({ code, name }) => (
															<option key={code} value={name}>
																{name}
															</option>
														))}
													</select>
												</div>
												<div className="w-full">
													<select
														name="level"
														value={level}
														className="select_input w-full flex-1"
														onChange={event => handleFormChange(index, event)}
													>
														<option value="" disabled selected>
															Level
														</option>
														<option value="A1">A1</option>
														<option value="A2">A2</option>
														<option value="B1">B1</option>
														<option value="B2">B2</option>
														<option value="C1">C1</option>
														<option value="C2">C2</option>
														<option value="Native">Native</option>
													</select>
												</div>
												{!index <= 0 && (
													<p
														onClick={() => removeFields(index)}
														className="cursor-pointer hover:text-red-500 font-bold self-start mt-3"
													>
														<AiOutlineClose />
													</p>
												)}
											</div>
										))}

										<p
											onClick={addFields}
											className="text-sm cursor-pointer mt-2 text-blue-500"
										>
											+ Add another language
										</p>
									</div>

									<div className="pt-1">
										<label className="label mt-3">Subjects you teach</label>
										{subjectFields?.map(({ language }, index) => (
											<div
												className={`${
													index > 0 && 'mt-3'
												} flex max-h-[300px] justify-between items-start space-x-4`}
												key={index}
											>
												{index <= 4 ? (
													<div className="w-full flex gap-4">
														<select
															name="language"
															value={language}
															className="select_input"
															onChange={event =>
																handleSubjectChange(index, event)
															}
														>
															<option value="" disabled selected>
																Choose your subject
															</option>
															{TutorSubjectList.map(({ code, name }) => (
																<option key={code} value={code}>
																	{name}
																</option>
															))}
														</select>

														{!index <= 0 && (
															<p
																onClick={() => removeSubjectFields(index)}
																className="cursor-pointer hover:text-red-500 font-bold self-start mt-3"
															>
																<AiOutlineClose />
															</p>
														)}
													</div>
												) : (
													<p className="text-red-500">
														You cannot add more than 5 subjects
													</p>
												)}
											</div>
										))}
										{tutor.languageTeach.length < 5 && (
											<button
												type="button"
												disabled={
													subjectFields.length + tutor.languageTeach.length >= 5
												}
												onClick={addSubjectFields}
												className={`${
													subjectFields.length + tutor.languageTeach.length >=
														5 && 'text-red-500'
												} text-sm cursor-pointer mt-2 text-blue-500`}
											>
												+ Add another subject
											</button>
										)}
									</div>

									{tutor.languageTeach.length == 5 && (
										<p className="text-red-500">
											<span className="text-[#FF5A00] text-xl">*</span>
											Please contact support team to add or update another subject
										</p>
									)}
									<div className="pt-2">
										<label className="label">
											Describe your teaching experience
										</label>
										<select
											{...register('teaching_experience')}
											className="select_input"
										>
											<option value="" selected disabled>
												Describe your teaching experience
											</option>
											<option value="I have formal teaching experience">
												I have formal teaching experience
											</option>
											<option value="I have taught in an informal setting">
												I have taught in an informal setting
											</option>
											<option value="None of the above">None of the above</option>
										</select>
									</div>
									<div className="pt-2 pb-4">
										<label className="label">
											Describe your current situation
										</label>
										<select
											{...register('current_situation')}
											className="select_input"
										>
											<option value="" selected disabled>
												Describe your current situation
											</option>
											<option value="I have another teaching job">
												I have another teaching job
											</option>
											<option value="I have another non-teaching job">
												I have another non-teaching job
											</option>
											<option value="I am a student">I am a student</option>
											<option value="I have other commitments">
												I have other commitments
											</option>
											<option value="I have no other commitments">
												I have no other commitments
											</option>
										</select>
									</div>
								</div>
							</div>
						</div>
					</form>
				)
			)}
		</section>
	);
};

export default About;
About.requireAuth = true;
