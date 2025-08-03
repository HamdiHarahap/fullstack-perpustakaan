import { Link, useNavigate } from 'react-router-dom';
import LoanForm from '../../features/transactions/LoanForm';
import Main from '../../components/Layout/Main';
import { useEffect, useState } from 'react';

const AddLoans = () => {
	const navigate = useNavigate();
	const [loan, setLoan] = useState({
		member_id: '',
		book_id: '',
		tanggal_pinjam: '',
	});

	const [message, setMessage] = useState('');

	useEffect(() => {
		if (message) {
			alert(message);
		}
	}, [message]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setLoan((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!loan.member_id || !loan.book_id || !loan.tanggal_pinjam) {
			setMessage('Lengkapi semua field: anggota, buku, dan tanggal pinjam.');
			return;
		}

		try {
			const res = await fetch('http://127.0.0.1:8000/api/loans', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					member_id: loan.member_id,
					book_id: loan.book_id,
					tanggal_pinjam: loan.tanggal_pinjam,
				}),
			});

			const data = await res.json();
			setMessage(data.message);
			setLoan({
				member_id: '',
				book_id: '',
				tanggal_pinjam: '',
			});
			navigate('/daftar-peminjaman');
		} catch (err) {
			console.error(err);
			setMessage('Gagal terhubung ke server.');
		}
	};

	return (
		<Main page="Data Peminjaman">
			<div className="bg-white rounded-lg p-5">
				<div className="">
					<div className="flex justify-between mb-5">
						<h1 className="text-sm font-semibold">Tambah Peminjaman</h1>
						<Link
							to="/daftar-peminjaman"
							className="text-sm font-semibold text-blue-600"
						>
							Kembali
						</Link>
					</div>
					<LoanForm
						value={loan}
						handleSubmit={handleSubmit}
						handleChange={handleChange}
					/>
				</div>
			</div>
		</Main>
	);
};

export default AddLoans;
