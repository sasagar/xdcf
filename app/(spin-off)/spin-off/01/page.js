import { Icon } from "@iconify/react";
import About from "@/components/about";
import SectionTitle from "@/components/sectionTitle";
import Sponsor from "@/components/sponsor";
import Casts from "./components/casts";
import Sp01KeyComponent from "./components/keyComponent";
import Schedule from "./components/schedule";

export const metadata = {
	title: "AI×デザイナーのキャリアと未来 | X Designers Career Fes",
	description:
		"2025年8月2日開催！ X Designers Career Fes（クロス・デザイナーズ・キャリア・フェス）スピンオフイベント",
};

const So01Page = () => {
	const link = "https://xdufes.connpass.com/event/358951/";
	return (
		<div>
			<Sp01KeyComponent />
			<a
				href={link}
				target="_blank"
				className="mx-auto link-btn my-2"
				rel="noreferrer"
			>
				無料で参加する
				<Icon icon={"basil:share-box-outline"} />
			</a>

			<section>
				<SectionTitle title="Concept" />
				<article className="max-w-5xl mx-auto mt-4 md:mt-10 px-4 md:px-0">
					<p className="leading-relaxed">
						X DESIGNERS CAREER FES
						みなさんにキャリアについて考えていただく座談会形式で開催していますが、スピンオフイベントの今回はプロの意見を聞いてみるパネルディスカッション形式でお送りします。
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
