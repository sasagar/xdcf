/**
 * Renders a long section title with the provided title.
 *
 * @param {string} title - The title to be displayed in the section.
 * @return {JSX.Element} The JSX element representing the long section title.
 */
const SectionTitleLong = ({ title }) => {
	return (
		<div className="w-full relative mt-5">
			<div className="w-full md:w-[max(600px,calc((100vw-1024px)/2+600px))] bg-foreground absolute -z-10 h-[calc(100%-12px)]" />
			<div className="max-w-5xl mx-auto">
				<h2 className="px-2 md:px-0 text-5xl md:text-7xl text-background uppercase font-din font-medium leading-none">
					{title}
				</h2>
			</div>
		</div>
	);
};

export default SectionTitleLong;
