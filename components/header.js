"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";

/**
 * The header component for the X Designers Career Fes website.
 *
 * @return {JSX.Element} The JSX element representing the Header component.
 */
const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const genericHamburgerLine =
		"h-1 w-8 my-1 rounded-full bg-foreground transition ease transform duration-300";
	const scroll = (id) => {
		const ele = document.getElementById(id);
		window.scrollTo(0, ele.offsetTop - 130);
	};
	const router = useRouter();

	return (
		<>
			<div
				id="top"
				className="fixed top-0 left-0 right-0 w-full bg-background z-50"
			>
				<div className="max-w-7xl mx-auto pl-4 pr-2 md:px-0">
					<header className="px-0 pt-4 pb-9 md:py-9 flex justify-between items-center">
						<h1 className="font-josefin italic text-3xl">
							<a href="/" className="flex gap-6 items-center">
								<Image
									src="/logo.png"
									alt="XDCF"
									width={50}
									height={50}
									className="rounded-full"
								/>
								XDCF
							</a>
						</h1>

						<button
							type="button"
							className="flex flex-col h-12 w-12 rounded-sm justify-center items-center group md:hidden"
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
							className={`md:flex gap-8 ${isOpen ? "flex flex-col justify-start h-screen absolute top-24 left-0 bg-white/70 dark:bg-black/70 p-8 w-full backdrop-blur-sm" : "hidden"}`}
						>
							<ul className="flex flex-col md:flex-row justify-end items-center gap-8">
								<li>
									<button
										type="button"
										className="font-din flex flex-col justify-center items-center text-xl uppercase hover:cursor-pointer"
										onClick={() => router.push("/")}
									>
										Top
										<span className="font-notoSans text-xs">トップページ</span>
									</button>
								</li>
								<li>
									<button
										type="button"
										className="font-din flex flex-col justify-center items-center text-xl uppercase hover:cursor-pointer"
										onClick={() => {
											isOpen && setIsOpen(!isOpen);
											scroll("news");
										}}
									>
										News<span className="font-notoSans text-xs">最新情報</span>
									</button>
								</li>
								<li>
									<button
										type="button"
										className="font-din flex flex-col justify-center items-center text-xl uppercase hover:cursor-pointer"
										onClick={() => {
											isOpen && setIsOpen(!isOpen);
											scroll("schedule");
										}}
									>
										Schedule
										<span className="font-notoSans text-xs">スケジュール</span>
									</button>
								</li>
								<li>
									<button
										type="button"
										className="font-din flex flex-col justify-center items-center text-xl uppercase hover:cursor-pointer"
										onClick={() => {
											isOpen && setIsOpen(!isOpen);
											scroll("about");
										}}
									>
										About
										<span className="font-notoSans text-xs">イベント概要</span>
									</button>
								</li>
								<li>
									<button
										type="button"
										className="font-din flex flex-col justify-center items-center text-xl uppercase hover:cursor-pointer"
										onClick={() => router.push("/archives")}
									>
										Archives
										<span className="font-notoSans text-xs">過去開催</span>
									</button>
								</li>
							</ul>
							<a
								href="https://xdufes.connpass.com/event/350143/"
								target="_blank"
								className="link-btn"
								rel="noreferrer"
							>
								無料で参加する
								<Icon icon={"basil:share-box-outline"} />
							</a>
						</nav>
					</header>
				</div>
			</div>
			<div className="blank h-28 md:h-32" />
		</>
	);
};

export default Header;
