import React, { useState } from 'react';
import { useEffect } from 'react';
import Script from 'next/script';
import axios from 'axios';
const YoutubeSubscribe = () => {
	gapi.load('client:auth2', function () {
		gapi.auth2.init({
			client_id:
				'13137801043-8q6dqpjhi4hap464p2k66bd91f67n7mb.apps.googleusercontent.com',
			plugin_name: 'Skilldizer',
		});
	});

	function authenticate() {
		return gapi.auth2
			.getAuthInstance()
			.signIn({ scope: 'https://www.googleapis.com/auth/youtube.readonly' })
			.then(
				function () {
					console.log('Sign-in successful');
					gapi.client.setApiKey('AIzaSyCfq-SrImBUAjlmZ9Hk1FzlCpPYGzXwOEM');
					return gapi.client.load('youtube', 'v3').then(
						function () {
							console.log('GAPI client loaded for API');
							return gapi.client.youtube.subscriptions
								.list({
									part: ['snippet,contentDetails'],
									mine: true,
								})
								.then(
									function (response) {
										// Handle the results here (response.result has the parsed body).
										console.log('Response', response);
										const channel = response.result.items.find(
											res => res.snippet.title === 'Skilldizer'
										);
										if (channel === undefined) {
											alert('you did not subscribed');
										} else {
											alert('you succcessfully subscribed');
										}
									},
									function (err) {
										console.error('Execute error', err);
									}
								);
						},
						function (err) {
							console.error('Error loading GAPI client for API', err);
						}
					);
				},
				function (err) {
					console.error('Error signing in', err);
				}
			);
	}

	// Make sure the client is loaded and sign-in is complete before calling this method.
	function execute() {
		return gapi.client.youtube.subscriptions
			.list({
				part: ['snippet,contentDetails'],
				mine: true,
			})
			.then(
				function (response) {
					// Handle the results here (response.result has the parsed body).
					console.log('Response', response);
					const channel = response.result.items.find(
						res => res.snippet.title === 'Skilldizer'
					);
					if (channel === undefined) {
						alert('you did not subscribed');
					} else {
						alert('you succcessfully subscribed');
					}
				},
				function (err) {
					console.error('Execute error', err);
				}
			);
	}

	return (
		<>
			<button className="button" onClick={() => authenticate()}>
				Verify Youtube
			</button>
			{/* <button onClick={() => execute()}>execute</button> */}
		</>
	);
};

export default YoutubeSubscribe;
