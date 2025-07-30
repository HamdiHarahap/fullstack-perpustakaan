const Input = (props) => {
	const { className, value, onChange, name } = props;

	return (
		<input
			required
			type="text"
			className={className}
			value={value}
			onChange={onChange}
			name={name}
			id={name}
		/>
	);
};

export default Input;
