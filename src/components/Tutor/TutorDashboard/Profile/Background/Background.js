import React, { useState } from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import Certification from './Certification';
import Education from './Education';
import Experience from './Experience';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import {
	clearError,
	clearSuccess,
} from '../../../../../store/reducer/tutorReducer';
import { openAlert } from '../../../../../store/reducer/alertReducer';

const Background = () => {
	const dispatch = useDispatch();

	const [certificateCount, setCertificateCount] = useState([{}]);
	const [degreeCount, setDegreeCount] = useState([{}]);
	const [experienceCount, setExperienceCount] = useState([{}]);
	const [certificationError, setCertificationError] = useState(false);
	const [degreeError, setDegreeError] = useState(false);
	const [experienceError, setExperienceError] = useState(false);

	// * Certification
	const handleCertificateClick = () => {
		if (certificateCount.length === 5) {
			setCertificationError(true);
			return;
		}
		let newCertificate = {};
		setCertificateCount([...certificateCount, newCertificate]);
	};

	const removeCertification = index => {
		let data = [...certificateCount];
		data.splice(index, 1);
		setCertificateCount(data);
	};

	// * Degree
	const handleDegreeClick = () => {
		if (degreeCount.length === 3) {
			setDegreeError(true);
			return;
		}
		let newDegree = {};
		setDegreeCount([...degreeCount, newDegree]);
	};

	const removeDegree = index => {
		let data = [...degreeCount];
		data.splice(index, 1);
		setDegreeCount(data);
	};

	// * Experience
	const handleExperienceClick = () => {
		if (experienceCount.length === 3) {
			setExperienceError(true);
			return;
		}
		let newExperience = {};
		setExperienceCount([...experienceCount, newExperience]);
	};

	const removeExperience = index => {
		let data = [...experienceCount];
		data.splice(index, 1);
		setExperienceCount(data);
	};

	const handleSubmit = () => {
		dispatch(
			openAlert({ severity: 'success', message: 'Degree updated successfully' })
		);
		dispatch(clearSuccess());
	};

	const style = { color: '#00C013' };
	const icon = { color: '#257CFF' };
	return (
		<section className="pb-40  my-10 ml-10 mr-20 pt-8 ">
			<div className="bg-white py-6 px-10">
				<h2 className="main-heading">Profile Verification</h2>

				<div className="bg-[#E5F9E7] py-4 px-8 flex gap-4 mt-2">
					<span className="mt-2">
						<BsFillCheckCircleFill style={style} size={20} />
					</span>
					<span>
						<h3 className="font-[400] text-[18px]">You passed verification</h3>
						<p className="font-[400] text-[16px] text-[#454B45] ">
							You can withdraw your money safely. Plus, we marked your profile
							with a blue badge to show students that you’re a verified tutor
						</p>
					</span>
				</div>
			</div>

			{/* // * Certification */}
			{certificateCount.map((certificate, index) => (
				<Certification
					key={index}
					index={index}
					removeCertification={removeCertification}
				/>
			))}
			<div className="bg-white px-8 pb-8 ">
				<span
					className="flex items-center gap-2 cursor-pointer"
					onClick={handleCertificateClick}
				>
					<AiOutlinePlusCircle style={icon} size={22} />
					<h3 className="font-[400] text-[15px] text-[#257CFF]">
						Add Another Certificate
					</h3>
				</span>

				<button
					type="button"
					className="form-btn-save mt-3"
					onClick={handleSubmit}
				>
					Save
				</button>

				{certificationError && (
					<p className="text-red-500">You can only add upto 5 certificates</p>
				)}
			</div>

			{/* // * Education */}
			{degreeCount.map((degree, index) => (
				<Education key={index} index={index} removeDegree={removeDegree} />
			))}

			<div className="bg-white px-8 pb-8 ">
				<span
					className="flex items-center gap-2 cursor-pointer"
					onClick={handleDegreeClick}
				>
					<AiOutlinePlusCircle style={icon} size={22} />
					<h3 className="font-[400] text-[15px] text-[#257CFF]">
						Add Another Education
					</h3>
				</span>

				<button
					type="button"
					className="form-btn-save mt-3"
					onClick={handleSubmit}
				>
					Save
				</button>

				{degreeError && (
					<p className="text-red-500">You can only add upto 3 degrees</p>
				)}
			</div>

			{/* // * Experience */}
			{experienceCount.map((experience, index) => (
				<Experience
					key={index}
					index={index}
					removeExperience={removeExperience}
				/>
			))}

			<div className="bg-white px-8 pb-8 ">
				<span
					className="flex items-center gap-2 cursor-pointer"
					onClick={handleExperienceClick}
				>
					<AiOutlinePlusCircle style={icon} size={22} />
					<h3 className="font-[400] text-[15px] text-[#257CFF]">
						Add Another Job
					</h3>
				</span>

				<button
					type="button"
					className="form-btn-save mt-3"
					onClick={handleSubmit}
				>
					Save
				</button>

				{experienceError && (
					<p className="text-red-500">You can only add upto 3 experiences</p>
				)}
			</div>
		</section>
	);
};

export default Background;
