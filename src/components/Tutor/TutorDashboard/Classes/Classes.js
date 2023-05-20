import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import {
	addName,
	updateStatus,
	userBookingAction,
	archivedBookingAction,
} from '../../../../store/actions/bookingAction';
import MoreDetails from './MoreDetails';
import { openAlert } from '../../../../store/reducer/alertReducer';
import { clearSuccess } from '../../../../store/reducer/userReducer';
import ChangePriceDialog from './ChangePriceDialog';

// * Images and Icons
import Image from 'next/image';
import { FiMail } from 'react-icons/fi';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { FiMoreHorizontal } from 'react-icons/fi';
import { FiEdit2 } from 'react-icons/fi';
import { BsFileZip } from 'react-icons/bs';
import { BsCurrencyDollar } from 'react-icons/bs';
import { BsArrowReturnLeft } from 'react-icons/bs';

const Classes = ({ booking }) => {
	const { error, userName } = useSelector(state => state.booking);
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);

	const [showDetails, setShowDetails] = useState(false);
	const [showOptions, setShowOptions] = useState(false);
	const [detailsId, setDetailsId] = useState(false);
	const [isActionVisible, setIsActionVisible] = useState(false);
	const [name, setName] = useState('');
	const [updatedName, setUpdatedName] = useState('');
	const [showRename, setShowRename] = useState(false);
	const [activeTab, setActiveTab] = useState('Active');
	const [showMoreOptions, setShowMoreOptions] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
		setShowOptions(false);
	};

	const handleClose = value => {
		setOpen(false);
	};

	let iconStyles = {
		color: '#24BB36',
		stroke: '#24BB36',
		strokeWidth: '2',
		cursor: 'pointer',
	};

	// * Handling outside click
	const clickRef = useRef(null);
	const handleClickOutside = event => {
		if (clickRef.current && !clickRef.current.contains(event.target)) {
			setIsActionVisible(true);
			setShowOptions(false);
			setShowMoreOptions(false);
			setShowRename(false);
		}
	};
	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true);
		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	}, []);
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsActionVisible(false);
		}, 1000);
		return () => clearTimeout(timer);
	}, [isActionVisible]);

	// * Handling Rename student
	const handleRename = () => {
		setShowRename(true);
		setShowOptions(false);
	};

	const handleRenameRequest = (event, bookingId) => {
		if (event.key === 'Enter') {
			dispatch(addName(bookingId, name));
			setShowRename(false);
			setUpdatedName(name);
		}
	};

	useEffect(() => {
		if (error) {
			dispatch(openAlert({ severity: 'error', message: error }));
			dispatch(clearSuccess());
		} else if (userName !== undefined) {
			dispatch(openAlert({ severity: 'success', message: userName.message }));
			dispatch(clearSuccess());
		}
	}, [error, userName]);

	const sendRenameRequest = bookingId => {
		dispatch(addName(bookingId, name));
		setShowRename(false);
		setUpdatedName(name);
	};

	// * Handling Active and Archived Classes
	const sendStatusUpdateRequest = bookingId => {
		const status = activeTab === 'Active' ? 'Archived' : 'Active';
		dispatch(updateStatus(bookingId, status));
		setShowOptions(false);
	};

	const handleActive = () => {
		dispatch(userBookingAction());
		setActiveTab('Active');
	};
	const handleArchived = () => {
		dispatch(archivedBookingAction());
		setActiveTab('Archived');
	};

	return (
		<div className="h-full md:h-screen md:max-w-[85%] md:mx-auto my-10 w-full">
			<div className="md:bg-black md:border md:h-[58px] md:rounded-t-[20px] bg-white">
				<span className="flex justify-between ">
					<h3
						className={
							activeTab === 'Active'
								? 'md:text-white font-semibold text-black md:text-[18px] md:pl-8 px-4  pt-2 tracking-wide cursor-pointer'
								: 'md:text-white  text-black md:text-[18px] md:pl-8 px-4 pt-2 tracking-wide cursor-pointer'
						}
						onClick={handleActive}
					>
						Active Classes
						{activeTab === 'Active' && (
							<div className="border-t-2 border-[#FF5A00] hidden md:block"></div>
						)}
					</h3>
					<h3
						className={
							activeTab === 'Archived'
								? 'md:text-white font-semibold text-black md:text-[18px] md:pl-8 px-4  pt-2 tracking-wide cursor-pointer'
								: 'md:text-white  text-black md:text-[18px] md:pl-8 px-4   pt-2 tracking-wide cursor-pointer'
						}
						onClick={handleArchived}
					>
						Archived Classes
						{activeTab === 'Archived' && (
							<div className="border-t-2 border-[#FF5A00] hidden md:block"></div>
						)}
					</h3>
				</span>
				<div className="border border-b md:hidden"></div>
			</div>
			<table className="w-screen md:w-full table-auto">
				<thead className="bg-white hidden md:block">
					<tr className="flex justify-between mx-8 items-center">
						<th
							scope="col"
							className="text-[16px] tracking-wide font-medium py-4 text-left"
						>
							Students
						</th>
						<th
							scope="col"
							className="text-[16px] tracking-wide font-medium py-4 text-left"
						>
							Prepaid
						</th>
						<th
							scope="col"
							className="text-[16px] tracking-wide font-medium py-4 text-left -ml-8"
						>
							Price per hour
						</th>
						<th
							scope="col"
							className="text-[16px] tracking-wide font-medium py-4 text-left "
						>
							Actions
						</th>
					</tr>
				</thead>
				<tbody>
					{booking &&
						booking.map(booking => (
							<div key={booking._id}>
								<tr className="bg-white transition duration-300 ease-in-out flex flex-col md:flex-row md:justify-between md:items-center px-8 border-b border-2">
									<td className=" md:py-4 py-2 text-sm font-medium text-gray-900 w-[9rem]">
										<div className="flex items-center space-x-2">
											<Image
												className="w-10 h-10 rounded-full object-cover"
												width={40}
												height={40}
												src={booking?.tutorId?.user?.avatar?.url}
												alt="tutor"
											/>
											{showRename && booking._id === detailsId ? (
												<span
													className="flex gap-2 items-center"
													ref={clickRef}
												>
													<input
														type="text"
														onChange={e => setName(e.target.value)}
														defaultValue={
															name === ''
																? booking.userName
																	? booking.userName
																	: booking.userId.name.split(' ')[0]
																: name
														}
														onKeyDown={() =>
															handleRenameRequest(event, booking._id)
														}
														className="border-2 border-[#E2E2E2] shadow-sm w-16 outline-[#FF5A00]"
													/>
													<BsArrowReturnLeft
														style={iconStyles}
														onClick={() => sendRenameRequest(booking._id)}
													/>
												</span>
											) : (
												<span className="flex gap-2 items-center">
													<p className="text-gray-900">
														{updatedName && booking._id === detailsId
															? updatedName
															: booking.userName
															? booking.userName
															: booking.userId.name.split(' ')[0]}
													</p>
													<p
														className="cursor-pointer"
														onClick={() => (
															setShowDetails(!showDetails),
															setDetailsId(booking._id)
														)}
													>
														{showDetails && booking._id === detailsId ? (
															<RiArrowUpSLine size={20} />
														) : (
															<RiArrowDownSLine size={20} />
														)}
													</p>
												</span>
											)}
										</div>
									</td>

									<td className="text-sm font-medium md:py-4 pl-12 md:pl-0 whitespace-nowrap md:w-[8rem]">
										No Prepaid Class
									</td>
									<td className="hidden md:block text-sm font-medium py-4 whitespace-nowrap w-[6rem]">
										{booking.tutorId?.hourlyRate?.toFixed(2)}$
									</td>

									<td className="text-sm  font-medium pl-12 md:pl-0 py-4 whitespace-nowrap">
										<div className="md:flex md:items-center space-x-7">
											<div className="flex text-sm font-semibold text-[#FF5A00] items-center space-x-1">
												<button
													className="text-lg cursor-pointer "
													onClick={() => Router.push('/profile/messages')}
												>
													<FiMail />
												</button>
												<p>Messages</p>
											</div>
											<div className="-top-24 -right-40 md:top-0 md:right-0 relative">
												<span
													className="cursor-pointer text-lg"
													onClick={() => (
														setShowOptions(!showOptions),
														setDetailsId(booking._id)
													)}
												>
													<FiMoreHorizontal size={20} />
												</span>

												{showOptions &&
													booking._id === detailsId &&
													!isActionVisible && (
														<div
															ref={clickRef}
															className="p-5 cursor-auto absolute rounded-md shadow-lg md:right-0 right-60 outline-none bg-white text-black top-0 transition-all duration-300 transform origin-top -translate-y-2 scale-95 "
														>
															<div className="space-y-5 text-[#515164]">
																<p
																	onClick={handleRename}
																	className="flex items-center cursor-pointer hover:text-[#FF5A00] transition duration-150 text-black"
																>
																	<span className="pr-2">
																		<FiEdit2 />
																	</span>
																	Rename Student
																</p>
																<p
																	className="flex items-center cursor-pointer hover:text-[#FF5A00] transition duration-150 text-black"
																	onClick={() =>
																		sendStatusUpdateRequest(booking._id)
																	}
																>
																	<span className="pr-2">
																		<BsFileZip />
																	</span>
																	{activeTab === 'Active'
																		? 'Archive Student'
																		: 'Active Student'}
																</p>
																{booking.classStatus !== 'Cancelled' && (
																	<p
																		className="flex items-center cursor-pointer hover:text-[#FF5A00] transition duration-150 text-black"
																		onClick={handleClickOpen}
																	>
																		<span className="pr-2">
																			<BsCurrencyDollar />
																		</span>
																		Change Price
																	</p>
																)}
															</div>
														</div>
													)}
											</div>
										</div>
									</td>
								</tr>
								{showDetails && booking._id === detailsId && (
									<MoreDetails
										booking={booking}
										showMoreOptions={showMoreOptions}
										setShowMoreOptions={setShowMoreOptions}
										detailsId={detailsId}
										setDetailsId={setDetailsId}
										isActionVisible={isActionVisible}
										clickRef={clickRef}
									/>
								)}
							</div>
						))}
					<ChangePriceDialog open={open} onClose={handleClose} />
				</tbody>
			</table>
		</div>
	);
};

export default Classes;
