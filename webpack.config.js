const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  module: {
    rules: [
		{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: {
				loader: "babel-loader"
			}
		},
		{
			test: /\.html$/,
			use: [
				{
					loader: "html-loader"
				}
			]
		},
		{
			test: /\.css$/i,
			use: ['style-loader', 'css-loader'],
		},
		{
			test: /\.svg$/,
			loader: 'svg-inline-loader'
		},
		{
			test: /\.(png|jpe?g|gif)$/i,
			use: [
				{
					loader: 'file-loader',
				},
			],
		}
    ]
  },
  entry: {
	content: './public/content.js'
  },
  plugins: [
	new CopyPlugin([
		{ from: './public', to: './' }
	]),
	new HtmlWebPackPlugin({
		template: "./public/index.html",
		filename: "./index.html"
	})
  ]
};