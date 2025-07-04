import { Icon } from "@iconify/react";
import metadataGenerator from "@/app/functions/metadataGenerator";
import About from "@/components/about";
import LimitedLinkButton from "@/components/limitedLinkButton";
import SectionTitle from "@/components/sectionTitle";
import Sponsor from "@/components/sponsor";
import Casts from "./components/casts";
import Sp01KeyComponent from "./components/keyComponent";
import Schedule from "./components/schedule";

// O諸々の指定項目を変数でまとめる
const title = "AI×デザイナーのキャリアと未来";
const description =
	"2025年8月2日開催！ X Designers Career Fes（クロス・デザイナーズ・キャリア・フェス）スピンオフイベント";
const url = "https://xdcf.jp/spin-off/01";
const imageUrl = "https://xdcf.jp/spin-off/01/ogp_01.jpg";
const imageWidth = "1200";
const imageHeight = "630";
const openAt = new Date("2025-07-03T00:00:00+09:00");
const closeAt = new Date("2025-07-28T13:00:00+09:00");

export const metadata = metadataGenerator(
	title,
	description,
	url,
	imageUrl,
	imageWidth,
	imageHeight,
);

const So01Page = () => {
	const link = "https://xdufes.connpass.com/event/358951/";
	return (
		<div>
			<Sp01KeyComponent />
			<LimitedLinkButton
				href={link}
				openAt={openAt}
				closeAt={closeAt}
				closedText="参加受付は終了しました"
				className="mx-auto link-btn my-2"
			>
				無料で参加する
			</LimitedLinkButton>

			<section>
				<SectionTitle title="Concept" />
				<article className="max-w-5xl mx-auto mt-4 md:mt-10 px-4 md:px-0">
					<p className="leading-relaxed">
						X DESIGNERS CAREER
						FESでは、普段みなさんにキャリアについて考えていただく座談会形式で開催していますが、
						今回はスピンオフイベントの今回はプロの意見を聞いてみるパネルディスカッション形式でお送りします。
					</p>
					<p className="leading-relaxed">
						第一弾の今回は<strong>『グラフィック編』</strong>
						として、立場の違うそれぞれの皆さんに登壇いただき、いくつかのテーマに沿って自由にお話頂きます。
						<br />
						「使えば効率が良いこともある」ということはわかっていても、どこまでどのように活用していくのが現実的なのかなど、プロの意見を参考にできるチャンスです！
					</p>
				</article>
			</section>

			<section className="mt-20">
				<SectionTitle title="Contents" />
				<Schedule />
				<Casts />
			</section>

			<section>
				<About
					link={link}
					year="2025"
					month="08"
					day="02"
					weekday="土"
					openHour="13"
					openMinute="30"
					startHour="14"
					startMinute="00"
				/>
			</section>
			<Sponsor />
		</div>
	);
};

export default So01Page;
