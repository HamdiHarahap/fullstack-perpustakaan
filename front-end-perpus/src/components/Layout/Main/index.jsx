import Topbar from '../Topbar';
import Sidebar from '../Sidebar';

const Main = (props) => {
	const { page, children } = props;

	return (
		<div>
			<Sidebar page={page} />
			<div className="flex flex-col gap-12 ps-[22rem] pt-12">
				<Topbar page={page} />
				<div className="mr-20">{children}</div>
			</div>
		</div>
	);
};

export default Main;
