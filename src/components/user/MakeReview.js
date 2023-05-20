import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Rating } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { makeReview } from '../../store/actions/userAction';
import { openAlert } from '../../store/reducer/alertReducer';
import { clearError, clearSuccess } from '../../store/reducer/userReducer';
import AlertComponent from '../Utils/AlertComponent';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	borderRadius: '10px',
	border: 'none',
	boxShadow: 24,
	p: 4,
	'&$focusVisible': {
		outline: 'none',
	},
};

export default function MakeReview({
	tutorId,
	openReviewModel,
	setOpenReviewModel,
}) {
	const [comment, setComment] = React.useState('');
	const [value, setValue] = React.useState(2.5);
	const dispatch = useDispatch();
	const { loading, error, message } = useSelector(state => state.user);

	const handleReview = () => {
		dispatch(makeReview(tutorId, value, comment));
	};

	React.useEffect(() => {
		if (error) {
			dispatch(openAlert({ severity: 'error', message: error }));
			dispatch(clearError());
			return;
		}

		if (message) {
			setOpenReviewModel(false);
			dispatch(openAlert({ severity: 'success', message: message }));
			dispatch(clearSuccess());
			return;
		}
	}, [error, message, dispatch, setOpenReviewModel]);

	return (
		<div>
			<Modal
				aria-labelledby="spring-modal-title"
				aria-describedby="spring-modal-description"
				open={openReviewModel}
				onClose={() => setOpenReviewModel(false)}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Box sx={style}>
					<h2 className="text-[1.5rem] text-[#313140] font-semibold">
						Rate and review
					</h2>
					<Rating
						name="half-rating"
						defaultValue={value}
						sx={{ fontSize: '45px', marginTop: '15px', marginBottom: '15px' }}
						precision={0.1}
						onChange={(event, newValue) => {
							setValue(newValue);
						}}
					/>
					<label className="label">Review</label>
					<textarea
						placeholder="Great!! he is very nice and he corrects the mistakes"
						className="select_input"
						rows={4}
						value={comment}
						name="comment"
						onChange={e => setComment(e.target.value)}
					/>
					<div className="flex items-center space-x-4 justify-between mt-5 w-full">
						<button
							onClick={() => setOpenReviewModel(false)}
							className="cursor-pointer border-2 rounded-lg px-4 py-2 font-bold shadow-sm border-[#FDECE4] transition-all duration-150 hover:border-[#ffd9c7] "
						>
							No Later
						</button>
						<button
							disabled={loading}
							onClick={handleReview}
							className="button px-8"
						>
							{loading ? (
								<>
									<svg
										role="status"
										className="inline mr-2 w-4 h-4 text-white animate-spin dark:text-gray-600 fill-white"
										viewBox="0 0 100 101"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
											fill="currentColor"
										/>
										<path
											d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
											fill="currentFill"
										/>
									</svg>
									Processing...
								</>
							) : (
								'Post'
							)}
						</button>
					</div>
				</Box>
			</Modal>
			<AlertComponent />
		</div>
	);
}
