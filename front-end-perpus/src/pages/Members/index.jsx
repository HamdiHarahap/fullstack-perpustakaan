import { useEffect, useState } from 'react';
import Main from '../../components/Layout/Main';
import Button from '../../components/ui/Button';
import { Link } from 'react-router-dom';

const Members = () => {
	const [members, setMembers] = useState([]);
	const [message, setMessage] = useState('');

	useEffect(() => {
		fetch('http://127.0.0.1:8000/api/members')
			.then((res) => res.json())
			.then((data) => {
				setMembers(data.data || []);
			})
			.catch((err) => {
				console.error('Gagal mengambil anggota:', err);
				setMessage('Gagal mengambil data anggota.');
			});
	});

	useEffect(() => {
		if (message) {
			alert(message);
		}
	}, [message]);

	const handleDelete = async (e, id) => {
		e.preventDefault();

		if (!window.confirm('Apakah Anda yakin ingin menghapus anggota ini?')) {
			return;
		}

		try {
			const res = await fetch(`http://127.0.0.1:8000/api/members/${id}`, {
				method: 'DELETE',
			});

			const data = await res.json();

			if (data.success) {
				setMembers((prev) => prev.filter((member) => member.id !== id));
			}
			setMessage(data.message);
		} catch (err) {
			console.error('Error saat menghapus:', err);
			setMessage('Terjadi kesalahan saat menghapus anggota.');
		}
	};

	return (
		<div>
			<Main page="Data Anggota">
				<div className="bg-white rounded-lg p-5">
					<div className="flex justify-between">
						<h1 className="text-sm font-semibold">Daftar Anggota</h1>
						<form
							action=""
							className="ml-auto mr-8 border border-gray-400 rounded-lg"
						>
							<input
								type="text"
								placeholder="Cari nama anggota"
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
							to="/tambah-anggota"
							className="text-sm font-semibold text-blue-600 hover:text-blue-800 my-auto"
						>
							Tambah Anggota
						</Link>
					</div>
					<table className="border mr-4 w-full mt-4">
						<thead>
							<tr className="text-left bg-blue-900 text-white">
								<th className="p-2">No</th>
								<th className="p-2">Nama</th>
								<th className="p-2">Email</th>
								<th className="p-2">No Telpon</th>
								<th className="p-2">Status</th>
								<th className="p-2">Action</th>
							</tr>
						</thead>
						<tbody>
							{members.map((member, index) => {
								return (
									<tr className="border" key={member.id}>
										<td className="p-2">{index + 1}</td>
										<td className="p-2">{member.nama_anggota}</td>
										<td className="p-2">{member.email}</td>
										<td className="p-2">{member.no_telp}</td>
										<td className="p-2">
											<p
												className={`rounded-lg p-2 font-semibold ${
													member.status === 'tidak meminjam'
														? 'bg-green-600'
														: 'bg-red-600'
												} w-fit text-white`}
											>
												{member.status}
											</p>
										</td>
										<td className="p-2">
											<div className="flex gap-1">
												<Link
													to={`/edit-anggota/${member.id}`}
													className="flex items-center justify-center bg-yellow-300 hover:bg-yellow-500 rounded-lg cursor-pointer p-1 w-fit"
												>
													<img
														src="../assets/icons/edit.svg"
														alt="edit"
														className="w-6"
													/>
												</Link>
												<form
													onSubmit={(e) => handleDelete(e, member.id)}
													className="delete-form"
												>
													<Button
														type="submit"
														className="delete-btn flex items-center justify-center bg-red-600 hover:bg-red-800 rounded-lg cursor-pointer p-1 w-fit"
													>
														<img
															src="../assets/icons/trash.svg"
															alt="delete"
															className="w-6"
														/>
													</Button>
												</form>
											</div>
										</td>
									</tr>
								);
							})}
							{members.length === 0 && (
								<tr>
									<td colSpan={7} className="p-4 text-center">
										Tidak ada data anggota.
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

export default Members;
