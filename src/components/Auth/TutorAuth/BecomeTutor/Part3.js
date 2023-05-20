import { ErrorMessage } from '@hookform/error-message';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import router from 'next/router';
import StepComponent from '../../../Utils/Step';
import MobileStepper from '../../../Utils/MobileStepper';
import Degree from './Degree';
import axios from 'axios';
import { AiOutlineClose } from 'react-icons/ai';

const EducationAndExperience = () => {
	const [fromValue, setFromValue] = useState(null);
	const [toValue, setToValue] = useState(null);
	const [degreeDocuments, setDegreesDocuments] = useState([]);
	const [degreeDocumentError, setDegreesDocumentError] = useState(false);
	const [certificationDocuments, setCertificationDocuments] = useState([]);
	const [certificationDocumentError, setCertificationsDocumentError] =
		useState(false);
	const [degreeErrorIndex, setDegreesErrorIndex] = useState();
	const [certificationErrorIndex, setCertificationsErrorIndex] = useState();
	const degreeCount = localStorage.getItem('degreeCount');
	const certificateCount = localStorage.getItem('certificateCount');
	const [eductionAndExperience, setEductionAndExperience] = useState(() => {
		const information = localStorage.getItem('eductionAndExperience');
		if (information) {
			return JSON.parse(information);
		} else {
			return null;
		}
	});

	const [certification, setCertification] = useState(() => {
		const eductionAndExperience = JSON.parse(
			localStorage.getItem('eductionAndExperience')
		);
		if (eductionAndExperience?.certification) {
			return eductionAndExperience?.certification;
		} else {
			return [{}];
		}
	});

	const [degrees, setDegrees] = useState(() => {
		const eductionAndExperience = JSON.parse(
			localStorage.getItem('eductionAndExperience')
		);
		if (eductionAndExperience?.degrees) {
			return eductionAndExperience?.degrees;
		} else {
			return [
				{ institution: '', degree: '', degreeType: '', from: '', to: '' },
			];
		}
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		defaultValues: eductionAndExperience,
	});

	const handleFromChange = e => {
		setFromValue(e.target.value);
	};
	const handleToChange = e => {
		setToValue(e.target.value);
	};

	// * Upload Degree Documents
	const handleDegreeDocument = (event, index) => {
		let data = [...degrees];
		data[index][event.target.name] = event.target.files[0].name;
		setDegrees(data);

		setDegreesDocuments([
			...degreeDocuments,
			{ [event.target.name]: event.target.files[0] },
		]);
	};
	const handleCertificationDocument = (event, index) => {
		let data = [...certification];
		data[index][event.target.name] = event.target.files[0].name;
		setCertification(data);

		setCertificationDocuments([
			...certificationDocuments,
			{ [event.target.name]: event.target.files[0] },
		]);
	};
	const handleDegreeFormChange = (index, event) => {
		let data = [...degrees];
		data[index][event.target.name] = event.target.value;
		setDegrees(data);
	};

	const removeDegree = index => {
		let data = [...degrees];
		data.splice(index, 1);
		setDegrees(data);
		if (degreeCount == 2) {
			localStorage.setItem('degreeCount', 1);
		}
		if (degreeCount == 1) {
			localStorage.setItem('degreeCount', 0);
		}
	};

	const addDegree = () => {
		if (degreeCount == 0) {
			let newDegree = {
				institution1: '',
				degree1: '',
				degreeType1: '',
				from1: '',
				to1: '',
			};
			setDegrees([...degrees, newDegree]);
			localStorage.setItem('degreeCount', 1);
		}
		if (degreeCount == 1) {
			let newDegree = {
				institution2: '',
				degree2: '',
				degreeType2: '',
				from2: '',
				to2: '',
			};
			setDegrees([...degrees, newDegree]);
			localStorage.setItem('degreeCount', 2);
		}
	};

	// * Certification
	const addCertificate = () => {
		let newCertificate = {};
		setCertification([...certification, newCertificate]);
		localStorage.setItem('certificateCount', Number(certificateCount) + 1);
	};

	const removeCertification = index => {
		let data = [...certification];
		data.splice(index, 1);
		setCertification(data);
		localStorage.setItem('certificateCount', Number(certificateCount) - 1);
	};

	// * Submitting Data
	const onSubmit = async data => {
		const degreeCount = localStorage.getItem('degreeCount');

		// * Degree Errors
		if (!degrees[0].degreeDocument || degrees[0].degreeDocument === undefined) {
			if (degreeDocuments.length < 1) {
				setDegreesDocumentError(true);
				setDegreesErrorIndex(0);
				return;
			}
		}

		if (degreeCount == 1) {
			if (
				!degrees[1].degreeDocument1 ||
				degrees[1].degreeDocument1 === undefined
			) {
				if (degreeDocuments.length < 2) {
					setDegreesDocumentError(true);
					setDegreesErrorIndex(1);
					return;
				}
			}
		}
		if (degreeCount == 2) {
			if (
				!degrees[2].degreeDocument2 ||
				degrees[2].degreeDocument2 === undefined
			) {
				if (degreeDocuments.length < 3) {
					setDegreesDocumentError(true);
					setDegreesErrorIndex(2);
					return;
				}
			}
		}

		// * Diploma Errors
		for (let i = 0; i <= +certificateCount; i++) {
			if (
				!certification[i].certificationDocument ||
				certification[i].certificationDocument === undefined
			) {
				if (certificationDocuments.length < i + 1) {
					setCertificationsDocumentError(true);
					setCertificationsErrorIndex(i);
					return;
				}
			}
		}

		// * Saving Education Data
		const newData = {};
		Object.assign(newData, { certification: certification });
		Object.assign(newData, { degrees: degrees });
		Object.assign(newData, { aboutMe: data.aboutMe });
		Object.assign(newData, { describeTeaching: data.describeTeaching });
		Object.assign(newData, { headline: data.headline });
		Object.assign(newData, { teachingExperience: data.teachingExperience });
		localStorage.setItem('eductionAndExperience', JSON.stringify(newData));

		if (degreeDocuments.length > 0) {
			const degreesFromData = new FormData();

			// * Uploading Degrees
			for (let i = 0; i < degreeDocuments.length; i++) {
				if (i === 0) {
					degreesFromData.append('degrees', degreeDocuments[i].degreeDocument);
				}
				if (i === 1) {
					degreesFromData.append('degrees', degreeDocuments[i].degreeDocument1);
				}
				if (i === 2) {
					degreesFromData.append('degrees', degreeDocuments[i].degreeDocument2);
				}
			}

			axios.post(
				`${process.env.REACT_APP_BACKEND_API}/api/v1/tutor/uploadDegrees`,
				degreesFromData,
				{
					withCredentials: true,
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				}
			);
		}
		const certificationFromData = new FormData();

		// * Uploading Certificate
		if (certificationDocuments.length > 0) {
			for (let i = 0; i < certificationDocuments.length; i++) {
				certificationFromData.append(
					'certifications',
					certificationDocuments[i].certificationDocument
				);
			}

			axios.post(
				`${process.env.REACT_APP_BACKEND_API}/api/v1/tutor/uploadCertificates`,
				certificationFromData,
				{
					withCredentials: true,
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				}
			);
		}

		router.push('/become-tutor/part4');
	};

	return (
		<section style={{ minHeight: 'calc(100vh - 80px)' }} className="pb-20">
			<StepComponent activeStep={2} />
			<MobileStepper activeStep={2} />

			<div className="grid place-items-center">
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="mt-14 md:max-w-lg md:min-w-[512px] px-5 md:px-0"
				>
					{degrees?.map((currDegree, index) => (
						<div key={index}>
							<Degree
								currDegree={currDegree}
								register={register}
								errors={errors}
								handleFromChange={handleFromChange}
								handleToChange={handleToChange}
								fromValue={fromValue}
								toValue={fromValue}
								handleDegreeFormChange={handleDegreeFormChange}
								index={index}
								removeDegree={removeDegree}
							/>
							<div>
								<label className="label mt-3">Diploma verified badge</label>
								<input
									onChange={event => handleDegreeDocument(event, index)}
									name={index > 0 ? `degreeDocument${index}` : 'degreeDocument'}
									className="select_input"
									type="file"
									id="customFile"
								/>
								<label className="custom-file-label" htmlFor="customFile">
									{index === 1
										? currDegree.degreeDocument1
											? index === 2
											: currDegree.degreeDocument2
										: currDegree.degreeDocument}
								</label>
								{degreeErrorIndex === index && degreeDocumentError && (
									<p className="text-red-600">Degree is required</p>
								)}
							</div>
						</div>
					))}

					{degreeCount < 2 && (
						<p
							onClick={addDegree}
							className="text-sm cursor-pointer mt-2 text-blue-500"
						>
							+ Add another degree
						</p>
					)}

					<label className="label mt-3">Teaching experience</label>
					<select
						{...register('teachingExperience', {
							required: 'Field id required',
						})}
						className="select_input w-full"
					>
						<option value="" disabled selected>
							Select your experience
						</option>
						<option className="1year">1 year</option>
						<option className="3year">over 3 year</option>
						<option className="5year">over 5 year</option>
						<option className="10year">over 10 year</option>
						<option className="don't have experience">
							I don&apos;t have any experience yet
						</option>
					</select>
					<ErrorMessage
						errors={errors}
						name="teachingExperience"
						render={({ message }) => (
							<p className="text-sm text-red-600 italic">{message}</p>
						)}
					/>

					{certification.map((certification, index) => (
						<div key={certification.id}>
							<div className="flex justify-center items-center gap-x-2">
								<span className={index > 0 ? 'basis-11/12' : 'basis-full'}>
									<label className="label mt-3">
										Teaching Certified verified badge
									</label>
									<input
										onChange={event =>
											handleCertificationDocument(event, index)
										}
										name="certificationDocument"
										className="select_input"
										type="file"
									/>
								</span>
								{index > 0 && (
									<p
										onClick={() => removeCertification(index)}
										className="cursor-pointer hover:text-red-500 font-bold mt-3 basis-1/12"
									>
										<AiOutlineClose />
									</p>
								)}
							</div>
							<div>
								{certificationErrorIndex === index &&
									certificationDocumentError && (
										<p className="text-red-600">certification is required</p>
									)}
							</div>
						</div>
					))}
					{certificateCount < 7 && (
						<p
							onClick={addCertificate}
							className="text-sm cursor-pointer mt-2 text-blue-500"
						>
							+ Add another certificate
						</p>
					)}
					<div className="mt-5">
						<label className="label">
							<h1 className="text-xl">
								Description for English-speaking students
							</h1>
						</label>

						<input
							{...register('headline', {
								required: 'Headline description is required',
							})}
							type="text"
							className="select_input"
							placeholder="write your headline in English"
						/>
						<h1 className="text-gray-500">
							Good example: &quot;Certified tutor with 5 years of
							experience&quot;
						</h1>
						<ErrorMessage
							errors={errors}
							name="headline"
							render={({ message }) => (
								<p className="text-sm text-red-600 italic">{message}</p>
							)}
						/>
					</div>
					<label className="label mt-3">About me</label>
					<textarea
						{...register('aboutMe', {
							required: 'Field is required',
						})}
						className="select_input"
						rows={4}
					/>
					<ErrorMessage
						errors={errors}
						name="aboutMe"
						render={({ message }) => (
							<p className="text-sm text-red-600 italic">{message}</p>
						)}
					/>
					<label className="label mt-3">
						Describe about your teaching style and methodology
					</label>
					<textarea
						{...register('describeTeaching', {
							required: 'Field is required',
						})}
						className="select_input"
						rows={4}
					/>
					<ErrorMessage
						errors={errors}
						name="describeTeaching"
						render={({ message }) => (
							<p className="text-sm text-red-600 italic">{message}</p>
						)}
					/>
					<div className="flex items-center space-x-3 mt-5">
						<p
							onClick={() => router.push('/become-tutor/part2')}
							className="button"
						>
							Back
						</p>
						<button
							disabled={fromValue && toValue && fromValue >= toValue}
							type="submit"
							className="button"
						>
							Save & Continue
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default EducationAndExperience;
