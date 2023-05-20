import React from 'react';
import { AiOutlineClockCircle, AiOutlineSearch } from 'react-icons/ai';
import Link from 'next/link';

const Careers = () => {
	return (
		<section
			style={{ minHeight: 'calc(100vh - 80px)' }}
			className="max-w-5xl pb-20 mx-auto"
		>
			<div className="mt-10 mx-3 lg:mx-0">
				<h2 className="text-xl font-semibold mb-2">We&apos;re hiring</h2>
				<h1 className="font-semibold text-2xl">
					Become a Part of Something BIG!
				</h1>
				<p className="text-sm mt-2 text-gray-700">
					What&apos;s more awesome than working on an incredibly rewarding
					mission that our <br /> increasingly diverse team is dedicated to
					achieving? Join our team and work with <br /> talented individuals who
					love what they do!
				</p>
			</div>
			<div className="flex flex-col md:flex md:flex-row mt-10 items-center justify-between pb-10 md:px-3 lg:px-0">
				<div className="flex items-center space-x-3">
					<p className="button rounded-full shadow-none px-3 py-2 font-medium">
						View all
					</p>
					<p className="px-3 py-2 rounded-full cursor-pointer border-2 font-medium border-[#FDECE4]">
						Development
					</p>
					<p className="px-3 py-2 rounded-full cursor-pointer border-2 font-medium border-[#FDECE4]">
						Design
					</p>
				</div>
				<div className="relative w-full max-w-sm md:w-auto px-8 md:px-0 my-2 md:my-0">
					<div className="flex absolute inset-y-0 md:left-0 items-center pl-3 pointer-events-none">
						<AiOutlineSearch />
					</div>
					<input
						type="text"
						className="select_input pl-10"
						placeholder="Enter your job title"
					/>
				</div>
			</div>
			<div className="grid grid-cols-2 md:flex md:flex-row items-center justify-center md:space-x-6 space-x-2 space-y-2 mx-3 md:mx-0">
				<Link href="/careers/23423">
					<div className="border p-8 rounded-2xl max-w-max">
						<h2 className="text-[1.3rem] font-bold">Data Scientist</h2>
						{/* <p className="mt-1 text-gray-700">Jakarta, Indonesia</p> */}

						<p className="p-2 mt-3 font-medium rounded-full flex text-sm items-center cursor-pointer border-2 border-[#FDECE4]">
							<span className="mr-1">
								<AiOutlineClockCircle />
							</span>
							Full-time
						</p>
					</div>
				</Link>

				<Link href="/careers/23423">
					<div className="border p-8 rounded-2xl max-w-max">
						<h2 className="text-[1.3rem] font-bold">Data Scientist</h2>
						{/* <p className="mt-1 text-gray-700">Jakarta, Indonesia</p> */}

						<p className="p-2 mt-3 font-medium rounded-full flex text-sm items-center cursor-pointer border-2 border-[#FDECE4]">
							<span className="mr-1">
								<AiOutlineClockCircle />
							</span>
							Full-time
						</p>
					</div>
				</Link>

				<Link href="/careers/23423">
					<div className="border p-8 rounded-2xl max-w-max">
						<h2 className="text-[1.3rem] font-bold">Data Scientist</h2>
						{/* <p className="mt-1 text-gray-700">Jakarta, Indonesia</p> */}

						<p className="p-2 mt-3 font-medium rounded-full flex text-sm items-center cursor-pointer border-2 border-[#FDECE4]">
							<span className="mr-1">
								<AiOutlineClockCircle />
							</span>
							Full-time
						</p>
					</div>
				</Link>
			</div>
		</section>
	);
};

export default Careers;
