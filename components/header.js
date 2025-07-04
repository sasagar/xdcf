"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LimitedLinkButton from "./limitedLinkButton";

/**
 * The header component for the X Designers Career Fes website.
 *
 * @return {JSX.Element} The JSX element representing the Header component.
 */
const Header = ({
	link,
	openAt,
	closeAt,
	spinoffLink,
	spinoffOpenAt,
	spinoffCloseAt,
}) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const genericHamburgerLine =
		"h-1 w-8 my-1 rounded-full bg-foreground transition ease transform duration-300";

	const navItems = [
		{ href: "/", label: "Top", subLabel: "トップページ" },
		{ href: "/#news", label: "News", subLabel: "最新情報" },
		{ href: "/spin-off", label: "Spin-Off", subLabel: "スピンオフ" },
		{ href: "/discord", label: "Discord", subLabel: "Discord" },
		{ href: "/coc", label: "CoC", subLabel: "行動規範" },
		{ href: "/archives", label: "Archives", subLabel: "過去開催" },
	];

	const handleNavClick = () => {
		if (isMenuOpen) {
			setIsMenuOpen(false);
		}
	};

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	return (
		<>
			<div
				id="top"
				className="fixed top-0 left-0 right-0 w-full bg-background z-50"
			>
				<div className="max-w-7xl mx-auto pl-4 pr-2 md:px-0">
					<header className="px-0 pt-4 pb-9 md:py-9 flex justify-between items-center">
						<h1 className="font-josefin italic text-3xl">
							<Link
								href="/"
								className="flex gap-6 items-center"
								onClick={handleNavClick}
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
						</h1>

						<button
							type="button"
							className="flex flex-col h-12 w-12 rounded-sm justify-center items-center group lg:hidden"
							onClick={toggleMenu}
							aria-label="メニューを開閉する"
							aria-expanded={isMenuOpen}
						>
							<div
								className={`${genericHamburgerLine} ${
									isMenuOpen
										? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
										: "opacity-50 group-hover:opacity-100"
								}`}
							/>
							<div
								className={`${genericHamburgerLine} ${isMenuOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"}`}
							/>
							<div
								className={`${genericHamburgerLine} ${
									isMenuOpen
										? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
										: "opacity-50 group-hover:opacity-100"
								}`}
							/>
						</button>

						<nav
							className={`lg:flex gap-8 ${isMenuOpen ? "flex flex-col justify-start h-screen absolute top-24 left-0 bg-background/70 p-8 w-full backdrop-blur-sm" : "hidden"}`}
						>
							<ul className="flex flex-col md:flex-row justify-end items-center gap-8">
								{navItems.map((item) => (
									<li key={item.href}>
										<Link
											href={item.href}
											className="font-din flex flex-col justify-center items-center text-xl uppercase hover:cursor-pointer"
											onClick={handleNavClick}
										>
											{item.label}
											<span className="font-notoSans text-xs">
												{item.subLabel}
											</span>
										</Link>
									</li>
								))}
							</ul>
							{spinoffLink ? (
								<LimitedLinkButton
									href={spinoffLink}
									className="link-btn px-4"
									openAt={spinoffOpenAt}
									closeAt={spinoffCloseAt}
									hidden={true}
								>
									スピンオフに参加する
								</LimitedLinkButton>
							) : null}
							{link ? (
								<LimitedLinkButton
									href={link}
									className="link-btn"
									openAt={openAt}
									closeAt={closeAt}
									hidden={true}
								>
									無料で参加する
								</LimitedLinkButton>
							) : null}
							{/* <a
								href={link}
								target="_blank"
								className="link-btn"
								rel="noreferrer"
							>
								無料で参加する
								<Icon icon={"basil:share-box-outline"} />
							</a> */}
						</nav>
					</header>
				</div>
			</div>
			<div className="blank h-28 md:h-32" />
		</>
	);
};

export default Header;
