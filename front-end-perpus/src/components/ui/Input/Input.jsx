const Input = (props) => {
	const { className, value, onChange, name, type = 'text' } = props;

	return (
		<input
			required
			type={type}
			className={className}
			value={value}
			onChange={onChange}
			name={name}
			id={name}
		/>
	);
};

export default Input;
