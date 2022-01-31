const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	plugins: [
		new HtmlWebpackPlugin({
			title: "Main Page",
			template: "./src/templates/about.html",
			filename: "index.html",
		}),
		new HtmlWebpackPlugin({
			title: "Contact Me",
			template: "./src/templates/contact.html",
			filename: "contact.html",
		}),
		new HtmlWebpackPlugin({
			title: "Portfolio",
			template: "./src/templates/portfolio.html",
			filename: "portfolio.html",
		}),
	],
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
		assetModuleFilename: "images/[name][ext]",
		clean: true,
	},
	devtool: "inline-source-map",
	devServer: {
		static: "./dist",
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
		],
	},
	resolve: {
		modules: ["node_modules"],
		alias: {
			src: path.join(__dirname, "./src"),
		},
		extensions: [".js", ".json", ".scss"],
	},
};
