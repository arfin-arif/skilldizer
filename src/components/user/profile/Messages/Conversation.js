import React from 'react';
import Image from 'next/image';
import { format } from 'timeago.js';
import tutorImage from '../../../../../public/images/tutor-sample-image-1.png';

const Conversation = ({
	conversation,
	setTutorId,
	setConversationId,
	user,
	stateMessages,
}) => {
	const unreadConversation = stateMessages.find(
		message => message.conversationId === conversation._id
	);

	return (
		<>
			<div
				style={{ maxHeight: 'calc(100vh - 8rem)' }}
				className="overflow-auto scrollbar_edit"
			>
				<div className="overflow-y-auto">
					<div
						className="flex justify-between p-4 cursor-pointer hover:bg-gray-100 transition duration-300 space-x-3"
						onClick={() => {
							setConversationId(conversation._id),
								setTutorId(conversation.participant1._id);
						}}
					>
						<div className="flex items-center space-x-3">
							<Image
								className="w-9 h-9 rounded-full object-cover"
								src={tutorImage}
								alt="tutor"
							/>
							<div>
								{user.role === 'TUTOR' ? (
									<h4 className="text-gray-900 font-semibold">
										{conversation?.participant2?.name || 'Unknown'}
									</h4>
								) : (
									<h4 className="text-gray-900 font-semibold">
										{conversation?.participant1?.name || 'Unknown'}
									</h4>
								)}
							</div>
						</div>
						{/* <p className="text-xs text-gray-500">
							{format(conversation.createdAt)}
						</p> */}
						{unreadConversation && unreadConversation.message > 0 && (
							<p className="px-3 text-lg bg-[#FF5A00] text-white transition duration-300 rounded-full  cursor-pointer">
								{unreadConversation.message}
							</p>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Conversation;
