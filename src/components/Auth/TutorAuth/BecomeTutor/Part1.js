import React, { useEffect, useMemo, useState } from 'react';
import countryList from 'react-select-country-list';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { AiOutlineClose } from 'react-icons/ai';
import { v4 as uuidv4 } from 'uuid';
import { CiUser } from 'react-icons/ci';
import { ErrorMessage } from '@hookform/error-message';
import { useForm } from 'react-hook-form';
import LanguageList from '../../../data/LanguageList.json';
import TutorSubjectList from '../../../data/TutorSubjectList.json';
import StepComponent from '../../../Utils/Step';
import MobileStepper from '../../../Utils/MobileStepper';
import router from 'next/router';

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

const BecomeTutor = () => {
	const options = useMemo(() => countryList().getData(), []);
	const [checked, setChecked] = useState(false);
	const [countryCode, setCountryCode] = useState(null);

	const [value, setValue] = useState(() => {
		const information = JSON.parse(localStorage.getItem('profileInformation'));
		if (information?.number) {
			return information?.number;
		} else {
			return null;
		}
	});

	const [inputFields, setInputFields] = useState(() => {
		const saveInputField = JSON.parse(
			localStorage.getItem('profileInformation')
		);
		if (saveInputField?.languageSpeak) {
			return saveInputField?.languageSpeak;
		} else {
			return [{ language: '', level: '' }];
		}
	});

	const [subjectFields, setSubjectFields] = useState(() => {
		const savedInput = localStorage.getItem('languagesInput');
		if (savedInput) {
			return JSON.parse(savedInput);
		} else {
			return [{ language: '' }];
		}
	});

	const [focus, setFocus] = useState(false);
	const [profileInformation, setProfileInformation] = useState(() => {
		const information = localStorage.getItem('profileInformation');
		if (information) {
			return JSON.parse(information);
		} else {
			return null;
		}
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		defaultValues: profileInformation,
	});

	useEffect(() => {
		localStorage.setItem('languagesInput', JSON.stringify(subjectFields));
	}, [subjectFields]);

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
		localStorage.setItem('profileInformation', JSON.stringify(newData));
		const degreeCount = localStorage.getItem('degreeCount');
		if (!degreeCount) {
			localStorage.setItem('degreeCount', 0);
			localStorage.setItem('certificateCount', 0);
		}
		router.push('/become-tutor/part2');
	};

	return (
		<section style={{ minHeight: 'calc(100vh - 80px' }} className="pb-40">
			<StepComponent activeStep={0} />
			<MobileStepper activeStep={0} />
			<div className="grid place-items-center mt-14 w-full px-5 md:px-0">
				<form onSubmit={handleSubmit(onSubmit)} className="max-w-lg">
					<label htmlFor="email-address-icon" className="label">
						Full Name
					</label>
					<div className="relative">
						<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
							<CiUser />
						</div>
						<input
							{...register('full_name', {
								required: 'Full name is required',
							})}
							type="text"
							id="email-address-icon"
							className="select_input pl-10"
							placeholder="John Doe"
							min={3}
						/>
					</div>
					<ErrorMessage
						errors={errors}
						name="full_name"
						render={({ message }) => (
							<p className="text-sm text-red-600 italic">{message}</p>
						)}
					/>
					<label htmlFor="password" className="label mt-3">
						Date of birth
					</label>
					<div className="grid max-h-[300px] grid-cols-3 gap-x-4 items-start">
						<div>
							<select
								{...register('year', {
									required: 'Year is required',
								})}
								className="select_input"
								placeholder="Year"
							>
								<option value="" disabled selected>
									Year
								</option>

								{generateYearOptions()}
							</select>
							<ErrorMessage
								errors={errors}
								name="year"
								render={({ message }) => (
									<p className="text-sm text-red-600 italic">{message}</p>
								)}
							/>
						</div>
						<div>
							<select
								{...register('month', {
									required: 'Month is required',
								})}
								className="select_input"
							>
								<option value="" disabled selected>
									Month
								</option>
								{generateMonthOptions()}
							</select>
							<ErrorMessage
								errors={errors}
								name="month"
								render={({ message }) => (
									<p className="text-sm text-red-600 italic">{message}</p>
								)}
							/>
						</div>
						<div>
							<select
								{...register('day', {
									required: 'Day is required',
								})}
								className="select_input"
							>
								<option value="" disabled selected>
									Day
								</option>
								{generateDayOptions()}
							</select>
							<ErrorMessage
								errors={errors}
								name="day"
								render={({ message }) => (
									<p className="text-sm text-red-600 italic">{message}</p>
								)}
							/>
						</div>
					</div>
					<div>
						<label className="label mt-3">
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
					</div>
					<div className="grid mt-3 max-h-[300px] grid-cols-2 gap-x-4 w-full items-start">
						<div>
							<label className="label">Country</label>
							<select
								{...register('country', {
									required: 'Country is required',
								})}
								className="select_input"
							>
								<option value="" disabled selected>
									Country
								</option>
								{options.map(({ value, label, index }) => (
									<option key={index} value={value + ',' + label}>
										{label}
									</option>
								))}
							</select>
							<ErrorMessage
								errors={errors}
								name="country"
								render={({ message }) => (
									<p className="text-sm text-red-600 italic">{message}</p>
								)}
							/>
						</div>
						<div>
							<label className="label">Gender</label>
							<select
								{...register('gender', {
									required: 'Gender is required',
								})}
								className="select_input"
							>
								<option value="" disabled selected>
									Gender
								</option>
								<option value="male">Male</option>
								<option value="female">Female</option>
								<option value="not given">Not given</option>
							</select>
							<ErrorMessage
								errors={errors}
								name="gender"
								render={({ message }) => (
									<p className="text-sm text-red-600 italic">{message}</p>
								)}
							/>
						</div>
					</div>
					<div className="mt-3 ">
						<label className="label mt-3">Languages spoken</label>
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
					<div className="mt-3 ">
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
											onChange={event => handleSubjectChange(index, event)}
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
						<button
							type="button"
							disabled={subjectFields.length >= 6}
							onClick={addSubjectFields}
							className={`${
								subjectFields.length >= 6 && 'text-red-500'
							} text-sm cursor-pointer mt-2 text-blue-500`}
						>
							+ Add another subject
						</button>
					</div>
					<div className="mt-2">
						<label className="label">Describe your teaching experience</label>
						<select
							{...register('teaching_experience', {
								required: 'Teaching experience is required',
							})}
							className="select_input"
						>
							<option value="I have formal teaching experience">
								I have formal teaching experience
							</option>
							<option value="I have taught in an informal setting">
								I have taught in an informal setting
							</option>
							<option value="None of the above">None of the above</option>
						</select>
						<ErrorMessage
							errors={errors}
							name="teaching_experience"
							render={({ message }) => (
								<p className="text-sm text-red-600 italic">{message}</p>
							)}
						/>
					</div>
					<div className="mt-2">
						<label className="label">Describe your current situation</label>
						<select
							{...register('current_situation', {
								required: 'Current situation is required',
							})}
							className="select_input"
						>
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
						<ErrorMessage
							errors={errors}
							name="current_situation"
							render={({ message }) => (
								<p className="text-sm text-red-600 italic">{message}</p>
							)}
						/>
					</div>
					<div className="mt-4 ">
						<span className="flex gap-2">
							<input
								{...register('age', {
									required: 'Please confirm you are 18+',
								})}
								checked={checked}
								onChange={e => setChecked(e.target.checked)}
								type="checkbox"
								className="mt-1 cursor-pointer scale-[1.3] accent-[#FF5A00]"
							/>
							<p>I confirm I&apos;m over 18</p>
						</span>
						<ErrorMessage
							errors={errors}
							name="age"
							render={({ message }) => (
								<p className="text-sm text-red-600 italic">{message}</p>
							)}
						/>
					</div>
					<button className="button w-full mt-5" type="submit">
						Save & Continue
					</button>
				</form>
			</div>
		</section>
	);
};

export default BecomeTutor;
