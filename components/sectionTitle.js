/**
 * Renders a section title with the provided title.
 *
 * @param {string} title - The title to be displayed in the section.
 * @return {JSX.Element} The JSX element representing the section title.
 */
const SectionTitle = ({ title }) => {
	return (
		<div className="w-full relative mt-5">
			<div className="w-full md:w-[max(400px,calc((100vw-1024px)/2+400px))] bg-foreground absolute -z-10 h-[calc(100%-12px)]" />
			<div className="max-w-5xl mx-auto">
				<h2 className="text-5xl md:text-7xl text-background uppercase font-din font-medium leading-none">
					{title}
				</h2>
			</div>
		</div>
	);
};

export default SectionTitle;
