const HTMLWebPack = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');

const CssMinimizer = require('css-minimizer-webpack-plugin');
const Terser = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',
    output:{
		clean:true,
        filename: 'main.[contenthash].js'
	},
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false,
                    minimize: false,
                },
            },
            {
                test: /\.css$/i,
                exclude: /styles\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.scss$/i,
                use: ["style-loader", "css-loader","sass-loader"],
            },
            {
                test: /styles\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
				test: /\.(png|jpg|gif|svg)$/,
				use: [
				{
					loader: 'file-loader',
				}
				],
			},
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env'],
                    plugins: [
                        ["@babel/transform-runtime"]
                    ]
                  }
                }
              },
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizer(),
            new Terser()
        ]
    },
    plugins:[
        new HTMLWebPack({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
			filename: '[name].[fullhash].css',
			ignoreOrder: false
		}),
        new CopyPlugin({
		    patterns: [
		    { from: 'src/assets', to: 'assets/' },
			],
		}),
    ]
}