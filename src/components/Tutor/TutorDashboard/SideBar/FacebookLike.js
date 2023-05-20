import { useEffect, useState } from 'react';

export default function Facebook() {
	const loadScript = () => {
		console.log('Loading...');
		// let script = document.createElement('script');
		// script.setAttribute('crossOrigin', 'anonymous');
		// script.src =
		// 	'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v16.0&appId=888442272424061&autoLogAppEvents=1';
		// script.setAttribute('nonce', 'XMEXLFEZ');
		// script.type = 'text/javascript';
		// document.body.append(script);
		window.fbAsyncInit = function () {
			FB.init({
				appId: '888442272424061',
				cookie: true,
				xfbml: true,
				oauth: true,
			});

			// *** here is my code ***
			if (typeof facebookInit == 'function') {
				facebookInit();
			}

			function facebookInit() {
				FB.login(function (response) {
					if (response.status == 'connected') {
						FB.api(`me?fields=likes& Fields=id,name`, function (response) {
							if (response?.likes) {
								const likedPage = response.likes.data.find(
									res => res.name === 'Skilldizer'
								);
								if (likedPage === undefined) {
									alert('you did not liked page');
								} else {
									alert('you liked page');
								}
							}
						});
					}
				});
			}
		};

		(function (d) {
			var js,
				id = 'facebook-jssdk';
			if (d.getElementById(id)) {
				return;
			}
			js = d.createElement('script');
			js.id = id;
			js.async = true;
			js.src = '//connect.facebook.net/en_US/all.js';
			d.getElementsByTagName('head')[0].appendChild(js);
		})(document);
	};

	// useEffect(loadScript, []);

	return (
		// <div
		// 	className="fb-like"
		// 	data-href="https://www.facebook.com/Skilldizer-101614332566677"
		// 	data-width=""
		// 	data-layout="standard"
		// 	data-action="like"
		// 	data-size="small"
		// ></div>
		<button className="button" onClick={() => loadScript()}>
			Verify Facebook
		</button>
	);
}
