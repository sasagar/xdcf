import Image from "next/image";

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
						href="#staff"
						className="text-foreground more-link font-josefin border md:border-0 rounded-full md:rounded-none px-6 py-0 md:p-0 border-foreground leading-none hover:bg-foreground md:hover:bg-transparent hover:text-background md:hover:text-inherit transition-all hover:no-underline md:hover:underline"
					>
						Staff
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
				<div id="staff" className="grid grid-cols-2 md:grid-cols-3">
					<CastTitle title="Staff" />
					<Cast
						title="Adobe Community Evangelist"
						name="北村 崇"
						img="/staff/kitamura.avif"
						x="500"
						y="500"
					/>
					<Cast
						title="Adobe Community Evangelist"
						name="Crema"
						img="/staff/crema.png"
						x="960"
						y="960"
					/>
					<Cast
						title="Adobe Community Evangelist"
						name="湯口 りさ"
						img="/staff/risa.avif"
						x="500"
						y="500"
					/>
					<Cast
						title="DESIGNER"
						name="平内 祐斗"
						img="/staff/hiranai.png"
						x="337"
						y="337"
					/>
					<Cast
						title="DESIGNER"
						name="おこじょ"
						img="/staff/okojo.jpg"
						x="400"
						y="400"
					/>
					<Cast
						title="DESIGNER"
						name="Daisuke Mori"
						img="/staff/mori.jpg"
						x="709"
						y="709"
					/>
					<Cast
						title="ENGINEER / DIRECTOR"
						name="さっちゃん"
						img="/staff/sacchan.jpg"
						x="1334"
						y="1334"
					/>
					<Cast
						title="DESIGNER"
						name="東郷 源"
						img="/staff/togo.png"
						x="381"
						y="381"
					/>
					<Cast
						title="WEB DIRECTOR"
						name="まつお"
						img="/staff/matsuo.png"
						x="256"
						y="256"
					/>
					<Cast
						title="PROJECT MANAGER"
						name="本間恵"
						img="/staff/homma.png"
						x="1024"
						y="1024"
					/>
					<Cast
						title="DESIGNER"
						name="佐藤 実可子"
						img="/staff/mikako.jpg"
						x="800"
						y="800"
					/>
					{/* <Cast title="Programmer" name="けいすけ" /> */}
				</div>
				<div id="mc" className="grid grid-cols-2 md:grid-cols-3">
					<CastTitle title="MC" />
					<Cast
						title="DESIGNER / PROGRAMMER"
						name="ささぴよ"
						img="/staff/sasapiyo.png"
						x="3265"
						y="3265"
					/>
					<Cast className="hidden md:block" />
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
 * @return {JSX.Element} The JSX element representing the Cast component.
 */
const Cast = ({
	title,
	name,
	img = "",
	x = "600",
	y = "600",
	className = "",
}) => {
	return (
		<div className={`cast-block p-4 ${className}`}>
			<div className="w-full aspect-square bg-background mb-3">
				{img !== "" ? (
					<Image src={img} width={x} height={y} alt="{name}" />
				) : (
					""
				)}
			</div>
			<span className="font-josefin text-xs leading-3">{title}</span>
			<h4 className="text-xl">{name}</h4>
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
