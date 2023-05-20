import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout/Layout';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Home from '../components/Home/Home';
import Registration from '../components/Registration/Registration';
import Login from '../components/Login/Login';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import AddAToy from '../components/AddAToy/AddAToy';
import MyToys from '../components/MyToys/MyToys';
import UpdateToy from '../components/UpdateToy/UpdateToy';
import AllToys from '../components/AllToys/AllToys';
import ToyDetail from '../components/ToyDetail/ToyDetail';
import Blog from '../components/Blog/Blog';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Home />
			},
			{
				path: '/register',
				element: <Registration />
			},
			{
				path: '/login',
				element: <Login />
			},
			{
				path: '/all_toys',
				element: <AllToys />
			},
			{
				path: '/blog',
				element: <Blog />
			},
			{
				path: '/add_toy',
				element: (
					<PrivateRoute>
						<AddAToy />
					</PrivateRoute>
				)
			},
			{
				path: '/my_toys',
				element: (
					<PrivateRoute>
						<MyToys />
					</PrivateRoute>
				)
			},
			{
				path: '/update/:id',
				element: (
					<PrivateRoute>
						<UpdateToy />
					</PrivateRoute>
				),
				loader: ({ params }) => fetch(`https://toy-verse-server-iota.vercel.app/toysT/${params.id}`)
			},
			{
				path: '/toys/:id',
				element: (
					<PrivateRoute>
						<ToyDetail />
					</PrivateRoute>
				),
				loader: ({ params }) => fetch(`https://toy-verse-server-iota.vercel.app/toys/${params.id}`)
			}
		]
	}
]);
export default router;
