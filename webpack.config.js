const path = require('path');
const HWP=require('html-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
module.exports={
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname,'dist')
	},
	module:{
		rules: [{
			test:/\.pug$/,
			loader: 'pug-loader',
			options: {pretty: true}
		},{
			test:/\.js$/,
			loader: 'babel-loader',
			exclude:'/node_modules/'
		},{
			test:/\.sass$/,
			use:[
				"style-loader",
				"css-loader",
				"sass-loader"
				]
		},{
			test:/\.css$/,
			use:[
				"style-loader",
				"css-loader",
				]
		},
		{
         test: /\.(woff|svg|ttf)$/,
         exclude: '/node_modules/',
         use: [
         	'file-loader'
         ]         
       },
        {
          test: /\.(png|svg|jpg|gif)$/,
          exclude: '/node_modules/',
          loader: 'file-loader',
          include: path.join(__dirname,'src')
        }]
	},
	plugins:[
		new HWP({
			template: './src/index.pug',
			filename: 'index.html'
		}),
		new HWP({
			template: './src/cards/cards.pug',
			filename: 'cards.html'
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery'
		}),
		new HtmlWebpackPugPlugin()
	]
}