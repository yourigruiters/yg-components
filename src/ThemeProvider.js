import React, { useState } from "react";
import theme from "./theme/theme";
import { ThemeProvider } from "styled-components";

export default (props) => {
	const [themeMode, setThemeMode] = useState("light");

	const handleThemeMode = () => {
		setThemeMode("dark");
	};

	console.log(handleThemeMode);

	return (
		<ThemeProvider theme={theme[themeMode]}>{props.children}</ThemeProvider>
	);
};
