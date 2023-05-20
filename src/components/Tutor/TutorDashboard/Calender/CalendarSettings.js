import React, { useState } from 'react';
import TimezoneSelect from 'react-timezone-select';
import { openAlert } from '../../../../store/reducer/alertReducer';
import { clearSuccess } from '../../../../store/reducer/userReducer';
import { useDispatch } from 'react-redux';

const CalendarSettings = () => {
	const dispatch = useDispatch();
	const handleSave = () => {
		dispatch(
			openAlert({
				severity: 'success',
				message: 'Settings saved successfully',
			})
		);
		dispatch(clearSuccess());
	};
	const [selectedTimezone, setSelectedTimezone] = useState({});
	return (
		<div>
			<div className="bg-white">
				<h1 className="text-semibold text-[#090F19] text-xl py-4 px-10">
					Calendar settings
				</h1>
				<div className="border bt-2"></div>
				<div className="flex justify-between px-4 mt-8 gap-8">
					<span className="basis-1/3">
						<h1 className="text-[#384047] text-[14px]">
							Time zone and calendar view
						</h1>
						<h2 className="text-[#6F757B] text-[12px] pt-2">
							Choose your current time zone to avoid time zone confusion with
							your students. Customize calendar view the way it suits you.
						</h2>
					</span>
					<span className="border basis-2/3 py-4 px-10 space-y-2 h-full">
						<h3 className="text-[#6F757B] text-xs">Current time zone</h3>

						<div className="w-[18rem]">
							<div className="select-wrapper">
								<TimezoneSelect
									value={selectedTimezone}
									onChange={setSelectedTimezone}
									className="rounded"
								/>
							</div>
						</div>
						<h3 className="text-[#6F757B] text-xs pt-2">Week starts on</h3>

						<div className="w-[18rem] pt-2">
							<select
								name="language"
								// value={language}
								className="border w-[18rem] text-center h-10"
								// onChange={event => handleFormChange(index, event)}
							>
								<option value="At least 12 hours notice">Sunday</option>
								<option value="At least 6 hours notice">Monday</option>
								<option value="At least 6 hours notice">Tuesday</option>
								<option value="At least 6 hours notice">Wednesday</option>
								<option value="At least 6 hours notice">Thursday</option>
								<option value="At least 6 hours notice">Friday</option>
								<option value="At least 6 hours notice">Saturday</option>
								<option value="At least 6 hours notice">Sunday</option>
							</select>
						</div>
						<h3 className="text-[#6F757B] text-xs pt-2">Date format</h3>

						<div className="w-[18rem] pt-2">
							<select
								name="language"
								// value={language}
								className="border w-[18rem] text-center h-10"
								// onChange={event => handleFormChange(index, event)}
							>
								<option value="At least 12 hours notice">
									Day / Month / Year
								</option>
								<option value="At least 12 hours notice">
									Month / Day / Year
								</option>
								<option value="At least 12 hours notice">
									Year / Month / Day
								</option>
							</select>
						</div>
					</span>
				</div>
				<div className="flex justify-center py-8 -ml-[10rem]">
					<button
						className="bg-[#FF5A00] text-white px-4 py-2"
						onClick={handleSave}
					>
						Save
					</button>
				</div>
			</div>
		</div>
	);
};

export default CalendarSettings;
