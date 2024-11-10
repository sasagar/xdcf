import SectionTitleLong from "@/components/sectionTitleLong";

export const metadata = {
	title: "Code of Conduct | X Designers Career Fes",
	description:
		"クロス・デザイナーズ・キャリア・フェス（XDCF）のコミュニティ行動規範",
};

/**
 * The Code of Conduct page for X Designers Career Fes.
 *
 * The page shows the community policy for the event, including the
 * provision of a safe environment and the policy against any
 * inappropriate behavior.
 *
 * @return {JSX.Element} The JSX element representing the Code of Conduct page.
 */
export default function Coc() {
	return (
		<div id="code-of-conduct" className="">
			<section>
				<SectionTitleLong title="Code of Conduct" />
				<article className="max-w-5xl mx-auto mt-10 px-4 md:px-0">
					<h2 className="text-3xl font-bold">コミュニティ行動規範</h2>
					<p className="leading-relaxed mt-6">
						クロス・デザイナーズ・キャリア・フェス（XDCF）では、デザイナーを含めたIT業界で働く皆様の情報共有とコミュニケーションを目的として、次のコミュニティ行動規範（コミュニティポリシー）に基づいた運営に努めています。
						XDCFへの登壇、スポンサー、スタッフを含む全ての参加者の皆様は、下記行動規範に同意の上でご参加いただけますよう。ご協力をお願いいたします。
					</p>
					<h3 className="text-2xl font-bold mt-14">安全な場の提供</h3>
					<p className="leading-relaxed mt-6">
						私達は、年齢、国籍、障がい、人種、宗教および全ての社会的な状況や、XDをはじめとする様々な技術水準を問わず、全ての参加者に良い経験と安全な場を提供することに努めます。
					</p>
					<h3 className="text-2xl font-bold mt-14">不適切な行動に対する方針</h3>
					<p className="leading-relaxed mt-6">
						悪質な勧誘、ストーキング、性やアルコール等を強要するハラスメント、また個人の発表や団体の運営を妨害する行為など、不適切な行為を発見、確認した場合、そのリストの公開と、当該者の今後のコミュニティへの参加を禁止します。
					</p>
				</article>
			</section>
		</div>
	);
}
