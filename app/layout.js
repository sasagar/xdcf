// import localFont from "next/font/local";
import "./globals.css";
import AdobeFontLoader from "@/components/adobeFontLoader";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Loading from "@/components/loading";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
// });

// export const metadata = {
// 	title: "X Designers Career Fes",
// 	description:
// 		"2024年12月25日開催！ X Designers Career Fes（クロス・デザイナーズ・キャリア・フェス）公式サイト",
// };

export default function RootLayout({ children }) {
	return (
		<html lang="ja">
			<AdobeFontLoader />
			<body className="font-notoSans">
				<Loading />
				<div id="container">
					<Header />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
