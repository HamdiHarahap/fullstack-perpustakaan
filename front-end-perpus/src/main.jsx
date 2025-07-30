import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Dashboard from './pages/Dashboard/index.jsx';
import Books from './pages/Books/index.jsx';
import AddBooks from './pages/Books/AddBooks.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/dashboard',
		element: <Dashboard />,
	},
	{
		path: '/daftar-buku',
		element: <Books />,
	},
	{
		path: '/tambah-buku',
		element: <AddBooks />,
	},
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
