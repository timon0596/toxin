const path = require('path');
const HWP=require('html-webpack-plugin');
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
		}]
	},
	plugins:[
		new HWP({
			template: './src/index.pug'
		})
	]
}