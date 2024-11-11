import MainFlex from "./mainFlex";

/**
 * NewsList component that displays a list of news items.
 *
 * @return {JSX.Element} The JSX element representing the NewsList component.
 */
const NewsList = () => {
	return (
		<MainFlex title="News" idName="news" className="md:mb-20">
			<ul className="news-list flex flex-col divide-y divide-gray-300 divide-dashed">
				<li className="news-item py-4">
					<a
						href="#top"
						className="news-link flex flex-col md:flex-row items-baseline rounded"
					>
						<time className="text-base font-dinNarrow w-36">2024.11.15</time>
						<p className="text-base font-notoSans flex-1">
							公式サイトを公開しました！
						</p>
					</a>
				</li>
				<li className="news-item py-4">
					<a
						href="https://x.com/xdcfjp"
						className="news-link flex flex-col md:flex-row items-baseline rounded"
					>
						<time className="text-base font-dinNarrow w-36">2024.10.18</time>
						<p className="text-base font-notoSans flex-1">
							Xの公式アカウントを公開しました。
						</p>
					</a>
				</li>
			</ul>
			{/* <div className="py-4 border-t border-dashed border-gray-300">
				<a
					href="#top"
					className="more-link uppercase font-josefin border rounded-full px-6 border-foreground leading-none hover:bg-foreground hover:text-background transition-all"
				>
					View More
				</a>
			</div> */}
		</MainFlex>
	);
};

export default NewsList;
