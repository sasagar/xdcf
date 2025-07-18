import About from "@/components/about";
import Casts from "@/components/casts";
import KeyComponent from "@/components/keyComponent";
import NewsList from "@/components/newsList";
import SectionTitle from "@/components/sectionTitle";
import Sponsor from "@/components/sponsor";
import Schedule from "./components/schedule";

export const metadata = {
	title: "X Designers Career Fes #1",
	description: "2024年12月15日開催 第1回 X Designers Career Fes",
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
				date="2024.12.15 sun"
				link="https://xdufes.connpass.com/event/336906/"
				openAt={new Date("2024-12-15T00:00:00+09:00")}
				closeAt={new Date("2024-12-15T15:00:00+09:00")}
				closedText="参加受付は終了しました"
			/>
			<NewsList />
			<section>
				<SectionTitle title="Concept" />
				<article className="max-w-5xl mx-auto mt-4 md:mt-10 px-4 md:px-0">
					<p className="leading-relaxed">
						Adobe XDUFesの運営スタッフが再集結！
						<br />
						2024年12月15日(日)に開催予定のX DESIGNERS CAREER
						FES（クロス・デザイナーズ・キャリア・フェス）
						<br />
						デザイナーのキャリアを知る・考えるイベントを開催！
					</p>
					<p className="leading-relaxed">
						デザイナーになりたい・転職したいけどどうすれば？デザイナーって続けた先にどんなキャリアがあるの？
						<br />
						UIデザイナー・UXデザイナー目指すならどっち？！
						<br />
						などなど、デザイナーのキャリアに纏わるエトセトラを現役のフリーランス・インハウス・UXデザイナーたちと語り合う座談会形式のイベントです。
					</p>
					<p className="leading-relaxed">
						仕事の内容から休日のインプット方法まで、多岐にわたって語り合うイベントです。
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
				{/* <Casts /> */}
			</section>
			<section>
				<About
					link="https://xdufes.connpass.com/event/336906/"
					year="2024"
					month="12"
					day="15"
					weekday="日"
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
