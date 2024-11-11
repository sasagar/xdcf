import Image from "next/image";
import SubSectionTitle from "./subSectionTitle";

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
						src={"/sponsor-adobe@2x.png"}
						width={600}
						height={600}
						alt=""
					/>
				</a>
			</div>
		</section>
	);
};

export default Sponsor;
