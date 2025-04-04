/**
import { is } from '../.next/server/chunks/ssr/af969_next_dist_6559f3._';
import { id } from '../.next/server/chunks/ssr/af969_next_dist_compiled_webpack_bundle5_bc0d5f';
 * Renders a flexible main section with a title and children.
 *
 * @param {string} title - The title to be displayed in the main section.
 * @param {JSX.Element} children - The content to be displayed within the main section.
 * @return {JSX.Element} The flexible main section with the provided title and children.
 */
const MainFlex = ({
	title,
	className = "",
	children,
	comingsoon = false,
	idName = "",
}) => {
	return (
		<section
			id={idName}
			className={`max-w-5xl mx-auto flex flex-col md:flex-row justify-between px-4 md:px-0 ${className}`}
		>
			<h2 className="text-xl font-josefin uppercase py-4">{title}</h2>
			<div className="w-full md:w-2/3 relative">
				{children}
				{comingsoon && (
					<div className="absolute top-0 left-0 w-full h-full bg-mint-green-400/80 text-white flex justify-center items-center text-center text-2xl uppercase font-josefin">
						Coming Soon
					</div>
				)}
			</div>
		</section>
	);
};

export default MainFlex;
