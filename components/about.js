import SubSectionTitle from "./subSectionTitle";
import MainFlex from "./mainFlex";

const About = () => {
	return (
		<>
			<div id="about" className="max-w-5xl mx-auto mt-10">
				<SubSectionTitle en="About" jp="イベント概要" />
			</div>
			<MainFlex title="Join" className="border-b border-dashed border-gray-300">
				<div className="mt-0 md:mt-4 my-4">
					<div className="mb-2">無料</div>
					<a
						href="https://xdufes.connpass.com/event/336906/"
						className="inline-block w-full md:w-fit text-center uppercase font-josefin border rounded-full px-14 py-3 text-white bg-mintGreen-400 border-background hover:bg-mintGreen-100 hover:text-mintGreen-400 transition-all hover:no-underline"
					>
						参加する
					</a>
				</div>
			</MainFlex>
			<MainFlex
				title="Date"
				className="border-b border-dashed border-gray-300"
				comingsoon="true"
			>
				<div className="pt-0 md:pt-4 py-4 border-b border-dashed border-gray-300">
					<div className="text-2xl">
						<time dateTime="2024-12-15">
							2024年<span className="text-4xl">12</span>月
							<span className="text-4xl">15</span>日 (日)
						</time>
					</div>
				</div>
				<div className="py-4">
					<dl className="flex items-start gap-8">
						<div className="flex gap-3">
							<dt className="text-sm">開場時間</dt>
							<dd className="text-4xl">
								<time dateTime="13:00">
									13<span className="text-2xl">:</span>00
								</time>
							</dd>
						</div>
						<div className="flex gap-3">
							<dt className="text-sm">開演時間</dt>
							<dd className="text-4xl">
								<time dateTime="13:30">
									13<span className="text-2xl">:</span>30
								</time>
							</dd>
						</div>
					</dl>
				</div>
			</MainFlex>
			<MainFlex
				title="Access"
				className="border-b border-dashed border-gray-300"
			>
				<div className="pb-8 md:py-4">
					<div className="text-4xl">Adobeオフィス</div>
					<div className="mt-8">
						{/* 会場: オフライン＆オンライン
						<br /> */}
						住所: 東京都品川区大崎1-11-2
						ゲートシティ大崎イーストタワー　Adobeオフィス内
					</div>
					<div className="mt-8 flex flex-col md:flex-row gap-4 md:gap-6 md:justify-start">
						<a
							href="https://www.adobe.com/jp/information/company/map.html"
							className="inline-block text-center px-12 py-3 border border-gray-300 hover:bg-mintGreen-400 hover:border-mintGreen-400 rounded-full text-foreground hover:text-white hover:no-underline transition-all"
						>
							会場の詳細はこちら
						</a>
						<a
							href="https://maps.app.goo.gl/DZBJc2nNyR36EQ1r8"
							className="inline-block text-center px-12 py-3 border border-gray-300 hover:bg-mintGreen-400 hover:border-mintGreen-400 rounded-full text-foreground hover:text-white hover:no-underline transition-all"
						>
							Googleマップで見る
						</a>
					</div>
				</div>
			</MainFlex>
			<MainFlex
				title="Official SNS"
				className="border-b border-dashed border-gray-300"
			>
				<div className="pt-0 md:pt-4 py-4 flex justify-start items-center gap-4">
					<a
						href="https://x.com/xdcfjp"
						className="more-link font-josefin border rounded-full px-6 py-1 border-foreground leading-none hover:bg-foreground hover:text-background transition-all"
					>
						X (旧 Twitter)
					</a>
					{/* <a
						href="#top"
						className="more-link font-josefin border rounded-full px-6 py-1 border-foreground leading-none hover:bg-foreground hover:text-background transition-all"
					>
						Facebookグループ
					</a>
					<a
						href="#top"
						className="more-link font-josefin border rounded-full px-6 py-1 border-foreground leading-none hover:bg-foreground hover:text-background transition-all"
					>
						note
					</a> */}
				</div>
			</MainFlex>
			<MainFlex
				title="Attention"
				className="border-b border-dashed border-gray-300"
			>
				<div className="pt-0 md:pt-4 py-4">
					<ul className="list-disc list-outside ms-5 mb-5">
						<li>
							このイベントは<a href="/coc">コミュニティ行動規範</a>
							に基づいて活動しています。
							<br />
							ご参加に際しましてご一読をお願いいたします。
						</li>
						<li>
							会場での回線（Wi-Fi）のご提供はございません。あらかじめご了承ください。
						</li>
						<li>
							マスク着用につきましては任意とさせていただきます。各自の選択を尊重ください。
						</li>
						<li>体調がすぐれない場合や発熱がある場合は参加をお控え下さい。</li>
					</ul>
					{/* <a
						href="#top"
						className="inline-block uppercase font-josefin border rounded-full px-14 py-3 text-white bg-mintGreen-400 border-background hover:bg-mintGreen-400 hover:text-mingreen-400 transition-all hover:no-underline"
					>
						スタッフにエントリーする
					</a> */}
				</div>
			</MainFlex>
			{/* <MainFlex
				title="Speskers"
				className="border-b border-dashed border-gray-300"
			>
				<div className="py-4">
					<ul className="list-disc list-outside ms-5 mb-5">
						<li>登壇者募集について詳細を記載登壇者募集について詳細を記載</li>
						<li>登壇者募集について詳細を記載登壇者募集について詳細を記載</li>
						<li>登壇者募集について詳細を記載登壇者募集について詳細を記載</li>
						<li>登壇者募集について詳細を記載登壇者募集について詳細を記載</li>
					</ul>
					<a
						href="#top"
						className="inline-block uppercase font-josefin border rounded-full px-14 py-3 text-white bg-mintGreen-400 border-background hover:bg-mintGreen-400 hover:text-mingreen-400 transition-all hover:no-underline"
					>
						登壇者にエントリーする
					</a>
				</div>
			</MainFlex> */}
		</>
	);
};

export default About;
