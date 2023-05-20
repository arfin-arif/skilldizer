import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userBookingAction } from '../../src/store/actions/bookingAction';
import MyAbout from '../../src/components/Tutor/TutorDashboard/Profile/MyAbout';

const AboutPage = () => {
	const dispatch = useDispatch();
	const { user } = useSelector(state => state.user);
	const { error, booking, loading, clearError } = useSelector(
		state => state.booking
	);

	useEffect(() => {
		if (booking === undefined) {
			// dispatch(userBookingAction());
		}
	}, [booking]);

	return <MyAbout booking={booking} />;
};

export default AboutPage;
AboutPage.requireAuth = true;
