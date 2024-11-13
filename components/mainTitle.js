const MainTitle = ({ className }) => {
	return (
		<div className={`w-full relative z-10 ${className}`}>
			<svg viewBox="0 0 288 40" className="w-full">
				<title>X DESIGNERS CAREER FES</title>
				<text
					x="0"
					y="30"
					fontSize="30"
					fontFamily="din-2014-narrow"
					fontWeight={600}
					fill="var(--foreground)"
				>
					X DESIGNERS CAREER FES
				</text>
			</svg>
		</div>
	);
};

export default MainTitle;
