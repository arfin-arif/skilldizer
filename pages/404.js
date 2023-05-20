import React from 'react';
import image404 from '../public/images/404 error lost in space-pana.png';
import Image from 'next/image';

const Custom404 = () => {
	return (
		<div className="h-auto flex justify-center items-center">
			<Image
				className="max-w-5xl h-screen object-fill "
				src={image404}
				alt="404 not found"
			/>
		</div>
	);
};

export default Custom404;
