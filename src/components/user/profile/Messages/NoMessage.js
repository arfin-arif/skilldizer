import React from 'react';
import { MdOutlineNotInterested } from 'react-icons/md';
import Link from 'next/link';

const NoMessage = ({ user }) => {
	return (
		<>
			<div className="grid w-full h-full place-items-center">
				<div className="grid place-items-center">
					<span className="text-[50px] text-gray-700">
						<MdOutlineNotInterested />
					</span>
					<p className="label text-center">
						No messages yet!. Please Book a tutor to start a conversation
					</p>
					<Link href={'/tutors/subject=English'}>
						<button className="button mt-2 !px-8">
							Find a {user.role === 'TUTOR' ? 'student' : 'tutor'}
						</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default NoMessage;
