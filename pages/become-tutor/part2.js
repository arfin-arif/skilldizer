import React from 'react';
import Part2 from '../../src/components/Auth/TutorAuth/BecomeTutor/Part2';

const part2 = () => {
	return (
		<div>
			<Part2 />{' '}
		</div>
	);
};

export default part2;
part2.requireAuth = true;
part2.fromBecomeTutor = true;
