import React, { useState } from 'react';
import { RxInfoCircled } from 'react-icons/rx';

const PaypalPayout = ({
	handleEmailsChange,
	emailError,
	totalAmount,
	withdrawalFee,
	handleAmountChange,
}) => {
	let iconStyles = { color: '#FF5A00' };
	return (
		<div className="bg-[#ECEDED] mt-6 px-4 py-4 relative">
			<p>Enter the amount you want to withdraw to see how fees apply</p>
			<span className="flex flex-col mt-4">
				<label htmlFor="email" className="text-[#7C7878]">
					Email (linked to your Paypal account)
				</label>
				<input
					type="email"
					className="mt-2 bg-[#FFFFFF] border rounded border-[#7C7878] outline-none border-solid p-1"
					onChange={handleEmailsChange}
				/>
			</span>
			{emailError && (
				<p className="text-sm text-red-600 mt-2 text-start italic">
					Please enter a valid email
				</p>
			)}
			<div>
				<div className="flex items-center gap-28 mt-4">
					<h4 className="text=[#1E1E1E]">Amount</h4>
					<span>
						<span className="absolute ml-1 mt-1 text=[#1E1E1E]">$</span>
						<input
							type="text"
							className="bg-[#FFFFFF] border rounded border-[#7C7878] outline-none border-solid pl-6 h-8 w-28 text-right pr-2"
							placeholder="0"
							onChange={handleAmountChange}
						/>
					</span>
				</div>
				<div className="flex items-center gap-[2.7rem] mt-4">
					<span className="flex gap-2 justify-center items-center">
						<h4 className="text=[#1E1E1E]">Transaction fee </h4>
						<RxInfoCircled style={iconStyles} />
					</span>
					<span className="flex gap-x-[5.2rem]">
						<span className=" mt-1 text=[#1E1E1E]">$</span>
						<span>{withdrawalFee}</span>
					</span>
				</div>
				<div className="flex items-center gap-[2rem] mt-4">
					<h4 className="text=[#1E1E1E]">Withdrawal after fee</h4>
					<span className="flex gap-x-[5.2rem]">
						<span className=" mt-1 text=[#1E1E1E]">$</span>
						<span>{totalAmount - withdrawalFee}</span>
					</span>
				</div>
			</div>
			{/* <div className=" mt-4">
				<select className="select_input">
					<option value="" disabled selected>
						Explore Paypal Fees
					</option>
					<option value="male">
						Paypal charges a foreign exchange fee when transfer to non-USD
						accounts
					</option>
					<option value="female">Learn more about Paypal fees</option>
				</select>
			</div> */}
			<div className=" mt-4">
				<select className="select_input">
					<option value="" disabled selected>
						Skilldizer charges 1 USD for each withdrawal transaction
					</option>
					{/* <option value="male"></option> */}
				</select>
			</div>
		</div>
	);
};

export default PaypalPayout;
