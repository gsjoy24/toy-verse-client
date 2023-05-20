import { useEffect } from 'react';
import Banner from './Banner';
import CategoryTabs from './CategoryTab/CategoryTabs';
import Gallery from './Gallery';
import Features from './Features/Features';

const Home = () => {
	useEffect(() => {
		document.title = 'Home | ToyVerse';
	}, []);
	return (
		<div>
			<Banner />
			<Gallery />
			<CategoryTabs />
			<Features />
		</div>
	);
};

export default Home;
