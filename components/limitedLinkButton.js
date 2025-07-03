import { Icon } from "@iconify/react";
import Link from "next/link";

/**
 * A component that renders a <Link> element with a button style if the current time is
 * within a given time range, and a plain text string if outside of the range.
 *
 * @param {string} href - The href attribute of the <Link> element
 * @param {string} className - Additional CSS classes to be applied to the <Link> element
 * @param {Date} openAt - The start time of the range
 * @param {Date} closeAt - The end time of the range
 * @param {boolean} hidden - If true, the component will return null if the current time is
 * outside of the range
 * @param {ReactNode} children - The content of the <Link> element
 *
 * @returns {ReactNode} - The rendered element
 */
const LimitedLinkButton = ({
	href,
	className,
	openAt,
	closeAt,
	hidden = false,
	closedText = "イベント受付期間外です",
	children,
}) => {
	const now = new Date();

	if (now < openAt || now > closeAt) {
		if (hidden) {
			return null;
		}
		return (
			<span
				className={`inline-block text-sand-700 dark:text-sand-400 py-3 ${className}`}
			>
				{closedText}
			</span>
		);
	}
	return (
		<Link
			href={href}
			target="_blank"
			className={`link-btn ${className}`}
			rel="noreferrer"
		>
			{children}
			<Icon icon={"basil:share-box-outline"} />
		</Link>
	);
};

export default LimitedLinkButton;
