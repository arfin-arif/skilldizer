import React from 'react';
import Image from 'next/image';

import paymentImage from '../../public/images/payment-and-refund-policy.png';
import cookieImage from '../../public/images/cookie-policy.jpg';
import termImage from '../../public/images/trams-and-conditions.jpg';
import privacyImage from '../../public/images/privacy-policy.jpg';

const LegalCenter = () => {
	return (
		<section
			style={{ minHeight: 'calc(100vh - 80px)' }}
			className="max-w-5xl mx-auto pb-20"
		>
			<div className="md:grid md:grid-cols-2 gap-8 items-center mx-3 lg:mx-0">
				<div>
					<div className="md:w-[300px] md:h-[300px]">
						<Image
							className="w-full h-full object-fill"
							src={paymentImage}
							alt=""
						/>
					</div>
					<h3 className="font-semibold text-lg">Payment and Refund Policy</h3>
					<p className="text-sm mt-2">
						Skilldizer strives to ensure a clear understanding of financial
						relations between students and tutors with respect to the services
						we provide. This policy applies to all services and features made...
					</p>
					<button className="text-sm font-medium bg-[#FF5A00] rounded-md cursor-pointer mt-3 px-4 text-white py-2">
						<a href="/images/Skilldizer Refund Policy-2.pdf">View more</a>
					</button>
				</div>
				<div>
					<div className="md:w-[300px] md:h-[300px]">
						<Image
							className="w-full h-full object-fill"
							src={cookieImage}
							alt=""
						/>
					</div>
					<h3 className="font-semibold text-lg">Cookie Policy</h3>
					<p className="text-sm mt-2">
						We would like you to know more about our use of cookies. That is why
						this document was drafted. It explains what cookies are, how we use
						cookies, your choices regarding cookies and further information
						about...
					</p>
					<button className="text-sm font-medium bg-[#FF5A00] rounded-md cursor-pointer mt-3 px-4 text-white py-2">
						<a href="/images/Skilldizer Cookie Policy.pdf">View more</a>
					</button>
				</div>
				<div>
					<div className="md:w-[300px] md:h-[300px]">
						<Image
							className="w-full h-full object-fill"
							src={termImage}
							alt=""
						/>
					</div>
					<h3 className="font-semibold text-lg">Terms and Conditions</h3>
					<p className="text-sm mt-2">
						Our terms of service have been updated. Therefore, please, read
						these Terms of Service carefully before using the website and/or
						services. If you do not accept these terms of service, including...
					</p>
					<button className="text-sm font-medium bg-[#FF5A00] rounded-md cursor-pointer mt-3 px-4 text-white py-2">
						<a href="/images/Skilldizer terms of service.pdf">View more</a>
					</button>
				</div>
				<div>
					<div className="md:w-[300px] md:h-[300px]">
						<Image
							className="w-full h-full object-fill"
							src={privacyImage}
							alt=""
						/>
					</div>
					<h3 className="font-semibold text-lg">Privacy Policy</h3>
					<p className="text-sm mt-2">
						If you choose to use our service, then you agree to the collection
						and use of information in relation with this policy. The personal
						information that we collect are used for providing and improving the
						service...
					</p>
					<button className="text-sm font-medium bg-[#FF5A00] rounded-md cursor-pointer mt-3 px-4 text-white py-2">
						<a href="/images/Skilldizer Privacy Policy.pdf">View more</a>
					</button>
				</div>
			</div>
		</section>
	);
};

export default LegalCenter;
