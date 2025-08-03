import { Link } from 'react-router-dom';

const Sidebar = (props) => {
	const { page } = props;

	return (
		<div className="flex flex-col rounded-e-lg bg-blue-700 h-full fixed px-8 pt-12 gap-8">
			<h1 className="text-2xl font-bold text-white">Sistem Perpustakaan</h1>
			<nav>
				<ul className="flex flex-col p-4">
					<li
						className={
							page == 'Dashboard'
								? 'text-lg font-semibold mb-6 bg-gray-100 p-3 rounded-lg text-black'
								: 'text-white text-lg font-semibold mb-6'
						}
					>
						<Link to="/dashboard">Dashboard</Link>
					</li>
					<li
						className={
							page == 'Data Buku'
								? 'text-lg font-semibold mb-6 bg-gray-100 p-3 rounded-lg text-black'
								: 'text-white text-lg font-semibold mb-6'
						}
					>
						<Link to="/daftar-buku">Data Buku</Link>
					</li>
					<li
						className={
							page == 'Data Anggota'
								? 'text-lg font-semibold mb-6 bg-gray-100 p-3 rounded-lg text-black'
								: 'text-white text-lg font-semibold mb-6'
						}
					>
						<Link to="/daftar-anggota">Data Anggota</Link>
					</li>
					<li
						className={
							page == 'Daftar Peminjaman'
								? 'text-lg font-semibold mb-6 bg-gray-100 p-3 rounded-lg text-black'
								: 'text-white text-lg font-semibold mb-6'
						}
					>
						<Link to="/daftar-peminjaman">Peminjaman</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Sidebar;
