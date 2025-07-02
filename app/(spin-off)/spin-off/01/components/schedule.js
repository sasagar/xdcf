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
							<td>13:30</td>
							<td>開場・入場受付開始</td>
						</tr>
						<tr>
							<td>14:00</td>
							<td>開演</td>
						</tr>
						<tr>
							<td>(途中15分)</td>
							<td>休憩</td>
						</tr>
						<tr>
							<td>16:30</td>
							<td>終演・会場内懇親タイム</td>
						</tr>
						<tr>
							<td>17:30</td>
							<td>閉場</td>
						</tr>
					</tbody>
				</table>
			</MainFlex>
		</section>
	);
};

export default Schedule;
