import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
const { io } = require('socket.io-client');
const socket = io(`${process.env.REACT_APP_BACKEND_API}`);
import { useDispatch, useSelector } from 'react-redux';
import {
	conversationAction,
	chatAction,
} from '../../../../store/actions/conversationAction';
import AlertComponent from '../../../Utils/AlertComponent';
import { openAlert } from '../../../../store/reducer/alertReducer';
import { clearSuccess } from '../../../../store/reducer/userReducer';
import {
	addMessageAction,
	removeMessageAction,
} from '../../../../store/actions/messageActions';
import Loader from '../../../Utils/Loader';

// * Message Components
import NoMessage from './NoMessage';
import Search from './Search';
import Conversation from './Conversation';
import Chat from './Chat';
import MessageBox from './MessageBox';
import EmojiPicker from 'emoji-picker-react';

// * Images
import Image from 'next/image';
import tutorImage2 from '../../../../../public/images/tutor-sample-image-2.png';

const Message = () => {
	const dispatch = useDispatch();
	const [showEmoji, setShowEmoji] = useState(false);
	const [messages, setMessages] = useState([]);
	const [newMessage, setNewMessage] = useState(null);
	const [currentConversation, setCurrentConversation] = useState(null);
	const [tutorId, setTutorId] = useState(null);
	const [conversationId, setConversationId] = useState(null);
	const [file, setFile] = useState(null);
	const [fileType, setFileType] = useState(null);
	const [chatId, setChatId] = useState(null);
	const [preview, setPreview] = useState('');
	const { user } = useSelector(state => state.user);
	const scrollRef = useRef();
	const { conversation, error, loading, chat } = useSelector(
		state => state.conversation
	);
	const { message: stateMessages, arrivalMessage } = useSelector(
		state => state.message
	);

	useEffect(() => {
		if (chat !== undefined) {
			setMessages(chat);
		}
	}, [chat]);

	const changeHandler = e => {
		e.preventDefault();
		setNewMessage(e.target.value);
	};
	const handleSubmit = async e => {
		e.preventDefault();

		const message = {
			senderId: user._id,
			text: newMessage,
			receiverId:
				user._id === currentConversation?.participant1._id
					? currentConversation?.participant2._id
					: currentConversation?.participant1._id,
			conversationId: conversationId,
			textType:
				fileType !== null
					? fileType.toLowerCase() === 'jpg' ||
					  fileType.toLowerCase() === 'jpeg' ||
					  fileType.toLowerCase() === 'png' ||
					  fileType.toLowerCase() === 'gif'
						? 'image'
						: 'file'
					: 'text',
		};

		try {
			const { data } = await axios.post(
				`${process.env.REACT_APP_BACKEND_API}/api/v1/chat/create-chat`,
				message,
				{
					withCredentials: true,
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);
			setMessages([...messages, data?.chat]);
			setNewMessage('');
			setChatId(data.chat._id);

			socket.emit('sendMessage', {
				receiverId:
					user._id === currentConversation?.participant1._id
						? currentConversation?.participant2._id
						: currentConversation?.participant1._id,
				messageId: data.chat._id,
				senderId: user._id,
			});
		} catch (err) {
			dispatch(openAlert({ severity: 'error', message: err }));
			dispatch(clearSuccess());
		}
	};

	useEffect(() => {
		if (file !== null && fileType !== null && chatId !== null) {
			const uploadFile = async () => {
				const formData = new FormData();
				formData.append('file', file);

				try {
					const { data } = await axios.post(
						`${process.env.REACT_APP_BACKEND_API}/api/v1/chat/chat-file/${chatId}`,
						formData,
						{
							withCredentials: true,
							headers: {
								'Content-Type': 'multipart/form-data',
							},
						}
					);
				} catch (err) {
					dispatch(openAlert({ severity: 'error', message: err }));
					dispatch(clearSuccess());
				}
			};
			uploadFile();
			// setFile(null);
			setFileType(null);
		}
	}, [chatId]);

	// * Getting all conversations
	useEffect(() => {
		dispatch(conversationAction());
		if (error) {
			dispatch(openAlert({ severity: 'error', message: error }));
			dispatch(clearSuccess());
		}
	}, [dispatch, error]);

	// * Getting chat messages for a conversation
	useEffect(() => {
		if (conversationId !== null) {
			dispatch(chatAction(conversationId));

			if (error) {
				dispatch(openAlert({ severity: 'error', message: error }));
				dispatch(clearSuccess());
			}
		}
	}, [conversationId, dispatch, error]);

	useEffect(() => {
		if (arrivalMessage !== null && arrivalMessage !== undefined) {
			setMessages(messages =>
				messages.filter(msg => msg._id !== arrivalMessage._id)
			);
			arrivalMessage &&
				(currentConversation?.participant1._id ===
					(arrivalMessage.receiverId._id || arrivalMessage.senderId._id) ||
					currentConversation?.participant2._id ===
						(arrivalMessage.receiverId._id || arrivalMessage.senderId._id)) &&
				setMessages(prev => [...prev, arrivalMessage]);
		}
	}, [arrivalMessage]);

	useEffect(() => {
		scrollRef.current?.scrollIntoView({ behavior: 'smooth', align: false });
	}, [messages]);

	// * Show Emoji handler
	const handleEmoji = () => {
		setShowEmoji(!showEmoji);
	};

	// * Handle Emoji Click
	const handleEmojiClick = emoji => {
		setShowEmoji(!showEmoji);
		setNewMessage(message => message + emoji.emoji);
	};

	return (
		<section
			style={{ minHeight: 'calc(100vh - 80px)' }}
			className="  py-4 w-[70rem] mx-10"
		>
			{loading || loading === undefined ? (
				<Loader />
			) : (
				<div>
					{(conversation && conversation.length < 1) ||
					conversation === undefined ? (
						<NoMessage user={user} />
					) : (
						<div
							style={{ maxHeight: 'calc(100vh - 90px)' }}
							className="bg-white grid grid-cols-3 rounded-md shadow-sm"
						>
							<div
								style={{ height: 'calc(100vh - 90px)' }}
								className="border-r overflow-hidden"
							>
								<Search />

								{conversation &&
									conversation.map(conversation => (
										<div
											key={conversation._id}
											onClick={() => {
												setCurrentConversation(conversation),
													dispatch(
														removeMessageAction({
															conversationId: conversation._id,
														})
													);
											}}
										>
											<Conversation
												conversation={conversation}
												setTutorId={setTutorId}
												setConversationId={setConversationId}
												user={user}
												stateMessages={stateMessages}
											/>
										</div>
									))}
							</div>

							<div
								style={{ maxHeight: 'calc(100vh - 8rem)' }}
								className="col-span-2 flex flex-col overflow-auto justify-between"
							>
								<div className="h-16 border-b">
									<div className="flex h-full items-center space-x-2 pl-8">
										<Image
											className="w-9 h-9 rounded-full object-cover"
											src={tutorImage2}
											alt="tutor"
										/>
										<div>
											<h2 className="text-gray-900 font-semibold">
												{user?.name}
											</h2>
											<p className="text-xs text-gray-500">Online</p>
										</div>
									</div>
								</div>
								<div className="overflow-y-auto scrollbar_edit p-4 flex-1">
									<div className="overflow-y-auto">
										{messages &&
											messages.map((chat, index) => (
												<Chat
													key={chat._id}
													chat={chat}
													userId={user._id}
													refForScroll={scrollRef}
												/>
											))}
									</div>
									{showEmoji && (
										<EmojiPicker
											height={300}
											width={300}
											onEmojiClick={handleEmojiClick}
										/>
									)}
								</div>

								{currentConversation === null ? (
									<h3
										style={{ height: 'calc(100vh - 90px)' }}
										className="text-gray-400 text-center"
									>
										Select a conversation to start messaging
									</h3>
								) : (
									<MessageBox
										changeHandler={changeHandler}
										handleSubmit={handleSubmit}
										handleEmoji={handleEmoji}
										newMessage={newMessage}
										setMessages={setMessages}
										setNewMessage={setNewMessage}
										setFileType={setFileType}
										setFile={setFile}
										file={file}
										preview={preview}
										setPreview={setPreview}
									/>
								)}
							</div>
						</div>
					)}
				</div>
			)}

			<AlertComponent />
		</section>
	);
};

export default Message;
