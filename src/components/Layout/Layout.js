import React from 'react';
import NavSection from '../Nav/NavSection';
import Footer from '../Footer/Footer';

const Layout = props => {
	return (
		<>
			<nav>
				<NavSection />
			</nav>
			<main>{props.children}</main>
			<footer>
				<Footer />
			</footer>
		</>
	);
};

export default Layout;
