import React from 'react';
import { openAlert } from '../../../../store/reducer/alertReducer';
import { clearSuccess } from '../../../../store/reducer/userReducer';
import { useDispatch } from 'react-redux';

const ClassBooking = () => {
	const dispatch = useDispatch();
	const handleSave = () => {
		dispatch(
			openAlert({ severity: 'success', message: 'Settings saved successfully' })
		);
		dispatch(clearSuccess());
	};
	return (
		<section>
			<div className="bg-white">
				<span className="p-4 flex justify-between">
					<h1 className="text-xl">Class booking settings</h1>
					<h3 className="bg-[#FDC4251A] px-4 py-2">instant booking is ON</h3>
				</span>
				<div className="border bt-2"></div>
				<div className="flex justify-between px-4 mt-8 gap-8">
					<span className="basis-1/3">
						<h1 className="text-[#384047] text-[14px]">
							Choose the minimum amount of notice you require from students
							booking trial classes.
						</h1>
						<h2 className="text-[#6F757B] text-[12px] pt-2">
							Tip: make sure your choice gives you enough time to properly
							prepare your trial classes.
						</h2>
					</span>
					<span className="border basis-2/3 py-4 px-10 space-y-2 h-36">
						<h3 className="">Trial class notice</h3>

						<div className="w-[15rem]">
							<select
								name="language"
								// value={language}
								className="select_input"
								// onChange={event => handleFormChange(index, event)}
							>
								<option value="At least 2 days notice">
									At least 2 days notice
								</option>
								<option value="At least 1 day notice">
									At least 1 day notice
								</option>
								<option value="At least 12 hours notice">
									At least 12 hours notice
								</option>
								<option value="At least 6 hours notice">
									At least 6 hours notice
								</option>
								<option value="At least 3 hours notice">
									At least 3 hours notice
								</option>
								<option value="At least 1 hour notice">
									At least 1 hour notice
								</option>
							</select>
						</div>
					</span>
				</div>

				<div className="flex justify-between px-4 mt-8 gap-8">
					<span className="basis-1/3">
						<h1 className="text-[#384047] text-[14px]">
							Choose the minimum amount of notice you require from regular
							students booking classes
						</h1>
						<h2 className="text-[#6F757B] text-[12px] pt-2">
							Tip: requiring less notice may encourage your regular students to
							schedule more classes with you
						</h2>
					</span>
					<span className="border basis-2/3 py-4 px-10 space-y-2 h-36">
						<h3 className="">Regular class notice</h3>

						<div className="w-[15rem]">
							<select
								name="language"
								// value={language}
								className="select_input"
								// onChange={event => handleFormChange(index, event)}
							>
								<option value="At least 12 hours notice">
									At least 12 hours notice
								</option>
								<option value="At least 6 hours notice">
									At least 6 hours notice
								</option>
								<option value="At least 3 hours notice">
									At least 3 hours notice
								</option>
								<option value="At least 1 hour notice">
									At least 2 hours notice
								</option>
							</select>
						</div>
					</span>
				</div>
				<div className="flex justify-between px-4 mt-8 gap-8">
					<span className="basis-1/3">
						<h1 className="text-[#384047] text-[14px]">
							How far in advance can students book?
						</h1>
						<h2 className="text-[#6F757B] text-[12px] pt-2">
							Tip: Tutors can keep their calendars available up to 2 months
							ahead.
						</h2>
					</span>
					<span className="border basis-2/3 py-4 px-10 space-y-2 h-36">
						<h3 className="">Booking window</h3>

						<div className="w-[15rem]">
							<select
								name="language"
								// value={language}
								className="select_input"
								// onChange={event => handleFormChange(index, event)}
							>
								<option value="At least 12 hours notice">
									2 months in advance
								</option>
								<option value="At least 6 hours notice">
									1 months in advance
								</option>
								<option value="At least 3 hours notice">
									3 weeks in advance
								</option>
								<option value="At least 1 hour notice">
									2 weeks in advance
								</option>
							</select>
						</div>
					</span>
				</div>
				<div className="flex justify-center py-4 -ml-[10rem]">
					<button
						className="bg-[#FF5A00] text-white px-4 py-2"
						onClick={handleSave}
					>
						Save
					</button>
				</div>
			</div>
		</section>
	);
};

export default ClassBooking;
