import Casts from "@/components/casts";
import KeyComponent from "@/components/keyComponent";
import NewsList from "@/components/newsList";
import Schedule from "../components/schedule";
import SectionTitle from "@/components/sectionTitle";
import About from "@/components/about";
import Sponsor from "@/components/sponsor";

export const metadata = {
	title: "X Designers Career Fes",
	description:
		"2025年4月19日開催！ X Designers Career Fes（クロス・デザイナーズ・キャリア・フェス）公式サイト",
};

/**
 * The Home page component for the X Designers Career Fes website.
 *
 * This component renders the main structure of the homepage, including key sections
 * like KeyComponent, NewsList, Concept, Contents, Schedule, Casts, and Sponsor.
 * It provides information about the X Designers Career Fes event, focusing on
 * designer career paths and discussions with industry professionals.
 *
 * @return {JSX.Element} The JSX element representing the Home page.
 */
export default function Home() {
	return (
		<div className="">
			<KeyComponent
				date="2025.04.19 sat"
				link="https://xdufes.connpass.com/event/350143/"
			/>
			<NewsList />
			<section>
				<SectionTitle title="Concept" />
				<article className="max-w-5xl mx-auto mt-4 md:mt-10 px-4 md:px-0">
					<p className="leading-relaxed">
						X DESIGNERS CAREER
						FESは「セミナー形式」ではなく、さまざまなテーマで会話を楽しむ「座談会」のイベント。
						これからデザイナーを目指す方、キャリアに悩む現役デザイナー、デザイナーを支えるマネージャーや経営者、デザイナーと一緒に仕事をするエンジニアやディレクターなど、多様な視点を持つすべての方が、立場を越えて対話を楽しむ場です。
					</p>
					<p className="leading-relaxed">
						「デザイナー」と言ってもその得意領域はさまざま。
						WEBはもちろんグラフィックやDTP、プロダクトなど、手がけるデザインが違えば、意見も違ってくる。そんな「違う背景を持った人」と自由な発想で語り合う、そんなイベントです。
					</p>
				</article>
			</section>
			<section className="mt-20">
				<SectionTitle title="Contents" />
				{/* <article className="max-w-5xl mx-auto mt-10">
					<p className="leading-relaxed">
						コンセプト文章が入ります。文字はダミーです。行間・字間をわかりやすくするために入れています。
						<br />
						コンセプト文章が入ります。文字はダミーです。行間・字間をわかりやすくするために入れています。入れています。
						<br />
						コンセプト文章が入ります。文字はダミーです。行間・字間をわかりやすくするために入れていコンセプト文章が入ります。
						<br />
						コンセプト文章が入ります。文字はダミーです。行間・字間をわかりやすくするために入れています。入れています。
						<br />
						コンセプト文章が入ります。文字はダミーです。行間・字間をわかりやすくするために入れています。
						<br />
						コンセプト文章が入ります。文字はダミーです。行間・字間をわかりやすくするために入れています。
					</p>
				</article> */}
				<Schedule />
				<Casts />
			</section>
			<section>
				<About
					link="https://xdufes.connpass.com/event/350143/"
					year="2024"
					month="04"
					day="19"
					weekday="土"
					openHour="13"
					openMinute="00"
					startHour="13"
					startMinute="30"
				/>
			</section>
			<Sponsor />
		</div>
	);
}
