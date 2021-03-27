export type GlobalThemes = "light" | "dark";

const defaultTheme = {
	fonts: {
		base: "Helvetica Neue, Helvetica, Arial, sans-serif",
		heading: "Helvetica Neue, Helvetica, Arial, sans-serif",
	},
	fontSizes: {
		small: "12px",
		medium: "16px",
		large: "20px",
	},
	fontWeights: {
		normal: 400,
		bold: 700,
	},
};

const globalTheme = {
	light: {
		...defaultTheme,
		colors: {
			bg: "#fff",
			base: "#333",
			primary: "#8667a8",
			secondary: "#767676",
			light: "#ccc",
			lighter: "#efefef",
			hover: "#ed9dc5",
			focus: "#ed9dc5",
			error: "#d0453e",
			rating: "#f8c124",
		},
	},
	dark: {
		...defaultTheme,
		colors: {
			bg: "#fff",
			base: "#8667a8",
			primary: "#333",
			secondary: "#767676",
			light: "#ccc",
			lighter: "#efefef",
			hover: "#ed9dc5",
			focus: "#ed9dc5",
			error: "#d0453e",
			rating: "#f8c124",
		},
	},
};

export default globalTheme;
