import MainFlex from "./mainFlex";
import SubSectionTitle from "./subSectionTitle";

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
							<td> 開演・イベント概要説明</td>
						</tr>
						<tr>
							<td>13:35-13:50</td>
							<td>自己紹介シートの記入タイム（個人ワーク）</td>
						</tr>
						<tr>
							<td>13:50-14:10</td>
							<td>ワークショップ① テーマ（１）</td>
						</tr>
						<tr>
							<td>14:10-14:30</td>
							<td>ワークショップ② テーマ（２）</td>
						</tr>
						<tr>
							<td>14:30-14:45</td>
							<td>休憩</td>
						</tr>
						<tr>
							<td>14:45-15:05</td>
							<td>ワークショップ③ テーマ（３）</td>
						</tr>
						<tr>
							<td>15:05-15:25</td>
							<td>ワークショップ④ テーマ（４）</td>
						</tr>
						<tr>
							<td>15:25-15:45</td>
							<td>ワークショップ⑤ テーマ（５）</td>
						</tr>
						<tr>
							<td>15:45-16:00</td>
							<td>休憩</td>
						</tr>
						<tr>
							<td>16:00-16:25</td>
							<td>発表・共有会（各テーマごとに5分 × 5）</td>
						</tr>
						<tr>
							<td>16:25</td>
							<td>クロージング・アンケート案内など</td>
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
