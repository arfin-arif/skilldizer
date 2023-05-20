import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userBookingAction } from '../../src/store/actions/bookingAction';
import MyBackground from '../../src/components/Tutor/TutorDashboard/Profile/MyBackground';

const BackgroundPage = () => {
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

	return <MyBackground booking={booking} />;
};

export default BackgroundPage;
BackgroundPage.requireAuth = true;
