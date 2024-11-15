/**
 * SubSectionTitle component that displays a title for a sub-section in English and Japanese.
 *
 * @param {{ en: string, jp: string }} props - Component props.
 * @param {string} props.en - The title in English.
 * @param {string} props.jp - The title in Japanese.
 * @return {JSX.Element} The JSX element representing the SubSectionTitle component.
 */
const SubSectionTitle = ({ en, jp }) => {
	return (
		<header className="px-4 md:px-0 flex justify-start items-baseline gap-6 pb-6 border-b border-dashed border-gray-300">
			<h3 className="text-2xl md:text-4xl font-josefin uppercase">{en}</h3>
			<span className="text-sm">{jp}</span>
		</header>
	);
};

export default SubSectionTitle;
