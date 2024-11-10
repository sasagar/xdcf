"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * The header component for the X Designers Career Fes website.
 *
 * @return {JSX.Element} The JSX element representing the Header component.
 */
const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const genericHamburgerLine =
		"h-1 w-6 my-1 rounded-full bg-foreground transition ease transform duration-300";

	return (
		<div className="max-w-7xl mx-auto px-4 md:px-0">
			<header className="px-0 py-9 flex justify-between items-center">
				<h1 className="font-josefin italic text-3xl">
					<a href="/" className="flex gap-6 items-center">
						<Image src="/logo.png" alt="XDCF" width={50} height={50} />
						XDCF
					</a>
				</h1>

				<button
					type="button"
					className="flex flex-col h-12 w-12 rounded justify-center items-center group md:hidden"
					onClick={() => setIsOpen(!isOpen)}
				>
					<div
						className={`${genericHamburgerLine} ${
							isOpen
								? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
								: "opacity-50 group-hover:opacity-100"
						}`}
					/>
					<div
						className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"}`}
					/>
					<div
						className={`${genericHamburgerLine} ${
							isOpen
								? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
								: "opacity-50 group-hover:opacity-100"
						}`}
					/>
				</button>

				<nav
					className={`md:flex gap-8 ${isOpen ? "flex flex-col justify-start h-max absolute top-24 left-0 bg-background/95 backdrop-blur-xl p-8 w-full z-20" : "hidden"}`}
				>
					<ul className="flex flex-col md:flex-row justify-end items-center gap-8">
						<li>
							<a
								href="/#top"
								className="font-din flex flex-col justify-center items-center text-xl uppercase"
							>
								Top<span className="font-notoSans text-xs">トップ</span>
							</a>
						</li>
						<li>
							<a
								href="/#news"
								className="font-din flex flex-col justify-center items-center text-xl uppercase"
							>
								News<span className="font-notoSans text-xs">最新情報</span>
							</a>
						</li>
						<li>
							<a
								href="/#schedule"
								className="font-din flex flex-col justify-center items-center text-xl uppercase"
							>
								Schedule
								<span className="font-notoSans text-xs">スケジュール</span>
							</a>
						</li>
						<li>
							<a
								href="/#about"
								className="font-din flex flex-col justify-center items-center text-xl uppercase"
							>
								About<span className="font-notoSans text-xs">イベント概要</span>
							</a>
						</li>
					</ul>
					<a
						href="https://xdufes.connpass.com/event/336906/"
						className="rounded-full bg-foreground px-10 py-2 bg-mintGreen-400 text-white border border-white hover:border-mintGreen-400 hover:text-mintGreen-400 hover:bg-white transition-all text-center md:text-left"
					>
						無料で参加する
					</a>
				</nav>
			</header>
		</div>
	);
};

export default Header;
