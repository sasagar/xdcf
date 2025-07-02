// import localFont from "next/font/local";
import "./globals.css";
import AdobeFontLoader from "@/components/adobeFontLoader";

import Header from "@/components/header";
import Footer from "@/components/footer";
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
	return (
		<html lang="ja">
			<AdobeFontLoader />
			<body className="font-notoSans">
				<Loading />
				<div id="container">
					<Header link={link} />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
