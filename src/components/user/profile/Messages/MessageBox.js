import React, { useState } from 'react';
import { BsEmojiSmile } from 'react-icons/bs';
import { RiSendPlaneFill } from 'react-icons/ri';
import { GrAttachment } from 'react-icons/gr';
import UploadDialog from './UploadDialog';

const MessageBox = ({
	changeHandler,
	handleSubmit,
	newMessage,
	handleEmoji,
	setNewMessage,
	setFileType,
	setFile,
	file,
	preview,
	setPreview,
}) => {
	let iconStyles = { cursor: 'pointer' };

	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<div className="flex place-self-end py-3 items-center space-x-4 px-6 justify-between w-full">
				<div className="bg-gray-50 space-x-5 flex-1 justify-between h-14 rounded-full flex items-center px-5">
					<div className="flex flex-1 items-center space-x-5">
						<span className="text-xl text-gray-900">
							<BsEmojiSmile onClick={handleEmoji} style={iconStyles} />
						</span>
						<input
							type="text"
							className="outline-none flex-1 bg-transparent"
							placeholder="Type something.."
							onChange={changeHandler}
							value={newMessage}
						/>
					</div>
					<span className="text-xl !text-gray-200">
						<GrAttachment onClick={handleClickOpen} style={iconStyles} />
						<UploadDialog
							setNewMessage={setNewMessage}
							open={open}
							onClose={handleClose}
							setOpen={setOpen}
							setFileType={setFileType}
							setFile={setFile}
							file={file}
							preview={preview}
							setPreview={setPreview}
						/>
					</span>
				</div>
				<button
					className="text-2xl bg-[#FF5A00] text-white p-3 rounded-full cursor-pointer"
					onClick={handleSubmit}
				>
					<RiSendPlaneFill />
				</button>
			</div>
		</>
	);
};

export default MessageBox;
