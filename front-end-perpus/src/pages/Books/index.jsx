import { useEffect, useState } from 'react';
import Main from '../../components/Layout/Main';
import Button from '../../components/ui/Button';
import { Link } from 'react-router-dom';

const Books = () => {
	const [books, setBooks] = useState([]);
	const [message, setMessage] = useState('');

	useEffect(() => {
		fetch('http://127.0.0.1:8000/api/books')
			.then((res) => res.json())
			.then((data) => {
				setBooks(data.data || []);
			})
			.catch((err) => {
				console.error('Gagal mengambil buku:', err);
				setMessage('Gagal mengambil data buku.');
			});
	}, [books]);

	useEffect(() => {
		if (message) {
			alert(message);
		}
	}, [message]);

	const handleDelete = async (e, id) => {
		e.preventDefault();

		if (!window.confirm('Apakah Anda yakin ingin menghapus buku ini?')) {
			return;
		}

		try {
			const res = await fetch(`http://127.0.0.1:8000/api/books/${id}`, {
				method: 'DELETE',
			});

			const data = await res.json();

			if (data.success) {
				setBooks((prev) => prev.filter((book) => book.id !== id));
			}
			setMessage(data.message);
		} catch (err) {
			console.error('Error saat menghapus:', err);
			setMessage('Terjadi kesalahan saat menghapus buku.');
		}
	};

	return (
		<div>
			<Main page="Data Buku">
				<div className="bg-white rounded-lg p-5">
					<div className="flex justify-between">
						<h1 className="text-sm font-semibold">Daftar Buku</h1>
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
							to="/tambah-buku"
							className="text-sm font-semibold text-blue-600 hover:text-blue-800 my-auto"
						>
							Tambah Buku
						</Link>
					</div>
					<table className="border mr-4 w-full mt-4">
						<thead>
							<tr className="text-left bg-blue-900 text-white">
								<th className="p-2">No</th>
								<th className="p-2">Judul</th>
								<th className="p-2">Penulis</th>
								<th className="p-2">Penerbit</th>
								<th className="p-2">Tahun Terbit</th>
								<th className="p-2">Status</th>
								<th className="p-2">Action</th>
							</tr>
						</thead>
						<tbody>
							{books.map((book, index) => {
								return (
									<tr className="border" key={book.id}>
										<td className="p-2">{index + 1}</td>
										<td className="p-2">{book.nama_buku}</td>
										<td className="p-2">{book.penulis}</td>
										<td className="p-2">{book.penerbit}</td>
										<td className="p-2">{book.tahun_terbit}</td>
										<td className="p-2">
											<p
												className={`rounded-lg p-2 font-semibold ${
													book.status === 'tersedia'
														? 'bg-green-600'
														: 'bg-red-600'
												} w-fit text-white`}
											>
												{book.status}
											</p>
										</td>
										<td className="p-2">
											<div className="flex gap-1">
												<Link
													to={`/edit-buku/${book.id}`}
													className="flex items-center justify-center bg-yellow-300 hover:bg-yellow-500 rounded-lg cursor-pointer p-1 w-fit"
												>
													<img
														src="../assets/icons/edit.svg"
														alt="edit"
														className="w-6"
													/>
												</Link>
												<form
													onSubmit={(e) => handleDelete(e, book.id)}
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
							{books.length === 0 && (
								<tr>
									<td colSpan={7} className="p-4 text-center">
										Tidak ada data buku.
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

export default Books;
