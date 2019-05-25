const path = require('path');
const HWP=require('html-webpack-plugin');
const webpack = require('webpack');
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
          use: [
            'file-loader'
          ]
        }]
	},
	plugins:[
		new HWP({
			template: './src/index.pug'
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery'
		})
	]
}