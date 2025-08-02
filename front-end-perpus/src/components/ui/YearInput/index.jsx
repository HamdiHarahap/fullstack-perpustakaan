import Label from '../Input/Label';

const YearInput = (props) => {
	const { name, label, value, onChange } = props;

	const currentYear = new Date().getFullYear();
	const years = Array.from({ length: currentYear - 1979 }, (_, i) => 1980 + i);

	return (
		<div className="flex flex-col gap-1">
			<Label name={name}>{label}</Label>
			<select
				name={name}
				id={name}
				value={value}
				onChange={onChange}
				className="border rounded-lg px-3 py-2 w-92 outline-blue-500"
			>
				<option value="">Pilih Tahun</option>
				{years.map((year) => (
					<option key={year} value={year}>
						{year}
					</option>
				))}
			</select>
		</div>
	);
};

export default YearInput;
