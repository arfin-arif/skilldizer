import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import Image from 'next/image';
import PaypalPayout from './PaypalPayout';
import { paypalPayout } from '../../../../store/actions/paymentAction';
import { useDispatch, useSelector } from 'react-redux';

// * Logos
import wiseLogo from '../../../../../public/images/wise_hero_blue_navy_RGB.svg';
import payoneerLogo from '../../../../../public/images/Payoneer_Master_Logo_OnWhite_RGB.svg';
import paypalLogo from '../../../../../public/images/PayPal_Logo_Horizontal_Full_Color_RGB.png';

import { BsTriangleFill } from 'react-icons/bs';

function PayoutCard(props) {
	const { onClose, open, tutorId, schedule } = props;
	const [currentTab, setCurrentTab] = useState('paypal');
	const [email, setEmail] = useState(null);
	const [emailError, setEmailError] = useState(false);
	const [amount, setAmount] = useState(0);
	const [totalAmount, setTotalAmount] = useState(0);
	const [withdrawalFee, setWithdrawalFee] = useState(0);
	const dispatch = useDispatch();
	const handleEmailsChange = e => {
		setEmail(e.target.value);
		// TODO: active email validator
		if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(e.target.value)) {
			setEmailError(false);
		} else {
			setEmailError(true);
		}
	};

	const handleAmountChange = e => {
		console.log(e.target.value);
		setTotalAmount(e.target.value);
		// const paypalFee = ((e.target.value / 100) * 2.99).toFixed(1);
		// const totalFee = Number(paypalFee) + 1.0;
		setWithdrawalFee(1);
		// console.log(totalAmount);
		setAmount(e.target.value - 1);
	};

	const handleClose = () => {
		onClose(!open);
	};

	const handleTabClick = tab => {
		setCurrentTab(tab);
	};

	let triangleStyle = {
		color: '#ECEDED',
		stroke: '#ECEDED',
	};

	const handleSubmit = () => {
		console.log('amount', amount);
		dispatch(paypalPayout(amount, totalAmount, email));
	};

	return (
		<Dialog onClose={handleClose} open={open}>
			<div className="w-[35rem] my-8 px-4">
				<p>Withdrawal from your internal account</p>
				<div className="flex justify-around mt-4">
					{/* <div
						onClick={() => handleTabClick('wise')}
						className="cursor-pointer"
					>
						<div
							className={
								currentTab === 'wise'
									? `border-[#FF5A00] border-t-4 mb-2`
									: 'border-[#D9D9D9 border-t-4 mb-2'
							}
						></div>
						<Image src={wiseLogo} alt="wise payout" width={84.21} height={20} />
					</div> */}
					{/* <div
						onClick={() => handleTabClick('payoneer')}
						className="cursor-pointer"
					>
						<div
							className={
								currentTab === 'payoneer'
									? `border-[#FF5A00] border-t-4 mb-2`
									: 'border-[#D9D9D9 border-t-4 mb-2'
							}
						></div>
						<Image
							src={payoneerLogo}
							alt="payoneer payout"
							width={84.21}
							height={20}
						/>
					</div> */}
					<div
						onClick={() => handleTabClick('paypal')}
						className="cursor-pointer"
					>
						<div
							className={
								currentTab === 'paypal'
									? `border-[#FF5A00] border-t-4 mb-2`
									: 'border-[#D9D9D9 border-t-4 mb-2'
							}
						></div>
						<Image
							src={paypalLogo}
							alt="payoneer payout"
							width={84.21}
							height={20}
						/>
					</div>
				</div>
				{/* {currentTab === 'wise' && (
					<div className="mt-2">
						<BsTriangleFill
							style={triangleStyle}
							size={60}
							className="absolute left-20 top-[7rem]"
						/>
						<PaypalPayout />
					</div>
				)}
				{currentTab === 'payoneer' && (
					<div className="mt-2">
						<BsTriangleFill
							style={triangleStyle}
							size={60}
							className="absolute left-64 top-[7rem]"
						/>
						<PaypalPayout />
					</div>
				)} */}
				{/* {currentTab === 'paypal' && ( */}
				<div className="mt-2">
					<BsTriangleFill
						style={triangleStyle}
						size={60}
						className="absolute left-64 top-[7rem]"
					/>
					<PaypalPayout
						handleEmailsChange={handleEmailsChange}
						emailError={emailError}
						handleAmountChange={handleAmountChange}
						totalAmount={totalAmount}
						withdrawalFee={withdrawalFee}
					/>
				</div>
				{/* )} */}

				<div className="flex justify-end space-x-3 mt-5">
					<button
						onClick={handleClose}
						className="bg-[#FFFFFF] border border-solid rounded border-[#FF5A00] py-3 px-4"
					>
						Cancel
					</button>
					<button
						onClick={handleSubmit}
						type="submit"
						className="button"
						disabled={!email || !amount}
					>
						Withdraw earning
					</button>
				</div>
			</div>
		</Dialog>
	);
}

export default PayoutCard;
