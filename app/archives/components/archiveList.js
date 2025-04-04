import MainFlex from "@/components/mainFlex";
import SectionTitle from "@/components/sectionTitle";

/**
 * ArchiveList component that displays a list of past events.
 *
 * @return {JSX.Element} The JSX element representing the ArchiveList component.
 */
const ArchiveList = () => {
	return (
		<>
			<SectionTitle title="Archives" />
			<MainFlex title="Past Events" idName="archives" className="md:mb-20">
				<ul className="news-list flex flex-col divide-y divide-gray-300 divide-dashed">
					<li className="news-item py-4">
						<a
							href="https://blog.adobe.com/jp/publish/2025/01/15/cc-web-x-designers-career-fes"
							target="_blank"
							className="news-link flex flex-col md:flex-row items-baseline rounded-sm"
							rel="noopener noreferrer"
						>
							<time className="text-base font-din-narrow w-36">2024.12.15</time>
							<p className="text-base font-notoSans flex-1">
								第1回 XDUF [2024.12.15(日) 開催]
							</p>
						</a>
					</li>
				</ul>
			</MainFlex>
		</>
	);
};

export default ArchiveList;
