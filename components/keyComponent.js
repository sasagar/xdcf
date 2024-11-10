import MainTitle from "./mainTitle";

/**
 * Renders the KeyComponent section with detailed information about different career paths.
 *
 * @return {JSX.Element} The KeyComponent section JSX
 */
const KeyComponent = () => {
	return (
		<section className="keyComponent max-w-7xl mx-auto">
			<h2 className="text-base md:text-3xl text-center">
				デザイナーみんなのキャリアパスを知る・考える
			</h2>
			<MainTitle />
			<div className="relative top-[-30px] md:top-[-80px] z-1">
				<div className="w-full flex text-white">
					<div className="ticket w-1/2 bg-mintGreen-400 flex">
						<div className="ticket-inner flex-1 flex flex-col justify-center items-center pt-10 md:pt-14 pb-10">
							<h3 className="font-dinNarrow font-semibold text-2xl md:text-6xl mb-3">
								Beginner
							</h3>
							<span className="text-sm md:text-base mb-3">
								これからデザイナーになりたい、または、なりたての人
							</span>
							<div className="relative w-5 h-4 after:border-x-[18px] after:border-t-[15px] after:border-transparent after:border-t-white after:absolute after:top-0" />
							<a
								href="#about"
								className="mt-3 text-base md:text-3xl text-white hover:text-mintGreen-100 hover:no-underline transition-all"
							>
								無料で参加する
							</a>
						</div>
						<div className="ticket-stub w-4 md:w-16 border-l border-foreground border-dashed border-white" />
					</div>
					<div className="ticket w-1/2 bg-sand-400 flex">
						<div className="ticket-inner flex-1 flex flex-col justify-center items-center pt-10 md:pt-14 pb-10">
							<h3 className="font-dinNarrow font-semibold text-2xl md:text-6xl mb-3">
								Career
							</h3>
							<span className="text-sm md:text-base mb-3">
								デザイナー中堅やこれからのキャリアに悩んでいる人
							</span>
							<div className="relative w-5 h-4 after:border-x-[18px] after:border-t-[15px] after:border-transparent after:border-t-white after:absolute after:top-0" />
							<a
								href="#about"
								className="mt-3 text-base md:text-3xl text-white hover:text-sand-100 hover:no-underline transition-all"
							>
								無料で参加する
							</a>
						</div>
						<div className="ticket-stub w-4 md:w-16 border-l border-foreground border-dashed border-white" />
					</div>
				</div>
				<div className="w-full text-center font-dinNarrow font-semibold leading-none my-5">
					<time className="uppercase text-5xl md:text-9xl">2024.12.15 Sun</time>
				</div>
				<div className="w-full flex">
					<div className="ticket w-1/2 bg-mintGreen-400 flex h-10" />
					<div className="ticket w-1/2 bg-sand-400 flex h-10" />
				</div>
			</div>
		</section>
	);
};

export default KeyComponent;
