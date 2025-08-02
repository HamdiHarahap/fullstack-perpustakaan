import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Dashboard from './pages/Dashboard/index.jsx';
import Books from './pages/Books/index.jsx';
import AddBooks from './pages/Books/AddBooks.jsx';
import EditBooks from './pages/Books/EditBooks.jsx';
import Members from './pages/Members/index.jsx';
import AddMembers from './pages/Members/AddMembers.jsx';
import EditMembers from './pages/Members/EditMembers.jsx';
import ErrorPage from './pages/404.jsx';

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
	{
		path: '/edit-buku/:id',
		element: <EditBooks />,
	},
	{
		path: '/daftar-anggota',
		element: <Members />,
	},
	{
		path: '/tambah-anggota',
		element: <AddMembers />,
	},
	{
		path: '/edit-anggota/:id',
		element: <EditMembers />,
	},
	{
		path: '*',
		element: <ErrorPage />,
	},
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
