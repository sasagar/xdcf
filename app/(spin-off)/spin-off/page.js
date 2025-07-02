import { redirect } from "next/navigation";

/**
 * Redirects to the latest spin-off page.
 *
 * @remarks
 * The latest spin-off directory is set to "01" for now.
 *
 * @returns {void}
 */
const SpinOffPage = () => {
	// set the latest spin-off directory
	const latestSpinOff = "01";

	redirect(`/spin-off/${latestSpinOff}`);
};

export default SpinOffPage;
