import Link from "next/link";
import SectionTitleLong from "@/components/sectionTitleLong";

export const metadata = {
	title: "Discordサーバーについて | X Designers Career Fes",
	description:
		"クロス・デザイナーズ・キャリア・フェス（XDCF）のDiscordサーバーについて",
};

const Discord = () => {
	return (
		<div id="discord" className="">
			<section>
				<SectionTitleLong title="XDCF Discord" />
				<article className="max-w-5xl mx-auto mt-10 px-4 md:px-0">
					<h2 className="text-3xl font-bold">XDCF Discordサーバーについて</h2>
					<p className="leading-relaxed mt-6">
						XDCFではDiscordを利用してコミュニティ内のコミュニケーションを取っています。
						<br />
						コミュニティに参加したい方には積極的にご参加頂けたらと思っていますので、イベントに参加するのが難しいと言う方も、是非コミュニティで交流してください。
					</p>
					<p>参加ご希望の方は以下のリンクからサーバーへご参加ください。</p>
					<p className="leading-relaxed mt-6">
						<Link
							href="https://discord.gg/FReZdzjury"
							className="link-btn"
							rel="noreferrer"
							target="_blank"
						>
							XDCF Discordサーバー参加
						</Link>
					</p>
				</article>
			</section>
			<section>
				<SectionTitleLong title="Server Rules" />
				<article className="max-w-5xl mx-auto mt-10 px-4 md:px-0">
					<h2 className="text-3xl font-bold">XDCF Discordサーバー 利用規約</h2>
					<p className="leading-relaxed mt-6">
						本規約は、X DESIGNERS CAREER
						FES（以下、「当コミュニティ」といいます）のDiscordサーバー（以下、「当Discordサーバー」といいます）に参加する全ての利用者に適用されます。
						当Discordサーバーに参加し、利用を開始した時点で、本規約の全ての内容に同意したものとみなします。
					</p>

					<h3 className="text-2xl font-bold mt-14">第1条（目的）</h3>
					<p className="leading-relaxed mt-6">
						当Discordサーバーは、当コミュニティ内の交流を目的とします。
						利用者は、当コミュニティの目的に沿った健全な利用を心がけるものとします。
					</p>

					<h3 className="text-2xl font-bold mt-14">第2条（禁止事項）</h3>
					<p className="leading-relaxed mt-6">
						当Discordサーバーの利用にあたり、以下の行為を禁止します。
						利用者が以下のいずれかに該当する行為を行った場合、またはそのおそれがあるとXDCF運営チーム（以下、「運営」といいます）が判断した場合、
						運営は事前の通知なく、該当するコンテンツの削除、警告、一時的なアクセス制限、追放（BAN
						/ KICK）等の措置を講じることができるものとします。
					</p>
					<ol className="mt-6 space-y-2 list-decimal list-inside">
						<li>法令に違反する行為、またはそれに準ずる行為。</li>
						<li>
							Discordの利用規約およびコミュニティガイドラインに違反する行為。
						</li>
						<li>
							他の利用者、運営、または第三者に対する誹謗中傷、脅迫、嫌がらせ、差別的な発言。
						</li>
						<li>
							他の利用者の個人情報やプライバシーに関わる情報を無断で公開する行為（Doxxing）。
						</li>
						<li>
							わいせつ、児童ポルノ、児童虐待にあたる画像、動画、その他のコンテンツを投稿する行為。
						</li>
						<li>過度に暴力的、残虐的なコンテンツを投稿する行為。</li>
						<li>
							不正アクセス、クラッキング、ウィルス等の有害なプログラムを配布する行為。
						</li>
						<li>
							当コミュニティのシステムやネットワークに過度な負荷をかける行為。
						</li>
						<li>
							スパム、チェーンメール、マルチ商法、ねずみ講、アフィリエイト等、営利目的またはそれに準ずる目的での宣伝・勧誘行為。ただし、運営が許可した場合はこの限りではありません。
						</li>
						<li>他の利用者または第三者になりすます行為。</li>
						<li>
							当コミュニティの目的と無関係な内容の投稿、または特定のチャンネルのテーマから著しく逸脱した内容の投稿。
						</li>
						<li>
							他の利用者の利用を妨害する行為（過度なPing、メンション、チャットの埋め立て等）。
						</li>
						<li>著作権、商標権、その他の知的財産権を侵害する行為。</li>
						<li>運営の指示に従わない行為。</li>
						<li>
							その他、運営が当コミュニティの秩序を乱し、または他の利用者に迷惑をかけると判断する行為。
						</li>
					</ol>

					<h3 className="text-2xl font-bold mt-14">
						第3条（コンテンツの管理）
					</h3>
					<p className="leading-relaxed mt-6">
						利用者が当Discordサーバーに投稿した全てのコンテンツの著作権は、当該投稿を行った利用者に帰属します。ただし、運営は、当コミュニティの運営、広報、および本規約違反の対応のために必要と判断した場合、当該コンテンツを閲覧、保存、または削除することができるものとします。
					</p>

					<h3 className="text-2xl font-bold mt-14">第4条（免責事項）</h3>
					<ol className="mt-6 space-y-2 list-decimal list-inside">
						<li>
							運営は、当Discordサーバーの利用により発生した利用者のいかなる損害（他の利用者との間のトラブル、投稿された情報の信頼性、第三者による不正行為等に起因する損害を含みますが、これらに限りません）に対しても、一切の責任を負わないものとします。
						</li>
						<li>
							当コミュニティから他のウェブサイトやリソースへのリンクを提供することがありますが、運営はリンク先のコンテンツ、サービス、プライバシーポリシー等について一切の責任を負いません。
						</li>
						<li>
							運営は、当Discordサーバーの継続的な提供に努めますが、システムの保守、障害、またはその他の理由により、事前の通知なく当Discordサーバーや当コミュニティの全部または一部の提供を停止または終了することがあります。これにより利用者に生じた損害について、運営は一切の責任を負わないものとします。
						</li>
					</ol>

					<h3 className="text-2xl font-bold mt-14">第5条（利用規約の変更）</h3>
					<p className="leading-relaxed mt-6">
						運営は、利用者の承諾を得ることなく、必要に応じて本規約の全部または一部を変更することができます。変更後の規約は、当コミュニティ内の適切な場所に変更内容を掲載した時点から効力を生じるものとします。利用者は、規約変更後も当Discordサーバーのを利用し続けた場合、変更後の規約に同意したものとみなします。
					</p>

					<h3 className="text-2xl font-bold mt-14">
						第6条（準拠法および管轄）
					</h3>
					<p className="leading-relaxed mt-6">
						本規約の解釈にあたっては、日本法を準拠法とします。本規約または当コミュニティの利用に関して生じた紛争については、東京を管轄する裁判所を第一審の専属的合意管轄裁判所とします。
					</p>

					<h3 className="text-2xl font-bold mt-14">第7条（附則）</h3>
					<p className="leading-relaxed mt-6">
						本規約は2025年6月23日より施行します。
					</p>
				</article>
			</section>
		</div>
	);
};

export default Discord;
