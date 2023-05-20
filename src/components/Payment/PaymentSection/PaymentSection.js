import React, { useState } from 'react';
import { AiOutlineLock } from 'react-icons/ai';
import PaymentSvg from './PaymentSvg';
import PaypalSvg from './PaypalSvg';
import PayPal from '../PayPal/PayPal';
import Stripe from '../Stripe/Stripe';

const PaymentSection = ({ paymentInfo }) => {
	const { totalFee } = paymentInfo;
	let iconStyles = { color: '#50BF16' };
	const [paymentMethod, setPaymentMethod] = useState('');
	const checkedValuesHandler = event => {
		const { id } = event.target;
		setPaymentMethod(id);
	};

	return (
		<div className="basis-3/5 bg-[#fff] mt-10 px-8 h-full pb-10">
			<h1 className="mt-6 text-3xl font-bold">Payment method</h1>
			<div className="mt-6 flex gap-2">
				<h4>
					<AiOutlineLock style={iconStyles} />
				</h4>
				<p className="text-xs">
					It’s safe to pay on Skilldizer. All transactions are protected by SSL
					encryption.
				</p>
			</div>
			<div className="mt-10 flex flex-col gap-4">
				<div
					className={
						paymentMethod === 'card'
							? 'flex items-center pl-3 border border-[#FF5A00]'
							: 'flex items-center pl-3 border'
					}
				>
					<input
						id="card"
						type="radio"
						value=""
						name="list-radio"
						onChange={checkedValuesHandler}
						className="w-4 h-4 appearance-none rounded-full bg-gray-100 border-gray-300  checked:bg-[#FF5A00]"
					/>
					<label
						for="card"
						className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300 flex justify-between items-center"
					>
						<PaymentSvg />
						<span className="pr-6 align-middle">
							<AiOutlineLock />
						</span>
					</label>
				</div>
				{paymentMethod === 'card' && (
					<div className="my-2">
						<Stripe paymentInfo={paymentInfo} />
					</div>
				)}

				<div
					className={
						paymentMethod === 'paypal'
							? 'flex items-center pl-3 border border-[#FF5A00]'
							: 'flex items-center pl-3 border'
					}
				>
					<input
						id="paypal"
						type="radio"
						value=""
						name="list-radio"
						onChange={checkedValuesHandler}
						className="w-4 h-4 appearance-none rounded-full bg-gray-100 border-gray-300  checked:bg-[#FF5A00]"
					/>
					<label
						for="paypal"
						className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300 flex justify-between items-center"
					>
						<PaypalSvg />
						<span className="pr-6 align-middle">
							<AiOutlineLock />
						</span>
					</label>
				</div>
			</div>
			{paymentMethod === 'paypal' && (
				<div className="mt-5">
					<PayPal paymentInfo={paymentInfo} />
				</div>
			)}
		</div>
	);
};

export default PaymentSection;
