import InputGroup from '../../../components/ui/Input';
import YearInput from '../../../components/ui/YearInput';
import Button from '../../../components/ui/Button';

const BookForm = (props) => {
	const { handleChange, handleSubmit, value } = props;

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-2">
			<InputGroup
				label="Judul Buku"
				name="nama_buku"
				onChange={handleChange}
				value={value.nama_buku}
				className="border rounded-lg px-3 py-2 outline-blue-500 w-92"
			/>
			<InputGroup
				label="Penulis"
				name="penulis"
				onChange={handleChange}
				value={value.penulis}
				className="border rounded-lg px-3 py-2 outline-blue-500 w-92"
			/>
			<InputGroup
				label="Penerbit"
				name="penerbit"
				onChange={handleChange}
				value={value.penerbit}
				className="border rounded-lg px-3 py-2 outline-blue-500 w-92"
			/>
			<YearInput
				label="Tahun Terbit"
				name="tahun_terbit"
				onChange={handleChange}
				value={value.tahun_terbit}
			/>
			<Button className="bg-blue-600 rounded-lg px-5 py-2 w-fit text-white font-semibold cursor-pointer hover:bg-blue-800">
				Submit
			</Button>
		</form>
	);
};

export default BookForm;
