import React from 'react';
import MyChangePassword from '../../src/components/Tutor/TutorDashboard/Settings/MyChangePassword';

const ChangePasswordPage = () => {
	return <MyChangePassword />;
};

export default ChangePasswordPage;
ChangePasswordPage.requireAuth = true;
