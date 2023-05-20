import React from 'react';
import Image from 'next/image';

import { openAlert } from '../../../../store/reducer/alertReducer';
import { clearSuccess } from '../../../../store/reducer/userReducer';
import { useDispatch } from 'react-redux';

import googleCalendar from '../../../../../public/images/Google_Calendar_icon_(2020).svg.png';
import { useState } from 'react';

const GoogleCalendar = () => {
	const dispatch = useDispatch();

	var gapi = window.gapi;
	/* 
    Update with your own Client Id and Api key 
  */
	var CLIENT_ID =
		'13137801043-oh5h17muud4p85eh2kg6da267h9k8aut.apps.googleusercontent.com';
	var API_KEY = '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';
	var DISCOVERY_DOCS = [
		'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
	];
	var SCOPES = 'https://www.googleapis.com/auth/calendar.events';

	const handleClick = () => {
		gapi.load('client:auth2', () => {
			console.log('loaded client');

			gapi.client.init({
				apiKey: API_KEY,
				clientId: CLIENT_ID,
				discoveryDocs: DISCOVERY_DOCS,
				scope: SCOPES,
				plugin_name: 'skilldizer Calendar',
			});

			gapi.client.setApiKey('AIzaSyCfq-SrImBUAjlmZ9Hk1FzlCpPYGzXwOEM');

			gapi.client.load('calendar', 'v3', () => console.log('calender loaded'));

			console.log(gapi.client.calendar);

			gapi.auth2
				.getAuthInstance()
				.signIn()
				.then(() => {
					gapi.client.calendar.events
						.list({
							calendarId: 'primary',
							timeMin: new Date().toISOString(),
							showDeleted: false,
							singleEvents: true,
							maxResults: 10,
							orderBy: 'startTime',
						})
						.then(response => {
							// const events = response.result.items;
							console.log('EVENTS: ', response);

							dispatch(
								openAlert({
									severity: 'success',
									message: 'Calendar Integrated successfully',
								})
							);
							dispatch(clearSuccess());
						});
				});
		});
	};

	return (
		<section className="h-[50vh] bg-[#FE803C] rounded-lg flex justify-center items-center flex-col text-white">
			<Image
				src={googleCalendar}
				alt="google calendar"
				className="w-20"
			></Image>
			<h1 className="flex text-[20px] mt-4">Avoid rescheduling</h1>
			<p className="text-[14px] mt-1">Connect your Google Calendars </p>
			<p className="text-[14px] mt-1">
				to automatically keep your availability accurate
			</p>
			<button
				className="text-[#FF5A00] bg-white px-8 py-2 text-[13px] font-semibold mt-2"
				onClick={handleClick}
			>
				Connect Google Calendar
			</button>
		</section>
	);
};

export default GoogleCalendar;
