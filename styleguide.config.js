const path = require("path");

module.exports = {
	webpackConfig: {
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: "babel-loader",
				},
			],
		},
	},
	sections: [
		{
			name: "Introduction",
			content: "docs/introduction.md",
		},
		{
			name: "Documentation",
			sections: [
				{
					name: "Installation",
					content: "docs/installation.md",
					description: "The description for the installation section",
				},
			],
		},
		{
			name: "UI Components",
			content: "docs/ui.md",
			components: "src/components/*/*.jsx",
			exampleMode: "expand",
			usageMode: "expand",
		},
	],
	styleguideComponents: {
		Wrapper: path.join(__dirname, "src/ThemeProvider.js"),
	},
};
