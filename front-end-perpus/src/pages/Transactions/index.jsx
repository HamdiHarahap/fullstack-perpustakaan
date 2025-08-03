import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Main from '../../components/Layout/Main';
import Button from '../../components/ui/Button';

const Transactions = () => {
	const [loans, setLoans] = useState([]);
	const [message, setMessage] = useState('');

	useEffect(() => {
		fetch('http://127.0.0.1:8000/api/loans')
			.then((res) => res.json())
			.then((data) => {
				setLoans(data.data);
			})
			.catch((err) => {
				console.error('Gagal mengambil peminjaman:', err);
				setMessage('Gagal mengambil data peminjaman');
			});
	});

	useEffect(() => {
		if (message) {
			alert(message);
		}
	}, [message]);

	const handleBookReturn = async (e, id) => {
		e.preventDefault();

		if (
			!window.confirm('Apakah Anda yakin ingin mengubah status peminjaman ini?')
		) {
			return;
		}

		const today = new Date();
		const formattedDate = today.toISOString().split('T')[0];

		const res = await fetch('http://127.0.0.1:8000/api/book-return', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				loan_detail_id: id,
				tanggal_kembali: formattedDate,
			}),
		});
		const data = await res.json();
		setMessage(data.message);
	};

	return (
		<div>
			<Main page="Daftar Peminjaman">
				<div className="bg-white rounded-lg p-5">
					<div className="flex justify-between">
						<h1 className="text-sm font-semibold">Daftar Peminjaman</h1>
						<form
							action=""
							className="ml-auto mr-8 border border-gray-400 rounded-lg"
						>
							<input
								type="text"
								name="search"
								className="rounded-s-md px-3 py-2 outline-blue-500"
							/>
							<button
								type="submit"
								className="bg-blue-900 text-white px-4 py-2 rounded-e-md hover:bg-gray-500 cursor-pointer"
							>
								Cari
							</button>
						</form>
						<Link
							to="/tambah-peminjaman"
							className="text-sm font-semibold text-blue-600 hover:text-blue-800 my-auto"
						>
							Tambah Peminjaman
						</Link>
					</div>
					<table className="border mr-4 w-full mt-4">
						<thead>
							<tr className="text-left bg-blue-900 text-white">
								<th className="p-2">No</th>
								<th className="p-2">Nama</th>
								<th className="p-2">Buku</th>
								<th className="p-2">Tanggal Pinjam</th>
								<th className="p-2">Jatuh Tempo</th>
								<th className="p-2">Tanggal Kembali</th>
								<th className="p-2">Status</th>
								<th className="p-2">Action</th>
							</tr>
						</thead>
						<tbody>
							{loans.map((loan, index) => {
								return (
									<tr className="border" key={loan.id}>
										<td className="p-2">{index + 1}</td>
										<td className="p-2">{loan.nama_anggota}</td>
										<td className="p-2">{loan.nama_buku}</td>
										<td className="p-2">{loan.tanggal_pinjam}</td>
										<td className="p-2">{loan.jatuh_tempo}</td>
										<td className="p-2">{loan.tanggal_kembali || '-'}</td>
										<td className="p-2">
											<p
												className={`rounded-lg p-2 font-semibold ${
													loan.status === 'dikembalikan'
														? 'bg-green-600'
														: 'bg-red-600'
												} w-fit text-white`}
											>
												{loan.status}
											</p>
										</td>
										<td className="p-2 items-center">
											{loan.status === 'meminjam' ? (
												<Button
													onClick={(e) => handleBookReturn(e, loan.id)}
													className="flex items-center justify-center p-2 cursor-pointer"
												>
													<img
														src="/assets/icons/return.svg"
														alt=""
														className="w-8 bg-blue-600 hover:bg-blue-800 p-2 rounded-lg items-center my-auto"
													/>
												</Button>
											) : (
												<Button className="flex items-center justify-center p-2 cursor-pointer">
													<img
														src="/assets/icons/return.svg"
														alt=""
														className="w-8 bg-gray-600 hover:bg-gray-800 p-2 rounded-lg items-center my-auto"
													/>
												</Button>
											)}
										</td>
									</tr>
								);
							})}
							{loans.length === 0 && (
								<tr>
									<td colSpan={7} className="p-4 text-center">
										Tidak ada data peminjaman.
									</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
			</Main>
		</div>
	);
};

export default Transactions;
