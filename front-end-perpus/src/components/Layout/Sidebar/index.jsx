const Sidebar = (props) => {
	const { page } = props;

	return (
		<div className="flex flex-col rounded-e-lg bg-blue-700 h-full fixed px-8 pt-12 gap-8">
			<h1 className="text-2xl font-bold text-white">Sistem Perpustakaan</h1>
			<nav>
				<ul className="flex flex-col p-4">
					<li className="text-lg font-semibold mb-6 bg-gray-100 p-3 rounded-lg text-black">
						<a href="/dashboard">Dashboard</a>
					</li>
					<li className="text-white text-lg font-semibold mb-6">
						<a href="/daftar-buku">Data Buku</a>
					</li>
					<li className="text-white text-lg font-semibold mb-6">
						<a href="">Data Anggota</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Sidebar;
