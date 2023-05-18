import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import Banner from './Banner';
import CategoryTabs from './CategoryTab/CategoryTabs';
import Gallery from './Gallery';

const Home = () => {
	return (
		<div>
			<Navigation />
			<Banner />
			<Gallery />
			<CategoryTabs />
			<Footer />
		</div>
	);
};

export default Home;
