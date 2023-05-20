import React from 'react';
import Dialog from '@mui/material/Dialog';
import { RxCross2 } from 'react-icons/rx';
import { openAlert } from '../../../../store/reducer/alertReducer';
import { clearSuccess } from '../../../../store/reducer/userReducer';
import { useDispatch } from 'react-redux';

const ChangePriceDialog = props => {
	const { onClose, open } = props;

	const handleClose = () => {
		onClose(!open);
	};

	const dispatch = useDispatch();
	const handleSave = () => {
		onClose(!open);
		dispatch(
			openAlert({
				severity: 'success',
				message: 'Request for price change submitted successfully',
			})
		);
		dispatch(clearSuccess());
	};

	return (
		<Dialog onClose={handleClose} open={open}>
			<div className="my-5 md:w-[32rem]  mx-10">
				<div className="flex justify-between items-center  text-black text-lg">
					<h1 className="font-bold text-[16px]">Change your price</h1>
					<RxCross2 className="cursor-pointer" onClick={handleClose} />
				</div>
				<div className="mt-4 border-dotted border-2 border-b mr-20"></div>
				<p className="font-[400] text-[13px] text-[#999999] mt-2">
					Before changing your price, please make sure the student: <br />
					<ol>
						<li>• agrees to these changes</li>
						<li>• has no scheduled Classes or Classes awaiting confirmation</li>
					</ol>
					If the student has unused learning hours, they will be recalculated
					based on the new price.
				</p>
				<h3 className="text-[#090F19] text-[14px] font-[500] mt-2">
					After submitting, we will contact your student to confirm the price
					change.
				</h3>
				<div className="bg-[#F5F5F2] mt-2 md:p-3 py-1 flex gap-4">
					<h3 className="text-[#090F19] text-[15px] font-[500] pl-10">
						Price per hour:
					</h3>
					<span className="flex gap-2">
						<h3 className="font-bold">$</h3>

						<input
							type="text"
							className="w-[3rem] bg-[##FFFFFF] text-black font-semibold text-center border border-[#CCCCCC]"
							placeholder="30"
						/>
					</span>
				</div>

				<div className="mt-4 flex gap-4 items-center">
					<button
						className="bg-[#FF5A00] text-white md:py-2 md:px-8 px-4 py-2"
						onClick={handleSave}
					>
						Set new price
					</button>
					<span className="flex gap-2">
						<h2 className="text-[#999999]"> or</h2>
						<h3
							className="text-[#090F19]  border-b border-dotted border-[#3BB3BD4D] cursor-pointer"
							onClick={handleClose}
						>
							cancel
						</h3>
					</span>
				</div>
			</div>
		</Dialog>
	);
};

export default ChangePriceDialog;
