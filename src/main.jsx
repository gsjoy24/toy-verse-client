import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './components/Home/Home';
import Layout from './Layout/Layout';
import Registration from './components/Registration/Registration';
import AuthProvider from './Contexts/AuthProvider';
import Login from './components/Login/Login';
import AddAToy from './components/AddAToy/AddAToy';
import MyToys from './components/MyToys/MyToys';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import UpdateToy from './components/UpdateToy/UpdateToy';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
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
				loader: ({ params }) => fetch(`https://toy-verse-server-iota.vercel.app/toys/${params.id}`)
			}
		]
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<AuthProvider>
		<RouterProvider router={router} />
	</AuthProvider>
);
