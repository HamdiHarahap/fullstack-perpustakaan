import { useEffect, useState } from 'react';
import Main from '../../components/Layout/Main';

const Books = () => {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		fetch('http://127.0.0.1:8000/api/books')
			.then((res) => res.json())
			.then((data) => {
				setBooks(data.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div>
			<Main page="Data Buku">
				<div className="bg-white rounded-lg p-5">
					<div className="flex justify-between">
						<h1 className="text-sm font-semibold">Daftar Buku</h1>
						<form
							action=""
							className="ml-auto mr-8 border border-gray-400 rounded-lg       "
						>
							<input
								type="text"
								name="search"
								className="rounded-s-md px-3 py-2 outline-blue-500"
							/>
							<button
								type="submit"
								class="bg-blue-900 text-white px-4 py-2 rounded-e-md hover:bg-gray-500 cursor-pointer"
							>
								Cari
							</button>
						</form>
						<a
							href="/tambah-buku"
							class="text-sm font-semibold text-blue-600 hover:text-blue-800 my-auto"
						>
							Tambah Buku
						</a>
					</div>
					<table className="border mr-4 w-full mt-4">
						<tr class="text-left bg-blue-900 text-white">
							<th class="p-2">No</th>
							<th class="p-2">Judul</th>
							<th class="p-2">Penulis</th>
							<th class="p-2">Penerbit</th>
							<th class="p-2">Tahun Terbit</th>
							<th class="p-2">Status</th>
							<th class="p-2">Action</th>
						</tr>
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
											className={`rounded-lg p-2 ${
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
											<a
												href={`/admin/edit-buku/${book.id}`}
												className="flex items-center justify-center bg-yellow-300 hover:bg-yellow-500 rounded-lg cursor-pointer p-1 w-fit"
											>
												<img
													src="../assets/icons/edit.svg"
													alt="edit"
													className="w-6"
												/>
											</a>
											<form method="POST" className="delete-form">
												<button
													type="submit"
													className="delete-btn flex items-center justify-center bg-red-600 hover:bg-red-800 rounded-lg cursor-pointer p-1 w-fit"
												>
													<img
														src="../assets/icons/trash.svg"
														alt="delete"
														className="w-6"
													/>
												</button>
											</form>
										</div>
									</td>
								</tr>
							);
						})}
					</table>
				</div>
			</Main>
		</div>
	);
};

export default Books;
