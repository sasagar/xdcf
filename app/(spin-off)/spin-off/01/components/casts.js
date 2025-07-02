import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

/**
 * Casts component that displays a list of staff and MCs.
 *
 * @return {JSX.Element} The JSX element representing the Casts component.
 */
const Casts = () => {
	return (
		<section className="max-w-5xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-start border-t md:border-y border-dashed border-gray-300">
			<ul className="text-xl font-josefin uppercase mt-4 md:mt-0 py-4 flex md:block flex-row gap-4 px-4 md:px-0 md:w-1/3">
				<li className="pt-0 md:pt-4 py-4">
					<a
						href="#speaker"
						className="text-foreground more-link font-josefin border md:border-0 rounded-full md:rounded-none px-6 py-0 md:p-0 border-foreground leading-none hover:bg-foreground md:hover:bg-transparent hover:text-background md:hover:text-inherit transition-all hover:no-underline md:hover:underline"
					>
						Speaker
					</a>
				</li>
				<li className="pt-0 md:pt-4 py-4">
					<a
						href="#mc"
						className="text-foreground more-link font-josefin border md:border-0 rounded-full md:rounded-none px-6 py-0 md:p-0 border-foreground leading-none hover:bg-foreground md:hover:bg-transparent hover:text-background md:hover:text-inherit transition-all hover:no-underline md:hover:underline"
					>
						MC
					</a>
				</li>
			</ul>
			<div className="w-full px-4 md:px-0 md:w-2/3">
				<div id="staff" className="">
					<CastTitle title="Speaker" />
					<Cast
						title="Character designer / Illustrator"
						name="北沢 直樹"
						img="/spin-off/01/prof_kitazawa.png"
						x="3000"
						y="3000"
					>
						<p>
							独自の世界観で描くキャラクターと、かわいいに特化したイラストが得意。
						</p>
						<p>
							アーティスト／タレントのキャラクター制作、「ONE
							PIECE」「攻殻機動隊S.A.C」などIPキャラのデフォルメワーク、またゲーム「真型メダロット」では全キャラクターのデザインを担当。
							<br />
							テレビ番組、新聞をはじめとしたメディア系のイラストレーション、ロゴデザインも多数。
						</p>
						<p>
							Adobe MAX 2023 キーノート出演
							<br />
							Adobe Community Evangelist 2025
						</p>
						<p>
							<strong>
								Photoshop ＆ Illustrator × Adobe Firefly
								“プロの現場”で使えるテクニック
							</strong>
							<br />
							北沢直樹 (著), コネクリ (著), タマケン (著), パパ (著)
						</p>
						<p className="flex justify-start items-center gap-6">
							<Link href="https://naokikitazawa.com">
								<Icon icon={"gis:globe-o"} />
							</Link>
							<Link href="https://x.com/naoki_kitazawa">
								<Icon icon={"simple-icons:x"} />
							</Link>
							<Link href="https://www.instagram.com/naoki_kitazawa">
								<Icon icon={"simple-icons:instagram"} />
							</Link>
							<Link href="https://www.tiktok.com/@naoki_kitazawa">
								<Icon icon={"simple-icons:tiktok"} />
							</Link>
						</p>
					</Cast>
					<Cast
						title="Setsunacreation LLC CEO / AICU Japan CxO"
						name="藤吉 香帆"
						img="/spin-off/01/kahofujiyoshi-prof.jpg"
						x="1856"
						y="1856"
					>
						<p>ビデオグラファー出身のクリエイティブディレクター</p>
						<p>
							広告会社でプロモーション領域のプランニングを経験したのち独立。独立後は事業会社への動画クリエイティブ支援を中心に、現在はコミュニケーションの設計において手段が目的にならないように、最新技術を積極的に取り入れながら必要最低限で正しく伝わるコミュニケーションの設計に取り組んでいる。
						</p>
					</Cast>
					<Cast
						title="Art Director／Designer"
						name="コネクリ"
						img="/spin-off/01/conecre.png"
						x="640"
						y="640"
					>
						<p>
							ウェブデザイナーとしてキャリアをスタートして、スマートフォンの台頭によりUI/UX・ゲームデザインを担当、現在はインハウス寄りのアートディレクター兼デザイナー。
							<br />
							社内外のディレクション・ワイヤー設計・デザイン・コーディングを行う。
							<br />
							自社、受託ともにウェブ・アプリ・グラフィック・ゲームの実績多数。
						</p>
						<p>
							個人サイトや各種SNSにてPhotoshopやIllustrator、Fireflyの作例を発信中！
						</p>
						<p>個人としての仕事は、</p>
						<ul className="list-disc list-outside ms-5">
							<li>
								動画制作『【アーティストに学ぶ】#33 Adobe Illustrator iPad版
								xコネクリ – アドビ公式』
							</li>
							<li>オンラインセミナー『朝までイラレ』『朝までフォトショ』</li>
							<li>
								著書『デザインの仕事がもっとはかどるAdobe
								Firefly活用テクニック50』（インプレス）
							</li>
						</ul>
						<p>など。</p>
						<p className="flex justify-start items-center gap-6">
							<Link href="https://connecre.com/">
								<Icon icon={"gis:globe-o"} />
							</Link>
							<Link href="https://x.com/connecre_">
								<Icon icon={"simple-icons:x"} />
							</Link>
							<Link href="https://www.youtube.com/@connecre">
								<Icon icon={"simple-icons:youtube"} />
							</Link>
							<Link href="https://www.instagram.com/connecre_/">
								<Icon icon={"simple-icons:instagram"} />
							</Link>
							<Link href="https://www.tiktok.com/@connecre">
								<Icon icon={"simple-icons:tiktok"} />
							</Link>
						</p>
					</Cast>
				</div>
				<div id="mc" className="">
					<CastTitle title="MC" />
					<Cast
						title="DESIGNER / PROGRAMMER"
						name="ささぴよ"
						img="/staff/sasapiyo2.jpg"
						x="3149"
						y="3149"
					>
						<p>
							デザイナーでもありプログラマーでもある何でも屋さん。踊ることもあるが、基本的にイベントではMCをしている事が多い。
						</p>
						<p>興味の範囲が広いので、色々な話をする場に呼ばれがち。</p>
					</Cast>
				</div>
			</div>
		</section>
	);
};

