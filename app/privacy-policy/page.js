import SectionTitleLong from "@/components/sectionTitleLong";

export const metadata = {
	title: "Pivacy Policy | X Designers Career Fes",
	description:
		"クロス・デザイナーズ・キャリア・フェス（XDCF）のプライバシーポリシー",
};

export default function PrivacyPolicy() {
	return (
		<div id="privacy-policy" className="">
			<section>
				<SectionTitleLong title="Privacy Policy" />
				<article className="max-w-5xl mx-auto mt-10 px-4 md:px-0">
					<h2 className="text-3xl font-bold">プライバシーポリシー</h2>
					<p className="leading-relaxed mt-6">最終更新日：2024年11月11日</p>
					<p className="leading-relaxed mt-6">
						クロス・デザイナーズ・キャリア・フェス（以下「当団体」といいます）は、利用者のプライバシーを尊重し、個人情報を適切に保護することを重要視しています。本プライバシーポリシーは、当団体が提供するサービス（以下「本サービス」といいます）において、収集する個人情報の種類、使用方法、保護方法について説明しています。
					</p>
					<h3 className="text-2xl font-bold mt-14">収集する情報</h3>
					<p className="leading-relaxed mt-6">
						当団体は、本サービスの提供および運営のために以下の個人情報を収集することがあります。
					</p>
					<dl>
						<div className="mt-3">
							<dt className="font-bold">登録情報</dt>
							<dd className="mt-2 pl-3">
								利用者がアカウントを作成する際に提供いただく名前、メールアドレス、電話番号、住所など。
							</dd>
						</div>
						<div className="mt-3">
							<dt className="font-bold">利用情報</dt>
							<dd className="mt-2 pl-3">
								利用者の利用履歴、IPアドレス、ブラウザ情報、Cookieなどのデータ。
							</dd>
						</div>
						<div className="mt-3">
							<dt className="font-bold">お問い合わせ情報</dt>
							<dd className="mt-2 pl-3">
								サポートに関するお問い合わせ時のやり取りやその他のご連絡内容。
							</dd>
						</div>
					</dl>
					<h3 className="text-2xl font-bold mt-14">情報の利用目的</h3>
					<p className="leading-relaxed mt-6">
						当団体は、収集した個人情報を以下の目的で利用します。
					</p>
					<ul className="list-disc pl-6">
						<li>本サービスの提供および運営のため</li>
						<li>利用者の本人確認や認証のため</li>
						<li>利用者へのサービスに関する通知やサポートのため</li>
						<li>本サービスの改善や新サービスの開発のため</li>
						<li>法的義務への対応や不正行為の防止のため</li>
					</ul>
					<h3 className="text-2xl font-bold mt-14">第三者への提供</h3>
					<p className="leading-relaxed mt-6">
						当団体は、次の場合を除き、利用者の同意なく第三者に個人情報を提供することはありません。
					</p>
					<ul className="list-disc pl-6">
						<li>法令に基づき開示が必要な場合</li>
						<li>利用者の同意がある場合</li>
						<li>利用者へのサービスに関する通知やサポートのため</li>
						<li>本サービスの改善のため</li>
						<li>法的義務への対応や不正行為の防止のため</li>
						<li>
							その他、利用者がイベントに参加するために必要な情報を会場に提供する場合
						</li>
					</ul>
					<h3 className="text-2xl font-bold mt-14">個人情報の保護と管理</h3>
					<p className="leading-relaxed mt-6">
						当団体は、利用者の個人情報を安全に管理するため、適切な技術的および組織的なセキュリティ対策を講じます。また、不正アクセスや情報漏洩を防止するため、運営スタッフへの教育や内部監査を行い、個人情報の保護に努めます。
					</p>
					<h3 className="text-2xl font-bold mt-14">Cookieの使用について</h3>
					<p className="leading-relaxed mt-6">
						当団体のウェブサイトやアプリケーションでは、利用者の利便性向上や利用状況の分析のためにCookieを使用することがあります。Cookieにより収集された情報は、個人を特定する情報には使用されません。
					</p>
					<h3 className="text-2xl font-bold mt-14">
						個人情報の開示、訂正、削除について
					</h3>
					<p className="leading-relaxed mt-6">
						利用者は、当団体が保有する個人情報の開示、訂正、削除を希望される場合、当団体にお問い合わせください。当団体は、法令に基づき適切に対応いたします。
					</p>
					<h3 className="text-2xl font-bold mt-14">本ポリシーの変更</h3>
					<p className="leading-relaxed mt-6">
						当団体は、必要に応じて本プライバシーポリシーを改定することがあります。改定後のポリシーは、当団体のウェブサイト等に掲載した時点から効力を有するものとします。
					</p>
					<h3 className="text-2xl font-bold mt-14">お問い合わせ窓口</h3>
					<p className="leading-relaxed mt-6">
						本プライバシーポリシーに関するご質問や利用者の個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください。
					</p>
					<dl>
						<div className="mt-3">
							<dt className="font-bold">団体名</dt>
							<dd className="mt-2 pl-3">
								クロス・デザイナーズ・キャリア・フェス (XDCF)
							</dd>
						</div>
						<div className="mt-3">
							<dt className="font-bold">連絡先</dt>
							<dd className="mt-2 pl-3">
								<a href="https://x.com/xdcfjp">
									https://x.com/xdcfjp (X / 旧 Twitter)
								</a>
							</dd>
						</div>
					</dl>
				</article>
			</section>
		</div>
	);
}
