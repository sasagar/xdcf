import MainTitle from "./mainTitle";
import { Icon } from "@iconify/react";

/**
 * Renders the KeyComponent section with detailed information about different career paths.
 *
 * @return {JSX.Element} The KeyComponent section JSX
 */
const KeyComponent = ({ date, link }) => {
	return (
		<section className="keyComponent max-w-7xl mx-auto">
			<h2 className="text-sm md:text-3xl text-center">
				デザイナーみんなのキャリアパスを知る・考える
			</h2>
			<MainTitle className="p-2 md:p-0" />
			<div className="relative top-[-30px] md:top-[-80px] z-1">
				<div className="w-full flex text-white">
					<div className="ticket w-1/2 bg-mint-green-400 flex">
						<div className="ticket-inner flex-1 flex flex-col justify-center items-center">
							<a
								href="#about"
								className="w-full h-full pt-6 md:pt-12 pb-6 px-2 flex flex-col items-center text-white hover:text-mint-green-100 hover:no-underline transition-all"
							>
								<h3 className="font-din-narrow font-semibold text-2xl md:text-6xl mb-3">
									Beginner
								</h3>
								<span className="text-[.5rem] md:text-base mb-3">
									これからデザイナーになりたい、または、なりたての人
								</span>
							</a>
						</div>
						<div className="ticket-stub w-4 md:w-16 border-l border-foreground border-dashed" />
					</div>
					<div className="ticket w-1/2 bg-sand-400 flex">
						<div className="ticket-inner flex-1 flex flex-col justify-center items-center">
							<a
								href="#about"
								className="w-full h-full pt-6 md:pt-12 pb-6 px-2 flex flex-col items-center text-white hover:text-sand-100 hover:no-underline transition-all"
							>
								<h3 className="font-din-narrow font-semibold text-2xl md:text-6xl mb-3">
									Career
								</h3>
								<span className="text-[.5rem] md:text-base mb-3">
									デザイナー中堅やこれからのキャリアに悩んでいる人
								</span>
								{/* <div className="relative w-5 h-4 after:border-x-[18px] after:border-t-[15px] after:border-transparent after:border-t-white after:absolute after:top-0 my-3" />
								<span className="text-base md:text-3xl">無料で参加する</span> */}
							</a>
						</div>
						<div className="ticket-stub w-4 md:w-16 border-l border-foreground border-dashed" />
					</div>
				</div>
				<div className="w-full text-center font-din-narrow font-semibold leading-none my-5">
					<time className="uppercase text-5xl md:text-9xl leading-none">
						{date}
					</time>
					<div className="relative w-5 h-4 after:border-x-[18px] after:border-t-[15px] after:border-transparent after:border-t-sand-400 after:absolute after:top-0 my-3 mx-auto -left-5" />
					<a
						href={link}
						target="_blank"
						className="mx-auto link-btn"
						rel="noreferrer"
					>
						無料で参加する
						<Icon icon={"basil:share-box-outline"} />
					</a>
				</div>
				<div className="w-full flex">
					<div className="ticket w-1/2 bg-mint-green-400 flex h-10">
						<div className="ticket-inner flex-1 flex flex-col justify-center items-center" />
						<div className="ticket-stub w-4 md:w-16 border-l border-foreground border-dashed" />
					</div>
					<div className="ticket w-1/2 bg-sand-400 flex h-10">
						<div className="ticket-inner flex-1 flex flex-col justify-center items-center" />
						<div className="ticket-stub w-4 md:w-16 border-l border-foreground border-dashed" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default KeyComponent;
