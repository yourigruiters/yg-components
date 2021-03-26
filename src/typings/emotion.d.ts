import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    fonts: {
      base: string;
      heading: string;
    };
    fontSizes: {
      small: string;
      medium: string;
      large: string;
    };
    fontWeights: {
      normal: number;
      bold: number;
    };
    colors: {
      bg: string;
      base: string;
      primary: string;
      secondary: string;
      light: string;
      lighter: string;
      hover: string;
      focus: string;
      error: string;
      rating: string;
    };
  }
}
