/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx}"],
	theme: {
		extend: {
			fontFamily: {
				main: ["Montserrat", "sans-serif"],
				second: ["Inter", "sans-serif"],
				logoText: ["Public Sans", "sans-serif"],
				navbarText: ["Manrope", "sans-serif"],
			},

			colors: {
				background: "#F5F5F9",
				mainBlue: "#6E90AD",
				textInput: "#F5F5F5",
				textGrey: "#666666",
				textGreyLight: "#999999",
				navbarTextCol: "#000000",
				navbarTextWhite: "#FCFCFC",
				navbarLogoText: "#566A7F",
				white: "#FFFFFF",
				navbarBgCol: "#F6F7FC",
				tableTitleBg: "#F9F8F9",
				tableTitleBorder: "#EAEAEA",
				TextTitle: "#385C86",
				btnBlue: "#385C86",
			},
		},
	},
	plugins: [],
};