import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './components/Home/Home';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
