import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userBookingAction } from '../../src/store/actions/bookingAction';
import MyNotification from '../../src/components/Tutor/TutorDashboard/Settings/MyNotification';

const NotificationPage = () => {
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

	return <MyNotification booking={booking} />;
};

export default NotificationPage;
NotificationPage.requireAuth = true;
