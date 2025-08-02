import { Link, useNavigate, useParams } from 'react-router-dom';
import Main from '../../components/Layout/Main';
import BookForm from '../../features/books/BookForm';
import { useEffect, useState } from 'react';

const EditBooks = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [book, setBook] = useState({
		nama_buku: '',
		penulis: '',
		penerbit: '',
		tahun_terbit: '',
	});

	const [message, setMessage] = useState('');

	useEffect(() => {
		fetch(`http://127.0.0.1:8000/api/books/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setBook(data.data);
			});
	}, [id]);

	useEffect(() => {
		if (message) {
			alert(message);
		}
	}, [message]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setBook((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const res = await fetch(`http://127.0.0.1:8000/api/books/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				nama_buku: book.nama_buku,
				penulis: book.penulis,
				penerbit: book.penerbit,
				tahun_terbit: book.tahun_terbit,
			}),
		});

		const data = await res.json();
		setMessage(data.message);
		setBook({
			nama_buku: '',
			penulis: '',
			penerbit: '',
			tahun_terbit: '',
		});
		navigate('/daftar-buku');
	};

	return (
		<div>
			<Main page="Data Buku">
				<div className="bg-white rounded-lg p-5">
					<div className="">
						<div className="flex justify-between mb-5">
							<h1 className="text-sm font-semibold">Edit Buku</h1>
							<Link
								to="/daftar-buku"
								className="text-sm font-semibold text-blue-600"
							>
								Kembali
							</Link>
						</div>
						<BookForm
							handleChange={handleChange}
							handleSubmit={handleSubmit}
							value={book}
						/>
					</div>
				</div>
			</Main>
		</div>
	);
};

export default EditBooks;
