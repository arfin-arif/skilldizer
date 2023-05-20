import React, { useState } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { AiOutlineClose } from 'react-icons/ai';

const Degree = props => {
	const generateYearOptions = () => {
		const arr = [];

		const startYear = 1950;
		const endYear = new Date().getFullYear();

		for (let i = endYear; i >= startYear; i--) {
			arr.push(<option value={i}>{i}</option>);
		}

		return arr;
	};
	const {
		register,
		errors,
		handleFromChange,
		handleToChange,
		currDegree,
		handleDegreeFormChange,
		index,
		removeDegree,
	} = props;

	let institution = 'institution';
	let degree = 'degree';
	let to = 'to';
	let from = 'from';
	let degreeType = 'degreeType';
	let institutionValue = currDegree.institution;
	let degreeValue = currDegree.degree;
	let toValue = currDegree.to;
	let fromValue = currDegree.from;
	let degreeTypeValue = currDegree.degreeType;

	if (index > 0) {
		institution = 'institution' + index;
		degree = 'degree' + index;
		to = 'to' + index;
		from = 'from' + index;
		degreeType = 'degreeType' + index;

		// * show values if user already entered them
		institutionValue =
			index === 1 ? currDegree.institution1 : currDegree.institution2;
		degreeValue = index === 1 ? currDegree.degree1 : currDegree.degree2;
		toValue = index === 1 ? currDegree.to1 : currDegree.to2;
		fromValue = index === 1 ? currDegree.from1 : currDegree.from2;
		degreeTypeValue =
			index === 1 ? currDegree.degreeType1 : currDegree.degreeType2;
	}

	return (
		<>
			<div className="flex gap-x-4 mt-8  items-center">
				<div className={index > 0 ? 'basis-2/5' : 'basis-1/2'}>
					<label className="label">Institution</label>

					<input
						{...register(`${institution}`, {
							required: 'institution is required',
						})}
						type="text"
						className="select_input"
						placeholder="University of Cambridge"
						value={institutionValue}
						onChange={event => handleDegreeFormChange(index, event)}
					/>
					<ErrorMessage
						errors={errors}
						name={institution}
						render={({ message }) => (
							<p className="text-sm text-red-600 italic">{message}</p>
						)}
					/>
				</div>
				<div className={index > 0 ? 'basis-2/5' : 'basis-1/2'}>
					<label className="label">Degree</label>

					<input
						{...register(`${degree}`, {
							required: 'Degree is required',
						})}
						type="text"
						className="select_input"
						placeholder="Computer Science"
						value={degreeValue}
						onChange={event => handleDegreeFormChange(index, event)}
					/>
					<ErrorMessage
						errors={errors}
						name={degree}
						render={({ message }) => (
							<p className="text-sm text-red-600 italic">{message}</p>
						)}
					/>
				</div>
				{index > 0 && (
					<p
						onClick={() => removeDegree(index)}
						className="cursor-pointer hover:text-red-500 font-bold mt-3 basis-1/12"
					>
						<AiOutlineClose />
					</p>
				)}
			</div>
			<div className="mt-3">
				<label className="label">Degree type</label>
				<select
					{...register(`${degreeType}`, {
						required: 'Degree Type is required',
					})}
					className="select_input"
					onChange={event => handleDegreeFormChange(index, event)}
					value={degreeTypeValue}
				>
					<option value="" disabled selected>
						Choose degree type
					</option>

					<option value="Bachelor’s degree">Bachelor’s degree</option>
					<option value="Master’s degree">Master’s degree</option>
					<option value="Doctorate degree">Doctorate degree</option>
					<option value="no degree">
						I don&apos;t have a Bachelor’s degree yet.
					</option>
				</select>
				<ErrorMessage
					errors={errors}
					name={degreeType}
					render={({ message }) => (
						<p className="text-sm text-red-600 italic">{message}</p>
					)}
				/>
			</div>
			{/* {degreeValue !== 'no degree' && ( */}
			<div className="grid grid-cols-2 mt-3 items-center gap-x-4 max-h-[300px] ">
				<div>
					<label className="label">From</label>
					<select
						{...register(`${from}`, {
							required: 'Field is required',
						})}
						className="select_input w-full"
						onChange={event => handleDegreeFormChange(index, event)}
						value={fromValue}
					>
						<option value="" disabled selected>
							From
						</option>

						{generateYearOptions()}
					</select>
					<ErrorMessage
						errors={errors}
						name={from}
						render={({ message }) => (
							<p className="text-sm text-red-600 italic">{message}</p>
						)}
					/>
				</div>
				<div>
					<label className="label">To</label>
					<select
						{...register(`${to}`, {
							required: 'Field id required',
						})}
						className="select_input w-full"
						onChange={event => handleDegreeFormChange(index, event)}
						value={toValue}
					>
						<option value="" disabled selected>
							To
						</option>
						<option className="present">Present</option>

						{generateYearOptions()}
					</select>
					<ErrorMessage
						errors={errors}
						name={to}
						render={({ message }) => (
							<p className="text-sm text-red-600 italic">{message}</p>
						)}
					/>
				</div>
			</div>
			{/* )} */}
			{/* {fromValue && toValue && fromValue >= toValue && (
				<p className="text-red-600">
					Degree end date should be bigger than start date
				</p>
			)} */}
		</>
	);
};

export default Degree;
