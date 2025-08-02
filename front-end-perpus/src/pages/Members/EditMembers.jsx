import MemberForm from '../../features/members/MemberForm';
import Main from '../../components/Layout/Main';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const EditMembers = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [member, setMember] = useState({
		nama_anggota: '',
		email: '',
		no_telp: '',
	});

	const [message, setMessage] = useState('');

	useEffect(() => {
		if (message) {
			alert(message);
		}
	}, [message]);

	useEffect(() => {
		fetch(`http://127.0.0.1:8000/api/members/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setMember(data.data);
			});
	}, [id]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setMember((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const res = await fetch(`http://127.0.0.1:8000/api/members/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				nama_anggota: member.nama_anggota,
				email: member.email,
				no_telp: member.no_telp,
			}),
		});

		const data = await res.json();
		setMessage(data.message);
		setMember({
			nama_anggota: '',
			email: '',
			no_telp: '',
		});
		navigate('/daftar-anggota');
	};

	return (
		<Main page="Data Anggota">
			<div className="bg-white rounded-lg p-5">
				<div className="">
					<div className="flex justify-between mb-5">
						<h1 className="text-sm font-semibold">Tambah Anggota</h1>
						<Link
							to="/daftar-anggota"
							className="text-sm font-semibold text-blue-600"
						>
							Kembali
						</Link>
					</div>
					<MemberForm
						value={member}
						handleSubmit={handleSubmit}
						handleChange={handleChange}
					/>
				</div>
			</div>
		</Main>
	);
};

export default EditMembers;
