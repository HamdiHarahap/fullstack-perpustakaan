const Label = (props) => {
	const { name, children } = props;

	return (
		<label htmlFor={name} className="font-semibold text-sm text-zinc-900">
			{children}
		</label>
	);
};

export default Label;
