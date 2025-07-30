import { useEffect, useState } from 'react';
import InputGroup from '../../../components/ui/Input';
import YearInput from '../../../components/ui/YearInput';
import Button from '../../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const BookForm = () => {
	const navigate = useNavigate();
	const [book, setBook] = useState({
		nama_buku: '',
		penulis: '',
		penerbit: '',
		tahun_terbit: '',
	});

	const [message, setMessage] = useState('');

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

		const res = await fetch('http://127.0.0.1:8000/api/books', {
			method: 'POST',
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
		<form onSubmit={handleSubmit} className="flex flex-col gap-2">
			<InputGroup
				label="Judul Buku"
				name="nama_buku"
				onChange={handleChange}
				value={book.nama_buku}
				className="border rounded-lg px-3 py-2 outline-blue-500 w-92"
			/>
			<InputGroup
				label="Penulis"
				name="penulis"
				onChange={handleChange}
				value={book.penulis}
				className="border rounded-lg px-3 py-2 outline-blue-500 w-92"
			/>
			<InputGroup
				label="Penerbit"
				name="penerbit"
				onChange={handleChange}
				value={book.penerbit}
				className="border rounded-lg px-3 py-2 outline-blue-500 w-92"
			/>
			<YearInput
				label="Tahun Terbit"
				name="tahun_terbit"
				onChange={handleChange}
				value={book.tahun_terbit}
			/>
			<Button className="bg-blue-600 rounded-lg px-5 py-2 w-fit text-white font-semibold cursor-pointer hover:bg-blue-800">
				Submit
			</Button>
		</form>
	);
};

export default BookForm;
