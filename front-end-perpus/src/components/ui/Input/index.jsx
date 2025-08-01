import Input from './Input';
import Label from './Label';

const InputGroup = (props) => {
	const { className, value, onChange = () => {}, name, label, type } = props;

	return (
		<div className="flex flex-col gap-1">
			<Label name={name}>{label}</Label>
			<Input
				type={type}
				className={className}
				value={value}
				onChange={onChange}
				name={name}
			/>
		</div>
	);
};

export default InputGroup;
