import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const App = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const timer = setTimeout(() => {
			navigate('/dashboard');
		}, 2000);

		return () => clearTimeout(timer);
	});

	return (
		<div className="bg-blue-600 min-h-screen flex">
			<h1 className="font-bold text-3xl text-center my-auto mx-auto text-white">
				Selamat Datang di Sistem Perpustakaan
			</h1>
		</div>
	);
};

export default App;
