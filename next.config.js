/** @type {import('next').NextConfig} */
const nextConfig = {
	// reactStrictMode: true,

	env: {
		REACT_APP_BACKEND_API: process.env.REACT_APP_BACKEND_API,
		GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
		PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID,
		STRIPE_CLIENT_ID: process.env.STRIPE_CLIENT_ID,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
			},
		],
	},
	eslint: {
    		ignoreDuringBuilds: true,
	},
};

module.exports = nextConfig;
