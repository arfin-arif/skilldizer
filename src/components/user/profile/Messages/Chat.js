
import React from 'react';
import Image from 'next/image';
import { format } from 'timeago.js';
import tutorImage2 from '../../../../../public/images/tutor-sample-image-2.png';
import logo from '../../../../../public/android-chrome-512x512.png';
import { AiOutlineFile } from 'react-icons/ai';
import PulseLoader from 'react-spinners/PulseLoader';
import BeatLoader from 'react-spinners/BeatLoader';
import { BsDownload } from 'react-icons/bs';

const Chat = ({ chat, userId, refForScroll }) => {
	let downloadLink;
	if (chat.textType === 'file' && chat.url) {
		const url = chat.url.split('/');
		url.splice(6, 0, `f_auto`);
		url.splice(7, 0, `fl_attachment:${chat.text.split('.')[0]}`);
		downloadLink = url.join('/');
	}

	return (
		<>
			{userId === chat.receiverId._id && chat.userType === 'Skilldizer' && (
				<div className={'flex space-x-2 space-y-2 justify-start'}>
					<div className={'order-first ml-2 w-12'}>
						<Image
							className="w-8 h-8 rounded-full object-cover"
							src={logo}
							alt="tutor"
						/>
					</div>
					<div
						ref={refForScroll}
						className={
							chat.textType !== 'text' && chat.url
								? ''
								: 'py-2 px-5 bg-gray-100 rounded-r-md rounded-bl-md'
						}
					>
						{(chat.textType === 'image' || chat.textType === 'file') &&
							!chat.url && (
								<div className="flex justify-center items-center">
									Downloading
									<BeatLoader color="#FF5A00" size={12} />
								</div>
							)}
						{chat.textType === 'image' && chat.url && (
							<div>
								<Image
									src={chat.url}
									alt="chat attachment"
									width={300}
									height={300}
								/>
							</div>
						)}

						{chat.textType === 'file' && chat.url && (
							<div className="flex gap-2">
								<p>{chat.text}</p>
								<AiOutlineFile size={20} />
								<a href={downloadLink}>
									<BsDownload />
								</a>
							</div>
						)}

						{chat.textType === 'text' && <p>{chat.text}</p>}

						<p className="text-end text-xs text-gray-500 mt-2">
							{format(chat.sentAt)}
						</p>
					</div>
				</div>
			)}
			{userId === chat.senderId._id && chat.userType === 'USER' && (
				<div className={'flex space-x-2 space-y-2 justify-end'}>
					<div className={'order-last ml-2'}>
						<Image
							className="w-8 h-8 rounded-full object-cover"
							src={tutorImage2}
							alt="tutor"
						/>
					</div>
					<div
						ref={refForScroll}
						className={
							chat.textType === 'image' && chat.url
								? ''
								: 'py-2 px-5 bg-[#FDECE4] rounded-l-md rounded-br-md '
						}
					>
						{/* Checking if file type is not image */}
						{chat.textType === 'file' && !chat.url ? (
							<div className="flex justify-center items-center">
								Uploading
								<PulseLoader color="#FF5A00" size={12} />
							</div>
						) : chat.textType === 'file' && chat.url ? (
							<div className="flex gap-2">
								<p>{chat.text}</p>
								<AiOutlineFile size={20} />
								<a href={downloadLink}>
									<BsDownload />
								</a>
							</div>
						) : null}
						{chat.textType === 'image' && !chat.url ? (
							<div className="flex justify-center items-center">
								Uploading
								<PulseLoader color="#FF5A00" size={12} />
							</div>
						) : chat.textType === 'image' && chat.url ? (
							<div>
								<Image
									src={chat.url}
									alt="chat attachment"
									width={300}
									height={300}
								/>
							</div>
						) : null}

						{chat.textType === 'text' && <div>{chat.text}</div>}
						<p className="text-end text-xs text-gray-500 mt-2">
							{format(chat.sentAt)}
						</p>
					</div>
				</div>
			)}
			{userId === chat.receiverId._id && chat.userType === 'USER' && (
				<div className={'flex space-x-2 space-y-2'}>
					<div className={'order-first ml-2'}>
						<Image
							className="w-8 h-8 rounded-full object-cover"
							src={tutorImage2}
							alt="tutor"
						/>
					</div>
					<div
						ref={refForScroll}
						className={
							chat.textType !== 'text' && chat.url
								? ''
								: 'py-2 px-5 bg-gray-100 rounded-r-md rounded-bl-md '
						}
					>
						{(chat.textType === 'image' || chat.textType === 'file') &&
							!chat.url && (
								<div className="flex justify-center items-center">
									Downloading
									<BeatLoader color="#FF5A00" size={12} />
								</div>
							)}
						{chat.textType === 'image' && chat.url && (
							<div>
								<Image
									src={chat.url}
									alt="chat attachment"
									width={300}
									height={300}
								/>
							</div>
						)}

						{chat.textType === 'file' && chat.url && (
							<div className="flex gap-2">
								<p>{chat.text}</p>
								<AiOutlineFile size={20} />
								<a href={downloadLink}>
									<BsDownload />
								</a>
							</div>
						)}

						{chat.textType === 'text' && <div>{chat.text}</div>}

						<p className="text-end text-xs text-gray-500 mt-2">
							{format(chat.sentAt)}
						</p>
					</div>
				</div>
			)}
		</>
	);
};

export default Chat;
