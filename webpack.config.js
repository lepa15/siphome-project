const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack')



const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;

module.exports = {
	mode,
	target,
	devtool,
	devServer: {
		port: 3000,
		open: true,
		hot: true,
	},
	entry: ['@babel/polyfill', path.resolve(__dirname, 'src/index.js')],
	output: {
		path: path.resolve(__dirname, 'public'),
		clean: true,
		filename: 'js/index.[contenthash].js',
		assetModuleFilename: 'img/[name][ext]',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'index.html')
		}),
		new MiniCssExtractPlugin({
			filename: 'css/style.[contenthash].css',
		}),
		new webpack.ProvidePlugin({
			'window.$': 'jquery',
			jQuery: 'jquery',
		 }),
	],
	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: 'html-loader',
			},
			{
				test: /\.(c|sa|sc)ss$/i,
				use: [
					devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
				  	"css-loader",
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [require('postcss-preset-env')],
							},
						},
					},
					"sass-loader",
				],
			},
			{
			test: /\.woff2?$/i,
			type: 'asset/resource',
			generator: {
			  filename: 'fonts/[name][ext]',
			},
			},
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
				  loader: 'babel-loader',
				  options: {
					 presets: ['@babel/preset-env']
				  },
				},
			},
		],
	},
}