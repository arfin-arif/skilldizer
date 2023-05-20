import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Checkout from '../../src/components/Payment/Checkout';

const index = props => {
	const tutor = props.tutor;
	if (!tutor) {
		// <Loader />;
		<h1>loading...</h1>;
	}
	return (
		<div className="bg-[#EDEFF0]">
			<Checkout tutor={tutor} />
		</div>
	);
};

export async function getServerSideProps(context) {
	const tutorId = context.params.tutorId;
	const { data } = await axios.get(
		`${process.env.REACT_APP_BACKEND_API}/api/v1/tutor/getTutor/${tutorId}`,
		{
			withCredentials: true,
			headers: {
				'Content-Type': 'application/json',
			},
		}
	);

	return {
		props: {
			tutor: data.tutor,
		},
	};
}

export default index;
index.requireAuth = true;
