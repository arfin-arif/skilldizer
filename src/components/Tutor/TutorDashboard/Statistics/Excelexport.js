import React, { useState } from 'react';
import * as FileSaver from 'file-saver';
import XLSX from 'sheetjs-style';
import EarningsReport from './EarningsReport';

const ExportExcel = ({
	excelData,
	fileName,
	selectedButton,
	setSelectedButton,
	handleWeekButton,
	handleMonthButton,
	handleQuarterButton,
	handleYearButton,
	setFrom,
	setTo,
	from,
	to,
}) => {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = value => {
		setOpen(false);
	};
	const fileType =
		'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=UTF-8';

	const fileExtension = '.xlsx';

	const exportToExcel = async () => {
		const ws = XLSX.utils.json_to_sheet(excelData);

		const wb = { Sheets: { data: ws }, SheetNames: ['data'] };

		const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });

		const data = new Blob([excelBuffer], { type: fileType });

		FileSaver.saveAs(data, fileName + fileExtension);
	};

	return (
		<>
			<button
				className="bg-[#FF5A00] py-4 px-8 text-white rounded-[10px] mt-8 font-500 text-[14px]"
				// onClick={e => exportToExcel(fileName)}
				onClick={handleClickOpen}
			>
				Download earnings report
			</button>
			<EarningsReport
				open={open}
				onClose={handleClose}
				exportToExcel={exportToExcel}
				fileName={fileName}
				selectedButton={selectedButton}
				setSelectedButton={setSelectedButton}
				handleWeekButton={handleWeekButton}
				handleMonthButton={handleMonthButton}
				handleQuarterButton={handleQuarterButton}
				handleYearButton={handleYearButton}
				setFrom={setFrom}
				setTo={setTo}
				from={from}
				to={to}
			/>
		</>
	);
};

export default ExportExcel;
