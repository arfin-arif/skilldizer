import React from 'react';
import ReportDialog from '../Classes/ReportDialog';
import RescheduleDialog from './RescheduleDialog';
import CancelClassDialog from './CancelClassDialog';
import moment from 'moment';

// * Icons
import { FiCalendar } from 'react-icons/fi';
import { RxCross2 } from 'react-icons/rx';
import { MdOutlineReportProblem } from 'react-icons/md';
import { FiMoreHorizontal } from 'react-icons/fi';
import { BsCurrencyDollar } from 'react-icons/bs';
import { useState } from 'react';

const MoreDetails = ({
	booking,
	showMoreOptions,
	setShowMoreOptions,
	setDetailsId,
	detailsId,
	isActionVisible,
	clickRef,
}) => {
	const monthNames = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];

	const formattedMonth = booking.date.split('/')[0][1];
	const formattedDay = booking.date.split('/')[1];
	const formattedYear = booking.date.split('/')[2];
	const month = monthNames[formattedMonth - 1];
	const formattedDate = `${month},${formattedDay} ${formattedYear} `;

	const [open, setOpen] = useState(false);
	const [rescheduleOpen, setRescheduleOpen] = useState(false);
	const [cancelOpen, setCancelOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
		setShowMoreOptions(false);
	};

	const handleClose = value => {
		setOpen(false);
	};

	const handleRescheduleOpen = () => {
		setRescheduleOpen(true);
		setShowMoreOptions(false);
	};

	const handleRescheduleClose = value => {
		setRescheduleOpen(false);
	};
	const handleCancelOpen = () => {
		setCancelOpen(true);
		setShowMoreOptions(false);
	};

	const handleCancelClose = value => {
		setCancelOpen(false);
	};

	return (
		<>
			<div className="transition duration-300 ease-in-out w-full">
				<tr className="bg-[#F7F8F8] md:flex justify-between px-8 py-2 hidden ">
					<td className="flex mt-2 gap-x-16 text-[#AEB5BC] text-xs ">
						<h4 className="uppercase">date</h4>
						<h4 className="uppercase">class status</h4>
						<span className="flex gap-x-4 pl-20">
							<h4 className="uppercase">duration</h4>
							<h4 className="uppercase">earnings</h4>
						</span>
					</td>
					<td className="flex mt-2 justify-between items-center mx-8 text-[#AEB5BC] text-xs">
						<h4 className="uppercase">actions</h4>
					</td>
				</tr>
				<tr className="bg-[#F7F8F8] flex md:justify-between md:px-8 py-2 text-sm px-10">
					<td className="flex mt-2 md:gap-x-8 ">
						<h4>{formattedDate}</h4>
						<h4 className="hidden md:block">{booking.classStatus}</h4>
						<span className="flex gap-x-8 md:pl-32">
							<h3 className="md:hidden ml-4">Duration</h3>
							<h4 className="-ml-6">60 min</h4>
							<h4 className="hidden md:block">0.00$</h4>
						</span>
					</td>
					<td className="flex mt-2 justify-between items-center mx-8 ">
						<div className=" relative">
							<span
								className="cursor-pointer text-lg"
								onClick={() => (
									setShowMoreOptions(!showMoreOptions),
									setDetailsId(booking._id)
								)}
							>
								<FiMoreHorizontal size={20} />
							</span>
							{showMoreOptions &&
								booking._id === detailsId &&
								!isActionVisible &&
								booking.classStatus !== 'Cancelled' && (
									<div
										ref={clickRef}
										className="p-5 cursor-auto absolute rounded-md shadow-lg right-0 outline-none bg-white top-0 transition-all duration-300 transform origin-top -translate-y-2 scale-95 w-48"
									>
										<div className="space-y-3 text-[#515164]">
											<p
												className="flex items-center cursor-pointer hover:text-[#FF5A00] transition duration-150 text-black"
												onClick={handleClickOpen}
											>
												<span className="pr-2">
													<MdOutlineReportProblem />
												</span>
												Report Issue
											</p>

											<p
												className="flex items-center cursor-pointer hover:text-[#FF5A00] transition duration-150 text-black"
												onClick={handleRescheduleOpen}
											>
												<span className="pr-2">
													<FiCalendar />
												</span>
												Reschedule
											</p>
											<p
												className="flex items-center cursor-pointer hover:text-[#FF5A00] transition duration-150 text-black"
												onClick={handleCancelOpen}
											>
												<span className="pr-2">
													<RxCross2 />
												</span>
												Cancel Class
											</p>
										</div>
									</div>
								)}
						</div>
					</td>
				</tr>
				<ReportDialog
					open={open}
					onClose={handleClose}
					bookingId={booking._id}
				/>
				<RescheduleDialog
					open={rescheduleOpen}
					onClose={handleRescheduleClose}
					booking={booking}
				/>
				<CancelClassDialog
					open={cancelOpen}
					onClose={handleCancelClose}
					booking={booking}
				/>
			</div>
		</>
	);
};

export default MoreDetails;
