import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userBookingAction } from '../../src/store/actions/bookingAction';
import MyVideo from '../../src/components/Tutor/TutorDashboard/Profile/MyVideo';

const VideoPage = () => {
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

	return <MyVideo booking={booking} />;
};

export default VideoPage;
VideoPage.requireAuth = true;
