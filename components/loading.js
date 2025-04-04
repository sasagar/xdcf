/**
 * Loading component that displays a loading animation with animated bars.
 *
 * @return {JSX.Element} The JSX element representing the Loading component.
 */
const Loading = () => {
	return (
		<div className="loading w-screen h-screen justify-center items-center absolute top-0 left-0 z-100 bg-background">
			<div className="flex justify-center my-20 space-x-2">
				<div className="animate-ping h-4 w-1 bg-sand-600 rounded-full animation-delay-400" />
				<div className="animate-ping h-4 w-1 bg-mint-green-600 rounded-full animation-delay-200" />
				<div className="animate-ping h-4 w-1 bg-gray-600 dark-:bg-gray-400 rounded-full" />
				<div className="animate-ping h-4 w-1 bg-mint-green-600 rounded-full animation-delay-200" />
				<div className="animate-ping h-4 w-1 bg-sand-600 rounded-full animation-delay-400" />
			</div>
		</div>
	);
};

export default Loading;
