import React, { useState, useEffect } from 'react';
import { clearSuccess } from '../../../store/reducer/userReducer';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import {
	cancelPaymentAction,
	verifyPaymentAction,
} from '../../../store/actions/paymentAction';
import { userBookingAction } from '../../../store/actions/bookingAction';
import SideBar from '../../Tutor/TutorDashboard/SideBar/SideBar';
import Classes from '../../Tutor/TutorDashboard/Classes/Classes';
import { openAlert } from '../../../store/reducer/alertReducer';

const UserDashboard = () => {
	const router = useRouter();
	const [selectedIndex, setSelectedIndex] = useState(2);
	const { error, booking, loading, clearError } = useSelector(
		state => state.booking
	);

	const dispatch = useDispatch();
	const { status, id } = router.query;

	useEffect(() => {
		dispatch(userBookingAction());
		if (error) {
			dispatch(openAlert({ severity: 'error', message: error }));
			dispatch(clearSuccess());
		}
		if (status) {
			if (status === 'success') {
				dispatch(
					openAlert({ severity: 'success', message: 'Payment Successful' })
				);
				dispatch(clearSuccess());
				const stripeSessionId = localStorage.getItem('stripeSessionId');
				if (stripeSessionId) {
					dispatch(verifyPaymentAction(stripeSessionId, id));
					localStorage.removeItem('stripeSessionId');
				}
			}
			if (status === 'cancel') {
				dispatch(
					openAlert({
						severity: 'error',
						message: 'Something went wrong with your payment, please try ',
					})
				);
				dispatch(clearSuccess());
				const stripeSessionId = localStorage.getItem('stripeSessionId');
				if (stripeSessionId) {
					dispatch(cancelPaymentAction(stripeSessionId, id));
					localStorage.removeItem('stripeSessionId');
				}
			}
		}
	}, [dispatch, status, id, error, clearError]);

	return (
		<section
			style={{ minHeight: 'calc(100vh - 80px)' }}
			className="bg-slate-100"
		>
			<div className="flex ">
				<div className="basis-2/12 h-full">
					<SideBar selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
				</div>
				<div className="basis-10/12 bg-[#fcf4f0]">
					<Classes booking={booking} />
				</div>
			</div>
			{/* {loading || loading === undefined ? (
				<Loader />
			) : (
				<div className="pt-14 max-w-5xl mx-auto grid grid-cols-2 place-items-center">
					<div className="md:col-span-3 md:grid bg-white rounded-md shadow-sm p-6">
						{booking && booking.length > 0 && (
							<div>
								<h2 className="text-xl text-gray-700 font-semibold">
									Active Lessons
								</h2>
								<hr className="my-4" />
								<div className="md:flex mt-5 md:flex-col">
									<div className="sm:-mx-6 lg:-mx-8">
										<div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
											<div className="">
												<table className="min-w-full">
													<thead className="bg-white border-b">
														<tr>
															<th
																scope="col"
																className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
															>
																Tutors
															</th>
															<th
																scope="col"
																className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
															>
																Date
															</th>
															<th
																scope="col"
																className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
															>
																Price
															</th>
															<th
																scope="col"
																className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
															>
																Status
															</th>
															<th
																scope="col"
																className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
															>
																Actions
															</th>
														</tr>
													</thead>
													<tbody>
														{booking &&
															booking.map(booking => (
																<tr
																	className="bg-white border-b transition duration-300 ease-in-out"
																	key={booking._id}
																>
																	<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
																		<div className="flex items-center space-x-3">
																			<Image
																				className="w-10 h-10 rounded-full object-cover"
																				src={tutorImage}
																				alt="tutor"
																			/>
																			<p className="text-gray-900">
																				{booking.tutorId.user.name}
																			</p>
																		</div>
																	</td>
																	<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
																		{booking.date}
																	</td>
																	<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
																		{booking.tutorId.hourlyRate}$
																	</td>
																	<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
																		Upcoming
																	</td>
																	<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
																		<div className="flex items-center space-x-7">
																			<Link href="/profile/messages">
																				<div className="flex text-sm font-semibold text-[#FF5A00] cursor-pointer items-center space-x-1">
																					<button className="text-lg">
																						<AiOutlineMessage />
																					</button>
																					<p>Message</p>
																				</div>
																			</Link>
																			<div className="dropdown relative">
																				<span className="cursor-pointer text-lg">
																					<CiCircleMore />
																				</span>
																				<div className="opacity-0 p-7 cursor-auto absolute rounded-md shadow-lg right-0 outline-none bg-white top-0 invisible dropdown-menu transition-all duration-300 transform origin-top -translate-y-2 scale-95">
																					<div className="space-y-5 text-[#515164]">
																						<p
																							onClick={receiveTuition}
																							className="flex items-center cursor-pointer hover:text-[#FF5A00] transition duration-150"
																						>
																							<span className="pr-2">
																								<BsCheck2Circle />
																							</span>{' '}
																							Successfully recived tution
																						</p>
																						<p className="flex items-center cursor-pointer hover:text-[#FF5A00] transition duration-150">
																							{' '}
																							<span className="pr-2">
																								<FcCancel />
																							</span>{' '}
																							Cancel tuition
																						</p>
																					</div>
																				</div>
																			</div>
																		</div>
																	</td>
																</tr>
															))}
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			)}
			{(booking === undefined || (booking && booking.length < 1)) && (
				<div className="grid w-full h-full place-items-center">
					<div className="grid place-items-center">
						<span className="text-[50px] text-gray-700">
							<MdOutlineNotInterested />
						</span>
						<p className="label text-center">No lessons yet</p>
						<Link href="/tutors/subject=English">
							{user.role === 'TUTOR' ? (
								<button className="button mt-2 !px-8">Find Students</button>
							) : (
								<button className="button mt-2 !px-8">Find a tutor</button>
							)}
						</Link>
					</div>
				</div>
			)}

			<MakeReview
				tutorId="63313cd7a96afac98cccd982"
				openReviewModel={openReviewModel}
				setOpenReviewModel={setOpenReviewModel}
			/>
			<AlertComponent /> */}
		</section>
	);
};

export default UserDashboard;
UserDashboard.requireAuth = true;
