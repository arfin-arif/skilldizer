import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta name="robots" content="all" />
					<link rel="apple-touch-icon" href="logo.png" />
					<link rel="shortcut icon" href="FAVICON.jpg" />
				</Head>
				<body className="relative">
					<script
						src="https://www.paypal.com/sdk/js?client-id=AW6ykHzEKtKxuS1GPqox3uvhNzlAF8zWVXzsUqn5S0QmN49_35Wiq_bdEyJ5wf3kaREZcvc681rE27-l&currency=USD"
						async
					></script>
					<script src="https://apis.google.com/js/api.js" async></script>

					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
