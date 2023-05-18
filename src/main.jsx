import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './components/Home/Home';
import Layout from './Layout/Layout';
import Registration from './components/Registration/Registration';
import AuthProvider from './Contexts/AuthProvider';
import Login from './components/Login/Login';

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
			}
		]
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<AuthProvider>
		<RouterProvider router={router} />
	</AuthProvider>
);
