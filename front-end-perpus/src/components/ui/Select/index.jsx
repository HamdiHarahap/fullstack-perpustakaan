import { useEffect, useState } from 'react';
import Label from '../Input/Label';

const endpoints = {
	anggota: 'http://127.0.0.1:8000/api/members',
	buku: 'http://127.0.0.1:8000/api/books',
};

const Select = (props) => {
	const { type, value, onChange, className, name, label } = props;
	const [items, setItems] = useState([]);

	useEffect(() => {
		if (!type || !endpoints[type]) {
			setItems([]);
			return;
		}

		const fetcData = async () => {
			try {
				const res = await fetch(endpoints[type]);
				const data = await res.json();
				let list = Array.isArray(data.data) ? data.data : [];

				if (type == 'anggota') {
					list = list.filter(
						(item) => String(item.status).toLowerCase() === 'tidak meminjam'
					);
				} else if (type == 'buku') {
					list = list.filter(
						(item) => String(item.status).toLowerCase() === 'tersedia'
					);
				}
				setItems(list);
			} catch (err) {
				console.error(err);
			}
		};

		fetcData();
	}, [type]);

	const getLabel = (item) => {
		if (type === 'anggota') {
			return item.nama_anggota ?? item.name ?? 'Unnamed member';
		}
		if (type === 'buku') {
			return item.nama_buku
				? `${item.nama_buku}${item.penulis ? ` — ${item.penulis}` : ''}`
				: item.title ?? 'Unnamed book';
		}
		return 'Unknown';
	};

	return (
		<div className="flex flex-col gap-1">
			<Label name={name}>{label}</Label>
			<select
				name={name}
				value={value}
				onChange={onChange}
				className={className}
			>
				<option value="">{`Pilih ${type}`}</option>
				{items.map((item) => {
					return (
						<option key={item.id} value={item.id}>
							{getLabel(item)}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default Select;
