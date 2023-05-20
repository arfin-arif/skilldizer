import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { RxCross2 } from 'react-icons/rx';

// * Filter Components
import Filter from './Filter';
import DayAvailability from './Availability/DayAvailability';
import TimeAvailability from './Availability/TimeAvailability';
import PriceFilter from './PriceFilter';
import CountrySelector from './CountrySelector';

// * Lists Data
import LanguageList from '../../data/LanguageList.json';
import GenderList from '../../data/GenderList.json';
import SortList from '../../data/SortList.json';
import TutorSubjectList from '../../data/TutorSubjectList.json';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const MobileFilterDialog = ({ handleClick }) => {
	const [open, setOpen] = React.useState(true);

	const handleClose = () => {
		setOpen(!open);
	};

	return (
		<div>
			<Dialog
				fullScreen
				open={open}
				onClose={handleClose}
				TransitionComponent={Transition}
			>
				<div className="flex flex-col h-screen my-5">
					<div className="flex justify-between mx-4 mb-3">
						<button className="text-[#FF5A00]">Clear all</button>
						<h3>Filters</h3>
						<RxCross2 onClick={(handleClose, handleClick)} />
					</div>
					<div className="border-b-2"></div>
					<PriceFilter />
					<div className="border-b-2"></div>
					<TimeAvailability />
					<div className="border-b-2"></div>
					<DayAvailability />
					<div className="border-b-2"></div>
					<CountrySelector />
					<div className="border-b-2"></div>
					<Filter title={'Speaks'} data={LanguageList} />
					<div className="border-b-2"></div>
					<Filter title={'Gender'} data={GenderList} />
					<div className="border-b-2"></div>
					<Filter title={'Sort'} data={SortList} />
					<div className="border-b-2"></div>
					<Filter title={'Subject'} data={TutorSubjectList} />
				</div>
			</Dialog>
		</div>
	);
};

export default MobileFilterDialog;
