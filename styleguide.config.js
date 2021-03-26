const path = require("path");
const propsParser = require("react-docgen-typescript");

module.exports = {
  webpackConfig: {
    entry: "./src/index.ts",
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: "ts-loader"
        }
      ]
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"]
    },
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist")
    }
  },
  propsParser: propsParser.parse,
  sections: [
    {
      name: "Introduction",
      content: "docs/introduction.md"
    },
    {
      name: "Documentation",
      sections: [
        {
          name: "Installation",
          content: "docs/installation.md",
          description: "The description for the installation section"
        }
      ]
    },
    {
      name: "UI Components",
      content: "docs/ui.md",
      components: "src/components/**/*.ts",
      exampleMode: "expand",
      usageMode: "expand"
    }
  ],
  styleguideComponents: {
    Wrapper: path.join(__dirname, "src/ThemeProvider.tsx")
  }
};
