import React from 'react';
import MyMessages from '../../src/components/Tutor/TutorDashboard/Messages/MyMessages';

const messages = () => {
	return (
		<>
			<MyMessages />
		</>
	);
};

export default messages;
messages.requireAuth = true;
