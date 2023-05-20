import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userBookingAction } from '../../src/store/actions/bookingAction';
import MyCalendar from '../../src/components/Tutor/TutorDashboard/Calender/MyCalendar';

const CalendarPage = () => {
	const dispatch = useDispatch();
	const { booking } = useSelector(
		state => state.booking
	);

	useEffect(() => {
		if (booking === undefined) {
			dispatch(userBookingAction());
		}
	}, [booking]);

	return <MyCalendar booking={booking} />;
};

export default CalendarPage;
CalendarPage.requireAuth = true;
