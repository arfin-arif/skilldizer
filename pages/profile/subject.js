import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userBookingAction } from '../../src/store/actions/bookingAction';
import MySubject from '../../src/components/Tutor/TutorDashboard/Profile/MySubject';

const SubjectPage = () => {
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

	return <MySubject booking={booking} />;
};

export default SubjectPage;
SubjectPage.requireAuth = true;
