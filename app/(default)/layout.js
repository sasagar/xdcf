// import localFont from "next/font/local";
import "./globals.css";
import AdobeFontLoader from "@/components/adobeFontLoader";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Loading from "@/components/loading";

/**
 * The root layout of the app.
 *
 * This component wraps the entire app in an <html> element and includes
 * the Adobe font loader, a loading animation, a header, the main content,
 * and a footer.
 *
 * The main content is passed as a child to this component, and should be a
 * single JSX element.
 *
 * @param {{ children: JSX.Element }} props
 * @returns {JSX.Element}
 */
export default function RootLayout({ children }) {
	const link = "https://xdufes.connpass.com/event/353154/";
	const openAt = new Date("2025-06-01T00:00:00+09:00");
	const closeAt = new Date("2025-06-30T15:00:00+09:00");
	const spinoffLink = "https://xdufes.connpass.com/event/358951/";
	const spinoffOpenAt = new Date("2025-07-03T00:00:00+09:00");
	const spinoffCloseAt = new Date("2025-07-28T13:00:00+09:00");
	return (
		<html lang="ja">
			<AdobeFontLoader />
			<body className="font-notoSans">
				<Loading />
				<div id="container">
					<Header
						link={link}
						openAt={openAt}
						closeAt={closeAt}
						spinoffLink={spinoffLink}
						spinoffOpenAt={spinoffOpenAt}
						spinoffCloseAt={spinoffCloseAt}
					/>
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