/**
 * Cast component that displays a cast member's information.
 *
 * @param {object} props - Component props
 * @param {string} props.title - The title of the cast member.
 * @param {string} props.name - The name of the cast member.
 * @param {string} [props.img=""] - The image URL of the cast member.
 * @param {string} [props.x="600"] - The width of the cast member's image.
 * @param {string} [props.y="600"] - The height of the cast member's image.
 * @param {string} [props.className=""] - Additional CSS class names.
 * @param {JSX.Element} [props.children] - Additional child elements.
 * @return {JSX.Element} The JSX element representing the Cast component.
 */
const Cast = ({
	title,
	name,
	img = "",
	x = "600",
	y = "600",
	className = "",
	children,
}) => {
	return (
		<div
			className={`cast-block p-4 md:flex md:items-start md:gap-3 ${className}`}
		>
			<div>
				<div className="w-full bg-background mb-3">
					{img !== "" ? (
						<Image
							src={img}
							width={x}
							height={y}
							alt="{name}"
							className="max-w-48"
						/>
					) : (
						""
					)}
				</div>
				<span className="font-josefin text-xs leading-3">{title}</span>
				<h4 className="text-xl mt-2">{name}</h4>
			</div>
			<div className="mt-3 md:mt-0">{children}</div>
		</div>
	);
};

/**
 * CastTitle component that displays a title for a cast section.
 *
 * @param {object} props - Component props
 * @param {string} props.title - The title to be displayed.
 * @return {JSX.Element} The JSX element representing the CastTitle component.
 */
const CastTitle = ({ title }) => {
	return (
		<div className="p-4 flex justify-center items-center bg-mint-green-400">
			<h3 className="text-2xl uppercase font-josefin text-white">{title}</h3>
		</div>
	);
};

export default Casts;
