const SubSectionTitle = ({ en, jp }) => {
	return (
		<header className="px-4 md:px-0 flex justify-start items-baseline gap-6 pb-6 border-b border-dashed border-gray-300">
			<h3 className="text-2xl md:text-4xl font-josefin uppercase">{en}</h3>
			<span className="text-sm">{jp}</span>
		</header>
	);
};

export default SubSectionTitle;
