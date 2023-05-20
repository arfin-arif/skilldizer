import React, { useState, useRef } from 'react';
import Dialog from '@mui/material/Dialog';
import { useDispatch, useSelector } from 'react-redux';
import { openAlert } from '../../../../store/reducer/alertReducer';
import { clearSuccess } from '../../../../store/reducer/userReducer';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { FiCamera } from 'react-icons/fi';
import { GrAttachment } from 'react-icons/gr';
import axios from 'axios';

function ReportDialog(props) {
	const dispatch = useDispatch();
	const textRef = useRef();
	const { onClose, open, bookingId } = props;
	const [issue, seIssue] = useState(0);
	const [issueText, seIssueText] = useState('');
	const [file, setFile] = useState(null);

	const checkedValuesHandler = event => {
		const { id } = event.target;
		seIssue(id);
		seIssueText(event.target.value);
	};

	const onChange = e => {
		if (e.target.files.length) {
			const inputFile = e.target.files[0];
			setFile(inputFile);
		}
	};

	const handleSubmit = async () => {
		axios
			.post(
				`${process.env.REACT_APP_BACKEND_API}/api/v1/booking/report-issue`,
				{
					issue: issueText,
					text: textRef.current ? textRef.current.value : '',
					bookingId,
				},
				{
					withCredentials: true,
					headers: {
						'Content-Type': 'application/json',
					},
				}
			)
			.then(res => {
				if (file !== null) {
					const formData = new FormData();

					formData.append('file', file);

					axios.post(
						`${process.env.REACT_APP_BACKEND_API}/api/v1/booking/issue-file/${res.data?.data?.report._id}`,
						formData,
						{
							withCredentials: true,
							headers: {
								'Content-Type': 'multipart/form-data',
							},
						}
					);
				}
				dispatch(
					openAlert({ severity: 'success', message: res.data.data.message })
				);
				dispatch(clearSuccess());
			})
			.catch(err => {
				dispatch(
					openAlert({
						severity: 'error',
						message: err?.response?.data?.message,
					})
				);
				dispatch(clearSuccess());
			});

		onClose(!open);
	};

	const handleClose = () => {
		onClose(!open);
	};

	const style = { color: '#FF5A00' };

	return (
		<Dialog onClose={handleClose} open={open}>
			<div className="my-5 mx-10">
				<AiOutlineQuestionCircle size={40} style={style} />
				<h1 className="font-bold text-2xl mt-6">Tell us what happened</h1>
			</div>
			<div className="mx-10 flex flex-col gap-2">
				<span className="flex items-center">
					<input
						id="1"
						type="radio"
						value="We agreed to reschedule"
						name="list-radio"
						onChange={checkedValuesHandler}
						className="w-4 h-4 rounded-full appearance-none border  border-[#DADFE1]  checked:bg-[#FF5A00]"
					/>
					<label
						for="card"
						className="py-1 ml-2 w-full text-sm flex justify-between items-center"
					>
						We agreed to reschedule
					</label>
				</span>
				<span className="flex items-center">
					<input
						id="2"
						type="radio"
						value="We had technical problems"
						name="list-radio"
						onChange={checkedValuesHandler}
						className="w-4 h-4 rounded-full appearance-none border  border-[#DADFE1]  checked:bg-[#FF5A00]"
					/>
					<label
						for="card"
						className="py-1 ml-2 w-full text-sm flex justify-between items-center"
					>
						We had technical problems
					</label>
				</span>
				<span className="flex items-center">
					<input
						id="3"
						type="radio"
						value="Student was absent"
						name="list-radio"
						onChange={checkedValuesHandler}
						className="w-4 h-4 rounded-full appearance-none border  border-[#DADFE1]  checked:bg-[#FF5A00]"
					/>
					<label
						for="card"
						className="py-1 ml-2 w-full text-sm flex justify-between items-center"
					>
						Student was absent
					</label>
				</span>
				<span className="flex items-center">
					<input
						id="4"
						type="radio"
						value="Student didn't confirm the class"
						name="list-radio"
						onChange={checkedValuesHandler}
						className="w-4 h-4 rounded-full appearance-none border  border-[#DADFE1]  checked:bg-[#FF5A00]"
					/>
					<label
						for="card"
						className="py-1 ml-2 w-full text-sm flex justify-between items-center"
					>
						Student didn&apos;t confirm the class
					</label>
				</span>
				<span className="flex items-center">
					<input
						id="5"
						type="radio"
						value="I was absent"
						name="list-radio"
						onChange={checkedValuesHandler}
						className="w-4 h-4 rounded-full appearance-none border  border-[#DADFE1]  checked:bg-[#FF5A00]"
					/>
					<label
						for="card"
						className="py-1 ml-2 w-full text-sm flex justify-between items-center"
					>
						I was absent
					</label>
				</span>
				<span className="flex items-center">
					<input
						id="6"
						type="radio"
						value="Other issues"
						name="list-radio"
						onChange={checkedValuesHandler}
						className="w-4 h-4 rounded-full appearance-none border  border-[#DADFE1]  checked:bg-[#FF5A00]"
					/>
					<label
						for="card"
						className="py-1 ml-2 w-full text-sm flex justify-between items-center"
					>
						Other issues
					</label>
				</span>
			</div>
			{issue == 6 && (
				<div className="">
					<textarea
						ref={textRef}
						name="postContent"
						rows={4}
						cols={35}
						className="border-2 md:w-80 mx-6"
					/>
					<div className="border-2 md:w-80 mx-6 flex py-2 px-2 justify-between -mt-2 items-center w-[16.78rem]">
						<span className="flex gap-4">
							<label htmlFor="file" className="cursor-pointer">
								<FiCamera size={20} />
							</label>
							<label htmlFor="file" className="cursor-pointer">
								<GrAttachment size={20} />
							</label>

							<div>{file && file.name}</div>

							<input
								type="file"
								id="file"
								className="hidden"
								onChange={onChange}
							/>
						</span>
						<span>
							<button className="h-8 bg-[#FF5A00] w-16 rounded-md text-white">
								Send
							</button>
						</span>
					</div>
				</div>
			)}
			<button
				className="md:w-80 bg-[#F8F8F8] my-5 shadow-sm shadow-[#DADFE1] border-2 py-2 mx-6"
				type="submit"
				onClick={handleSubmit}
			>
				Submit
			</button>
		</Dialog>
	);
}

export default ReportDialog;
