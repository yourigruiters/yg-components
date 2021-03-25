import React from "react";
import theme from "./theme/theme";
import { ThemeProvider } from "styled-components";

export default (props) => (
	<ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);
