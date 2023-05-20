import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { tutorAvatar } from '../../store/reducer/tutorReducer';
import Avatar from 'react-avatar-edit';

const AvatarComponent = () => {
	const [preview, setPreview] = useState(null);

	const dispatch = useDispatch();

	const [src, setSrc] = useState(null);
	const onCrop = view => {
		setPreview(view);
	};
	const onClose = () => {
		setPreview(null);
	};

	useEffect(() => {
		dispatch(tutorAvatar(preview));
	}, [dispatch, preview]);
	return (
		<Avatar
			borderStyle={{
				borderColor: 'orange',
				border: '2px dashed orange',
				display: 'grid',
				placeItems: 'center',
			}}
			width={392}
			height={312}
			onCrop={onCrop}
			onClose={onClose}
			src={src}
			labelStyle={{
				lineHeight: '200px !important',
				maxHeight: '200px',
				marginTop: '-14px',
				fontWeight: 'bold',
				fontSize: '30px',
				cursor: 'pointer',
			}}
		/>
	);
};

export default AvatarComponent;
