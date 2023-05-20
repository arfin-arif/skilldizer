import React, { useEffect, useMemo, useState } from 'react';
import TimezoneSelect, { allTimezones } from 'react-timezone-select';
import spacetime from 'spacetime';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { GrAdd } from 'react-icons/gr';
import { BsCurrencyDollar } from 'react-icons/bs';
import router from 'next/router';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import {
	clearError,
	clearSuccess,
} from '../../../../store/reducer/tutorReducer';
import { openAlert } from '../../../../store/reducer/alertReducer';
import { tutorRegisterAction } from '../../../../store/actions/tutorAction';
import AlertComponent from '../../../Utils/AlertComponent';
import StepComponent from '../../../Utils/Step';
import MobileStepper from '../../../Utils/MobileStepper';
import { registerTutorAction } from '../../../../store/actions/userAction';
import AuthService from '../../../../services/auth.service';

const generateFormTimeOptions = () => {
	const arr = [];
	for (let i = 1; i <= 24; i++) {
		arr.push(
			<option selected={i === 9} value={i}>
				{i}: 00
			</option>
		);
	}
	return arr;
};
const generateToTimeOptions = () => {
	const arr = [];
	for (let i = 1; i <= 24; i++) {
		arr.push(
			<option selected={i === 17} value={i}>
				{i}: 00
			</option>
		);
	}
	return arr;
};

