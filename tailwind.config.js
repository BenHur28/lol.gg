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
				nav: "#070720",
				side: "#0D0D28",
				sideItem: "#5C5C8E",
				border: "#0d0d28",
				divider: "#191937",
				champBG: "#17172E",
				champBorder: "#2C2C40",
				champH2: "#CDDCFE",
			},
			gridTemplateColumns: {
				16: "repeat(16, minmax(0,1fr))",
				20: "repeat(20, minmax(0,1fr))",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
