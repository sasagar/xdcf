import Link from "next/link";
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
						<Link
							href="/20250419"
							className="news-link flex flex-col md:flex-row items-baseline rounded-sm"
						>
							<time className="text-base font-din-narrow w-36">2025.04.19</time>
							<p className="text-base font-notoSans flex-1">
								第2回 XDCF [2025.04.19(土) 開催] 開催概要
							</p>
						</Link>
					</li>
					<li className="news-item py-4">
						<Link
							href="https://blog.adobe.com/jp/publish/2025/01/15/cc-web-x-designers-career-fes"
							target="_blank"
							className="news-link flex flex-col md:flex-row items-baseline rounded-sm"
							rel="noopener noreferrer"
						>
							<time className="text-base font-din-narrow w-36">2024.12.15</time>
							<p className="text-base font-notoSans flex-1">
								第1回 XDCF [2024.12.15(日) 開催レポート] （Adobe Blog）
							</p>
						</Link>
					</li>
					<li className="news-item py-4">
						<Link
							href="/20241215"
							className="news-link flex flex-col md:flex-row items-baseline rounded-sm"
						>
							<time className="text-base font-din-narrow w-36">2025.12.15</time>
							<p className="text-base font-notoSans flex-1">
								第1回 XDCF [2024.12.15(日) 開催] 開催概要
							</p>
						</Link>
					</li>
				</ul>
			</MainFlex>
		</>
	);
};

export default ArchiveList;
