// import localFont from "next/font/local";
import "./spinoff.css";
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
	const link = "https://xdufes.connpass.com/event/358951/";
	const openAt = new Date("2025-07-03T00:00:00+09:00");
	const closeAt = new Date("2025-07-28T13:00:00+09:00");
	return (
		<html lang="ja">
			<AdobeFontLoader />
			<body className="font-notoSans">
				<Loading />
				<div id="container">
					<Header
						spinoffLink={link}
						spinoffOpenAt={openAt}
						spinoffCloseAt={closeAt}
					/>
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
