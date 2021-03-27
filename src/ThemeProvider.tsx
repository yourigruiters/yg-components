import React, { useState } from "react";
import { globalTheme, GlobalThemes } from "./theme";
import { ThemeProvider } from "@emotion/react";

const Theme = (props) => {
	const [theme, setTheme] = useState<GlobalThemes>("light");

	const handleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
	};

	return (
		<ThemeProvider theme={globalTheme[theme]}>
			<button onClick={handleTheme}>Toggle</button>
			{props.children}
		</ThemeProvider>
	);
};

export default Theme;
