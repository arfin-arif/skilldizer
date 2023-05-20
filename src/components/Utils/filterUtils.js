export const createQuery = filters => {
	let subject;
	let subjectFilter = filters.split('=');
	if (subjectFilter.length > 2) {
		subject = subjectFilter[1].split('&')[0];
	} else {
		subject = filters.split('=')[1];
	}
	const country = getFields(filters, 'from');
	const hourlyRateFrom = getFields(filters, 'hourlyRateFrom');
	const hourlyRateTo = getFields(filters, 'hourlyRateTo');
	const speaks = getFields(filters, 'speaks');
	const gender = getFields(filters, 'gender');
	const sortBy = getFields(filters, 'sortBy');

	let queryFilter = [];
	queryFilter.push(
		`${process.env.REACT_APP_BACKEND_API}/api/v1/tutor/allTutors?languageTeach=${subject}`
	);

	if (country !== undefined) {
		queryFilter.push(`&country=${country}`);
	}
	if (hourlyRateFrom !== undefined) {
		queryFilter.push(
			`&hourlyRate[gte]=${hourlyRateFrom}&hourlyRate[lte]=${hourlyRateTo}`
		);
	}
	if (speaks !== undefined) {
		queryFilter.push(`&languageSpeak=${speaks}`);
	}
	if (gender !== undefined) {
		queryFilter.push(`&gender=${gender}`);
	}
	if (sortBy !== undefined) {
		queryFilter.push(`&sortBy=${sortBy}`);
	}

	if (queryFilter.length === 1) {
		return `${process.env.REACT_APP_BACKEND_API}/api/v1/tutor/allTutors?languageTeach=${subject}`;
	} else {
		return queryFilter.join(',').replaceAll(',', '');
	}

	// TODO Availability Filter
	// const time = getFields(filters, 'time');
	// const day = getFields(filters, 'day');
	// if (time !== undefined) {
	// 	queryFilter.push(`&time=${time}`);
	// }
	// if (day !== undefined) {
	// 	queryFilter.push(`&day=${day}`);
	// }
};

export const getFields = (filters, field) => {
	const country = filters
		.split('&')
		.map(el => {
			if (el.startsWith(field)) {
				return el.split('=')[1];
			}
		})
		.filter(el => el !== undefined);

	return country[0];
};