const ScheduleAndPricing = () => {
	const [tz, setTz] = useState(
		Intl.DateTimeFormat().resolvedOptions().timeZone
	);
	const [datetime, setDatetime] = useState(spacetime.now());
	const [scheduleInput, setScheduleInput] = useState(() => {
		const savedInput = localStorage.getItem('scheduleInput');
		if (savedInput) {
			return JSON.parse(savedInput);
		} else {
			return [];
		}
	});
	const [scheduleFields, setScheduleFields] = useState(() => {
		const saveInputField = JSON.parse(localStorage.getItem('scheduleFields'));
		if (saveInputField) {
			return saveInputField;
		} else {
			return [];
		}
	});

	const [checkbox, setCheckbox] = useState([
		{
			day: 'Monday',
			checked: true,
			availability: [
				{
					startTime: 9,
					endTime: 17,
				},
			],
		},
		{
			day: 'Tuesday',
			checked: true,
			availability: [{ startTime: 9, endTime: 17 }],
		},
		{
			day: 'Wednesday',
			checked: true,
			availability: [{ startTime: 9, endTime: 17 }],
		},
		{
			day: 'Thursday',
			checked: true,
			availability: [{ startTime: 9, endTime: 17 }],
		},
		{
			day: 'Friday',
			checked: true,
			availability: [{ startTime: 9, endTime: 17 }],
		},
		{
			day: 'Saturday',
			checked: true,
			availability: [{ startTime: 9, endTime: 17 }],
		},
		{
			day: 'Sunday',
			checked: true,
			availability: [{ startTime: 9, endTime: 17 }],
		},
	]);

	const handleChecked = (index, event) => {
		let data = [...checkbox];

		data[index].checked = event.target.checked;
		setCheckbox(data);
	};

	const handleFormChange = (index, ind, event) => {
		let data = [...checkbox];
		data[index].availability[ind][event.target.name] = event.target.value;
		setCheckbox(data);
	};

	const dispatch = useDispatch();
	const { loading, error, message } = useSelector(state => state.tutor);
	const { user } = useSelector(state => state.user);

	const [tutorRegisterData, setTutorRegisterData] = useState({});

	useMemo(() => {
		const tzValue = tz.value ?? tz;
		setDatetime(datetime.goto(tzValue));
	}, [tz]);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	useEffect(() => {
		localStorage.setItem('scheduleInput', JSON.stringify(scheduleInput));
	}, [scheduleInput]);

	useEffect(() => {
		const profileInformation = JSON.parse(
			localStorage.getItem('profileInformation')
		);
		const profileImage = JSON.parse(localStorage.getItem('profileImage'));
		const eductionAndExperience = JSON.parse(
			localStorage.getItem('eductionAndExperience')
		);
		const introduceVideo = JSON.parse(localStorage.getItem('introduceVideo'));
		const languagesInput = JSON.parse(localStorage.getItem('languagesInput'));

		setTutorRegisterData({
			profileInformation,
			profileImage,
			eductionAndExperience,
			introduceVideo,
			languagesInput,
		});
	}, []);

	const removeFields = (index, ind) => {
		let data = [...checkbox];
		data[index].availability.splice(ind, 1);
		setCheckbox(data);
	};

	const addFields = index => {
		let data = [...checkbox];
		data[index].availability.push({ startTime: 9, endTime: 17 });
		setCheckbox(data);
	};

	const onSubmit = scheduleData => {
		console.log('part5.js');
		const {
			profileInformation,
			profileImage,
			eductionAndExperience,
			introduceVideo,
			languagesInput,
		} = tutorRegisterData;

		if (
			!profileInformation ||
			!profileImage ||
			!eductionAndExperience ||
			!introduceVideo ||
			!languagesInput
		) {
			dispatch(
				openAlert({
					severity: 'error',
					message: 'Please check and complete all steps to register as tutor',
				})
			);
			dispatch(clearError());
			return;
		} else {
			console.log('inside else of onSubmit');
			dispatch(

				tutorRegisterAction(
					user,
					profileInformation,
					profileImage,
					eductionAndExperience,
					introduceVideo,
					scheduleData,
					tz,
					checkbox,
					languagesInput
				)
			);
		}
	};



	useEffect(() => {
		if (error) {
			router.push('/become-tutor/success'); //i enter this 
			dispatch(openAlert({ severity: 'error', message: error }));
			dispatch(clearError());
			return;
		}

		if (message) {
			dispatch(clearSuccess());
			router.push('/become-tutor/success');
		}
	}, [error, message, dispatch]);

	return (
		<section style={{ minHeight: 'calc(100vh - 80px)' }} className="pb-20">
			<StepComponent activeStep={4} />
			<MobileStepper activeStep={4} />
			<div className="grid place-items-center">
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="md:max-w-lg mt-10 md:min-w-[400px]"
				>
					<label className="text-sm block font-semibold text-gray-700 mb-2">
						Choose your timezone
					</label>
					<TimezoneSelect
						className="select_input p-1"
						value={tz}
						onChange={setTz}
						timezones={{
							...allTimezones,
							'America/Lima': 'Pittsburgh',
							'Europe/Berlin': 'Frankfurt',
						}}
					/>
					{!tz && (
						<p className="text-sm text-red-600 italic">Timezone is required</p>
					)}

					<div className=" mt-3">
						<label className=" text-sm block font-semibold text-gray-700 mb-2">
							Hourly rate (USD)
						</label>
						<div className="relative">
							<div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
								<BsCurrencyDollar />
							</div>
							<input
								{...register('price', {
									required: 'Hourly rate is required',
								})}
								min={10}
								type="number"
								className="select_input pl-9"
								placeholder="hourly rate"
							/>
						</div>
						<ErrorMessage
							errors={errors}
							name="price"
							render={({ message }) => (
								<p className="text-sm text-red-600 italic">{message}</p>
							)}
						/>
					</div>
					{checkbox?.map(({ day, checked, availability }, index) => (
						<div key={index} className="mt-5">
							<div className="flex items-center space-x-1">
								<input
									value={day}
									name={day}
									checked={checked}
									onChange={event => handleChecked(index, event)}
									type="checkbox"
								/>
								<h2 className="text-sm font-semibold text-gray-700">{day}</h2>
							</div>
							{checked && (
								<>
									{availability?.map(({ startTime, endTime }, ind) => {
										return (
											<div
												key={ind}
												className="flex items-center space-x-3 mt-2"
											>
												<select
													name="startTime"
													value={startTime}
													onChange={event =>
														handleFormChange(index, ind, event)
													}
													className="select_input"
												>
													{generateFormTimeOptions()}
												</select>
												<p className="text-sm text-gray-700">to</p>
												<select
													name="endTime"
													value={endTime}
													className="select_input"
													onChange={event =>
														handleFormChange(index, ind, event)
													}
												>
													{generateToTimeOptions()}
												</select>
												{ind <= 0 ? (
													<p
														onClick={() => addFields(index)}
														className="cursor-pointer text-lg hover:text-green-500"
													>
														<GrAdd />
													</p>
												) : (
													<p
														onClick={() => removeFields(index, ind)}
														className="cursor-pointer text-lg hover:text-green-500"
													>
														<AiOutlineClose />
													</p>
												)}
											</div>
										);
									})}
								</>
							)}
						</div>
					))}
					<div className="flex items-center space-x-3 mt-7">
						<p
							onClick={() => router.push('/become-tutor/part4')}
							className="button "
						>
							Back
						</p>
						<button
							disabled={loading}
							type="submit"
							className="button disabled:bg-opacity-50 disabled:cursor-not-allowed"
						>
							{loading ? (
								<>
									<svg
										role="status"
										className="inline mr-2 w-4 h-4 text-white animate-spin dark:text-gray-600 fill-white"
										viewBox="0 0 100 101"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
											fill="currentColor"
										/>
										<path
											d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
											fill="currentFill"
										/>
									</svg>
									Processing...
								</>
							) : (
								'Submit'
							)}
						</button>
					</div>
				</form>
			</div>
			<AlertComponent />
		</section>
	);
};

export default ScheduleAndPricing;
