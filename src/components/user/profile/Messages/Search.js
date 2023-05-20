import React from 'react';
import { BiSearch } from 'react-icons/bi';

const Search = () => {
	return (
		<>
			<div className="h-16 sticky top-0 z-10 bg-white border-b px-4 py-2">
				<div className="rounded-full h-12 flex space-x-3 items-center bg-gray-50 px-5">
					<span className="text-xl text-gray-700">
						<BiSearch />
					</span>
					<input
						type="text"
						className="outline-none bg-transparent"
						placeholder="Search by name"
					/>
				</div>
			</div>
		</>
	);
};

export default Search;
