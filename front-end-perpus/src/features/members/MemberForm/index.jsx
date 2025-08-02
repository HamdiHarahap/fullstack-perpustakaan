import InputGroup from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

const MemberForm = (props) => {
	const { handleSubmit, handleChange, value } = props;

	return (
		<form onSubmit={handleSubmit} className="flex flex-col gap-2">
			<InputGroup
				label="Nama Anggota"
				name="nama_anggota"
				onChange={handleChange}
				value={value.nama_anggota}
				className="border rounded-lg px-3 py-2 outline-blue-500 w-92"
			/>
			<InputGroup
				label="Email"
				name="email"
				type="email"
				onChange={handleChange}
				value={value.email}
				className="border rounded-lg px-3 py-2 outline-blue-500 w-92"
			/>
			<InputGroup
				label="No Telpon"
				name="no_telp"
				onChange={handleChange}
				value={value.no_telp}
				className="border rounded-lg px-3 py-2 outline-blue-500 w-92"
			/>
			<Button className="bg-blue-600 rounded-lg px-5 py-2 w-fit text-white font-semibold cursor-pointer hover:bg-blue-800">
				Submit
			</Button>
		</form>
	);
};

export default MemberForm;
