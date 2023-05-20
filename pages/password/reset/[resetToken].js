import React from 'react';
import { useRouter } from 'next/router';
import ResetPassword from '../../../src/components/Auth/ResetPassword';

const ResetToken = () => {
	const router = useRouter();
	const { resetToken } = router.query;
	return (
		<>
			<ResetPassword resetToken={resetToken} />
		</>
	);
};

export default ResetToken;
