import React, { useState } from "react";
import { globalTheme, GlobalThemes } from "./theme";
import { ThemeProvider } from "@emotion/react";

export default (props) => {
  const [theme, setTheme] = useState<GlobalThemes>("light");

  console.log(setTheme);

  return (
    <ThemeProvider theme={globalTheme[theme]}>{props.children}</ThemeProvider>
  );
};
