import MainFlex from "@/components/mainFlex";
import SubSectionTitle from "@/components/subSectionTitle";

const Schedule = () => {
	return (
		<section id="schedule">
			<div className="max-w-5xl mx-auto mt-4 md:mt-10">
				<SubSectionTitle en="Schedule" jp="スケジュール" />
			</div>
			<MainFlex title="Timetable" comingsoon={false}>
				<table>
					<thead>
						<tr>
							<th>時間</th>
							<th>内容</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>13:00</td>
							<td>開場・入場受付開始</td>
						</tr>
						<tr>
							<td>13:30</td>
							<td>開演・オープニング</td>
						</tr>
						<tr>
							<td>13:45-14:05</td>
							<td>ワークショップ / アイディアソン (1)</td>
						</tr>
						<tr>
							<td>14:10-14:30</td>
							<td>ワークショップ / アイディアソン (2)</td>
						</tr>
						<tr>
							<td>14:45-15:05</td>
							<td>ワークショップ / アイディアソン (3)</td>
						</tr>
						<tr>
							<td>15:10-15:30</td>
							<td>ワークショップ / アイディアソン (4)</td>
						</tr>
						<tr>
							<td>15:45-16:15</td>
							<td>各テーブルの発表</td>
						</tr>
						<tr>
							<td>16:15</td>
							<td>クロージング・懇親タイム</td>
						</tr>
						<tr>
							<td>17:00</td>
							<td>閉会</td>
						</tr>
					</tbody>
				</table>
				{/* <div className="py-4 border-t border-dashed border-gray-300">
					<a
						href="#top"
						className="more-link uppercase font-josefin border rounded-full px-6 border-foreground leading-none hover:bg-foreground hover:text-background transition-all"
					>
						タイムテーブルPDF
					</a>
				</div> */}
			</MainFlex>
		</section>
	);
};

export default Schedule;
