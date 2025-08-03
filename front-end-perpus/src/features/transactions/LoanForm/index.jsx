import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';

const LoanForm = (props) => {
	const { handleChange, handleSubmit, value } = props;

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-3">
			<Select
				name="member_id"
				label="Nama Anggota"
				type="anggota"
				onChange={handleChange}
				value={value.member_id}
				className="border rounded-lg px-3 py-2 outline-blue-500 w-92"
			/>
			<Select
				name="book_id"
				label="Nama Buku"
				type="buku"
				onChange={handleChange}
				value={value.book_id}
				className="border rounded-lg px-3 py-2 outline-blue-500 w-92"
			/>
			<div className="flex flex-col gap-1">
				<label htmlFor="tanggal_pinjam" className="text-sm font-medium">
					Tanggal Pinjam
				</label>
				<input
					type="date"
					name="tanggal_pinjam"
					id="tanggal_pinjam"
					value={value.tanggal_pinjam}
					onChange={handleChange}
					className="border rounded-lg px-3 py-2 outline-blue-500 w-60"
				/>
			</div>
			<Button className="bg-blue-600 rounded-lg px-5 py-2 w-fit text-white font-semibold cursor-pointer hover:bg-blue-800">
				Submit
			</Button>
		</form>
	);
};

export default LoanForm;
