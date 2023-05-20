import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { clearError } from '../../../store/reducer/userReducer';
import { openAlert } from '../../../store/reducer/alertReducer';
import { useSelector, useDispatch } from 'react-redux';

const publishableKey = process.env.STRIPE_CLIENT_ID;
const stripePromise = loadStripe(publishableKey);
export default function Stripe({ paymentInfo }) {
	const { tutor, totalFee, processFee, date, startTime, endTime } = paymentInfo;
	const { user } = useSelector(state => state.user);
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();

	const data = {
		userId: user._id,
		tutorId: tutor._id,
		amount: totalFee,
		paymentMethod: 'stripe',
		date: date,
		startTime: startTime,
		endTime: endTime,
	};

	const createCheckOutSession = async () => {
		setLoading(true);
		const stripe = await stripePromise;

		const checkoutSession = await axios.post(
			`${process.env.REACT_APP_BACKEND_API}/api/v1/payment/stripe-payment`,

			{ data },

			{
				withCredentials: true,
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		localStorage.setItem('stripeSessionId', checkoutSession.data.id);

		const result = await stripe.redirectToCheckout({
			sessionId: checkoutSession.data.id,
		});

		if (result.error) {
			dispatch(openAlert({ severity: 'error', message: result.error.message }));
			dispatch(clearError());
		}
		setLoading(false);
	};

	return (
		<div>
			<button
				disabled={loading}
				onClick={createCheckOutSession}
				className="bg-blue-500 hover:bg-blue-600 text-white block w-full py-2 rounded mt-2 disabled:cursor-not-allowed disabled:bg-blue-100"
			>
				{loading ? 'Processing...' : 'Proceed to checkout'}
			</button>
		</div>
	);
}
