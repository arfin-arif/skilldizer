import React from 'react';
import Success from '../../src/components/Auth/TutorAuth/BecomeTutor/Success';

const success = () => {
	return (
		<>
			<Success />
		</>
	);
};

export default success;
success.requireAuth = true;
success.fromBecomeTutor = true;
