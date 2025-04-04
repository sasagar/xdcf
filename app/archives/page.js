import ArchiveList from "./components/archiveList";
import Sponsor from "@/components/sponsor";

export const metadata = {
	title: "過去開催アーカイブ | X Designers Career Fes",
	description:
		"X Designers Career Fes（クロス・デザイナーズ・キャリア・フェス）の過去開催分をまとめています。",
};

/**
 * The Home page component for the X Designers Career Fes website.
 *
 * This component renders the main structure of the homepage, including key sections
 * like KeyComponent, NewsList, Concept, Contents, Schedule, Casts, and Sponsor.
 * It provides information about the X Designers Career Fes event, focusing on
 * designer career paths and discussions with industry professionals.
 *
 * @return {JSX.Element} The JSX element representing the Home page.
 */
export default function Home() {
	return (
		<div className="">
			<ArchiveList />
			<Sponsor />
		</div>
	);
}
