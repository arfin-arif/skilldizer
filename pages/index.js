import React from 'react';
import Header from '../src/components/Home/Header';
import HowSkilldizerWorkSection from '../src/components/Home/HowSkilldizerWorkSection';
import ReviewSection from '../src/components/Home/ReviewSection/ReviewSection';
import WhyChooseUs from '../src/components/Home/WhyChooseUs/WhyChooseUs';

const Index = () => {
	return (
		<>
			<Header />
			<HowSkilldizerWorkSection />
			<WhyChooseUs />
			{/*<ReviewSection />*/}
		</>
	);
};

export default Index;
