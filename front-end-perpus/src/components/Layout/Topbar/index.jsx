const Topbar = (props) => {
	const { page } = props;

	return (
		<aside class="bg-[#FFFFFF] flex justify-between p-5 items-center rounded-lg mr-20">
			<div class="font-semibold">
				<h2 class="text-sm">Menu</h2>
				<h1 class="text-2xl">{page}</h1>
			</div>
		</aside>
	);
};

export default Topbar;
