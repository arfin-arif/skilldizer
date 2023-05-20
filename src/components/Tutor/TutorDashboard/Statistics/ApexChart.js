import dynamic from 'next/dynamic';
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
	ssr: false,
});
// import ReactApexChart from 'react-apexcharts';
import React, { useState, useEffect } from 'react';

const ApexChart = ({ currentChart, chartData }) => {
	return (
		<div id="chart">
			{typeof window !== undefined && (
				<ReactApexChart
					options={chartData.options}
					series={chartData.series}
					type="bar"
					height={200}
				/>
			)}
		</div>
	);
};

export default ApexChart;
