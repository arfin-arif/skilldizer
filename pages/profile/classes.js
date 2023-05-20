import React, { useEffect } from 'react';
import MyClasses from '../../src/components/Tutor/TutorDashboard/Classes/MyClasses';
import { useSelector, useDispatch } from 'react-redux';
import { userBookingAction } from '../../src/store/actions/bookingAction';

const ClassesPage = () => {
	const dispatch = useDispatch();
	const { booking } = useSelector(
		state => state.booking
	);
	console.log(booking);

	useEffect(() => {
		if (booking === undefined) {
			dispatch(userBookingAction());
		}
	}, [booking]);

	return <MyClasses booking={booking} />;
};

export default ClassesPage;
ClassesPage.requireAuth = true;
