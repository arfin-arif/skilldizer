import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userBookingAction } from '../../src/store/actions/bookingAction';
import UserDashboard from '../../src/components/user/profile/UserDashboard';
import TutorDashboard from '../../src/components/Tutor/TutorDashboard/TutorDashboard';

const Dashboard = () => {
	const dispatch = useDispatch();
	const { user } = useSelector(state => state.user);
	const { error, booking, loading, clearError } = useSelector(
		state => state.booking
	);

	useEffect(() => {
		if (booking === undefined) {
			dispatch(userBookingAction());
		}
	}, [booking]);

	return (
		<>
			{user.role === 'TUTOR' ? (
				<TutorDashboard booking={booking} />
			) : (
				<UserDashboard />
			)}
		</>
	);
};

export default Dashboard;
Dashboard.requireAuth = true;
