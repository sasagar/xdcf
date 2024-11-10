/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				mintGreen: {
					50: "#f2fbf8",
					100: "#d2f5e8",
					200: "#a6e9d2",
					300: "#71d7b8",
					400: "#5cc6a9",
					500: "#2aa283",
					600: "#1f826a",
					700: "#1d6857",
					800: "#1b5448",
					900: "#1b463d",
					950: "#0a2923",
				},
				sand: {
					50: "#f9f7ed",
					100: "#efead2",
					200: "#e1d5a7",
					300: "#d0b974",
					400: "#c6a75c",
					500: "#b28c40",
					600: "#997035",
					700: "#7b542d",
					800: "#67462c",
					900: "#593c2a",
					950: "#331f15",
				},
			},
			fontFamily: {
				sans: ["var(--font-geist-sans)"],
				mono: ["var(--font-geist-mono)"],
				josefin: ["josefin-sans", "sans-serif"],
				notoSans: ["source-han-sans-japanese", "sans-serif"],
				din: ["din-2014", "sans-serif"],
				dinNarrow: ["din-2014-narrow", "sans-serif"],
			},
		},
	},
	plugins: [],
};
