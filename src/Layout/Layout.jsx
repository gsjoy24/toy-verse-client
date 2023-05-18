import Navigation from '../components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';

const Layout = () => {
	return (
		<div>
			<Navigation />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Layout;
