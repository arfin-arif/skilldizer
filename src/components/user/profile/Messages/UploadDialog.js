import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import Image from 'next/image';

function UploadDialog(props) {
	const [filename, setFilename] = useState('Choose File');

	const {
		onClose,
		open,
		setNewMessage,
		setOpen,
		setFileType,
		setFile,
		file,
		preview,
		setPreview,
	} = props;

	// Preview File
	// create a preview as a side effect, whenever selected file is changed
	useEffect(() => {
		if (!file) {
			setPreview(null);
			return;
		}

		file.type.startsWith('image');
		if (file.type.startsWith('image')) {
			const objectUrl = URL.createObjectURL(file);
			setPreview(objectUrl);
		} else {
			setPreview(null);
			// // free memory when ever this component is unmounted
			// return () => URL.revokeObjectURL(objectUrl);
		}
	}, [file]);

	const handleClose = () => {
		onClose(!open);
	};

	const onChange = e => {
		// Check if user has entered the file
		if (e.target.files.length) {
			const inputFile = e.target.files[0];
			setFile(inputFile);
			setFilename(inputFile.name);
			const fileExtension = inputFile.type.split('/')[1];
			setFileType(fileExtension);
		}
	};

	const handleUpload = () => {
		setOpen(!open);
		setNewMessage(filename);
		// setPreview(null);
	};

	return (
		<Dialog onClose={handleClose} open={open}>
			<div className="py-6 px-2 flex flex-col gap-4">
				{file && preview && (
					<Image src={preview} alt="preview" width={500} height={500} />
				)}
				<input type="file" id="customFile" onChange={onChange} />
				<button
					onClick={handleUpload}
					disabled={!file}
					type="submit"
					className="button"
				>
					Upload
				</button>
			</div>
		</Dialog>
	);
}

export default UploadDialog;
