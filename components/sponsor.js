import Image from "next/image";
import SubSectionTitle from "./subSectionTitle";

/**
 * Sponsor component that displays the sponsor section.
 *
 * The section contains a title, and a grid of sponsor logos.
 *
 * @return {JSX.Element} The JSX element representing the Sponsor component.
 */
const Sponsor = () => {
	return (
		<section>
			<div className="max-w-5xl mx-auto mt-10 md:mt-20">
				<SubSectionTitle en="Sponsors" jp="スポンサー" />
			</div>

			<div className="max-w-5xl mx-auto my-4 grid grid-cols-2 md:grid-cols-4 gap-4 px-4 md:px-0">
				<a
					href="https://adobe.com/jp/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						src={"/Adobe-logo@2x.png"}
						width={512}
						height={512}
						alt="Adobe K.K."
					/>
				</a>
			</div>
		</section>
	);
};

export default Sponsor;
