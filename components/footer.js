import Image from "next/image";
import Link from "next/link";

/**
 * The footer component for the X Designers Career Fes website.
 *
 * @return {JSX.Element} The JSX element representing the Footer component.
 */
const Footer = () => {
	return (
		<footer className="w-full bg-foreground text-background py-8 text-center mt-24">
			<h4 className="font-josefin text-3xl text-center mx-auto w-fit">
				<Link
					href="/"
					className="flex gap-4 items-center text-background hover:no-underline"
				>
					<Image
						src="/logo.png"
						alt="XDCF"
						width={50}
						height={50}
						className="rounded-full"
					/>
					XDCF
				</Link>
			</h4>
			<h5 className="font-josefin text-lg mt-3">
				<Link href="/" className="text-background hover:no-underline">
					X DESIGNERS CAREER FES
				</Link>
			</h5>
			<section className="flex justify-center gap-4 mt-8 text-sm">
				<Link href="/coc">行動規範</Link> |{" "}
				<Link href="/discord">Discordサーバー利用規約</Link> |{" "}
				<Link href="/privacy-policy">プライバシーポリシー</Link>
			</section>
			<small className="block font-din mt-8 text-xs">
				&copy; 2024 XDCF. All rights reserved.
			</small>
		</footer>
	);
};

export default Footer;
