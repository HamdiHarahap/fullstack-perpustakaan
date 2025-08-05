import { useEffect, useState } from 'react';
import Main from '../../components/Layout/Main';

const Dashboard = () => {
	const [data, setData] = useState({
		anggota: '',
		buku: '',
		peminjaman: '',
	});

	useEffect(() => {
		fetch('http://127.0.0.1:8000/api/dashboard')
			.then((res) => res.json())
			.then((data) => {
				let value = data.data;

				setData({
					anggota: value.memberCount,
					buku: value.bookCount,
					peminjaman: value.loanCount,
				});
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<div>
			<Main page="Dashboard">
				<div class="bg-[#FFFFFF] rounded-lg p-5">
					<div class="grid grid-cols-3 gap-4">
						<div class="bg-blue-100 p-4 rounded-lg">
							<h2 class="font-semibold">Jumlah Anggota</h2>
							<p class="text-lg font-bold">{data.anggota}</p>
						</div>
						<div class="bg-blue-100 p-4 rounded-lg">
							<h2 class="font-semibold">Jumlah Buku</h2>
							<p class="text-lg font-bold">{data.buku}</p>
						</div>
						<div class="bg-blue-100 p-4 rounded-lg">
							<h2 class="font-semibold">Jumlah Peminjaman</h2>
							<p class="text-lg font-bold">{data.peminjaman}</p>
						</div>
					</div>
				</div>
			</Main>
		</div>
	);
};

export default Dashboard;
