import React, { useState, useEffect } from 'react';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import AlertComponent from '../../Utils/AlertComponent';
import { clearError } from '../../../store/reducer/userReducer';
import { openAlert } from '../../../store/reducer/alertReducer';
import { useSelector, useDispatch } from 'react-redux';
import { paypalPaymentAction } from '../../../store/actions/paymentAction';
import router from 'next/router';

const PayPal = ({ paymentInfo }) => {
	const [success, setSuccess] = useState(null);
	const { error, payment } = useSelector(state => state.payment);
	const { tutor, totalFee, processFee, date, startTime, endTime } = paymentInfo;

	const { user } = useSelector(state => state.user);
	const paymentData = {
		userId: user._id,
		tutorId: tutor._id,
		amount: totalFee,
		paymentMethod: 'paypal',
		date: date,
		startTime: startTime,
		endTime: endTime,
	};

	const dispatch = useDispatch();
	useEffect(() => {
		if (error) {
			dispatch(openAlert({ severity: 'error', message: error }));
			dispatch(clearError());
			return;
		}
		if (success === true && payment !== undefined) {
			router.replace({
				pathname: '/profile/dashboard',
				query: { status: 'success', id: payment },
			});
		}
		if (success === false && payment !== undefined) {
			router.replace({
				pathname: '/profile/dashboard',
				query: { status: 'cancel', id: payment },
			});
		}
	}, [error, dispatch, success, payment]);

	// creates a paypal order
	const createOrder = (data, actions) => {
		return actions.order
			.create({
				purchase_units: [
					{
						amount: {
							value: totalFee,
						},
					},
				],

				// remove the application_context object if you need your users to add a shipping address
				application_context: {
					shipping_preference: 'NO_SHIPPING',
				},
			})
			.then(orderID => {
				// setOrderID(orderID);
				return orderID;
			});
	};

	// handles when a payment is confirmed by paypal
	const onApprove = async (paypalData, actions) => {
		return actions.order.capture().then(function (details) {
			dispatch(paypalPaymentAction(paymentData));
			setSuccess(true);
		});
	};

	// handles when a payment is declined
	const onError = (data, actions) => {
		dispatch(
			openAlert({
				severity: 'error',
				message: 'Something went wrong with your payment,please try again',
			})
		);
		dispatch(clearError());
		setSuccess(false);
	};

	return (
		<div className="mt-1 max-w-md">
			<PayPalScriptProvider
				options={{
					components: 'buttons',
					currency: 'USD',
					intent: 'capture',
					'client-id':
						'AW6ykHzEKtKxuS1GPqox3uvhNzlAF8zWVXzsUqn5S0QmN49_35Wiq_bdEyJ5wf3kaREZcvc681rE27-l',
				}}
			>
				<PayPalButtons
					style={{
						color: 'gold',
						shape: 'rect',
						tagline: false,
						layout: 'vertical',
					}}
					fundingSource="paypal"
					createOrder={createOrder}
					onApprove={onApprove}
					onError={onError}
				/>
			</PayPalScriptProvider>
			<AlertComponent />
		</div>
	);
};

export default PayPal;
