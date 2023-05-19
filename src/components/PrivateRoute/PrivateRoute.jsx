import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();

	if (loading) {
		return (
			<div className='w-full h-[600px] flex justify-center items-center'>
				<progress className='progress w-56'></progress>
			</div>
		);
	}

	if (user) {
		return <div>{children}</div>;
	}

	return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
