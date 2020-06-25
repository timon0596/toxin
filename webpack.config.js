const path = require('path');
const HWP=require('html-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const MiniCssExtractPlugin=require('mini-css-extract-plugin')
const autoprefixer = require('autoprefixer')
const fs = require('fs')
// const autoprefixer = require('autoprefixer');
function generateHtmlPlugins (templateDir) {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir))
  return templateFiles.map(item => {
    // Split names and extension
    const parts = item.split('.')
    const name = parts[0]
    const extension = parts[1]
    return new HWP({
      filename: `${name}.html`,
      template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`)
    })
  })
}

// We will call the function like this:
const htmlPlugins = generateHtmlPlugins('./src/pages')
module.exports={
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname,'dist')
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all'
				}
			}
		}
	},
	module:{
		rules: [
		{
			test:/\.pug$/,
			loader: 'pug-loader',
			options: {pretty: true}
		},
		{
			test:/\.js$/,
			loader: 'babel-loader',
			exclude:'/node_modules/'},
			//{
		// 	test:/\.(sass)$/,
		// 	use:[
		// 		"style-loader",
		// 		"css-loader",
		// 		{
  //                   loader: 'postcss-loader',
  //                   options: {
  //                       plugins: [
  //                           autoprefixer()
  //                       ]
  //                   }
  //               },
		// 		"sass-loader"
		// 		]
		// },
		{
		    test: /\.(scss|sass)$/,
		        use: [
		        	MiniCssExtractPlugin.loader, 
		        	{
		    			loader: 'css-loader',
		    			options: {
		    				sourceMap: true
		    			}
		    		},
		    		{
		    			loader: 'postcss-loader',
		    			options: {
		    				plugins: [
		    				autoprefixer()
		    				],
		    				sourceMap: true
		    			}
		    		},
		    		{
		    			loader: 'sass-loader',
		    			options: { sourceMap: true }
		    		}
		    	]
  	},
  {
			test:/\.css$/,
			use:[
				"style-loader",
				"css-loader"
				]
		},
		{
         test: /\.(woff|svg|ttf|eot|woff2)$/,
         exclude: [path.resolve(__dirname, "src/img"),path.resolve(__dirname, "node_modules")],
         use: [
         	'file-loader',
         ]         
       },{
		  test: /\d{1,3}\.image\d{1}\.(jpg|png)$/,
		  exclude: [path.resolve(__dirname, "src/img/roomdetails")],
		  use:[ {
		    loader: "file-loader",
		    options: {
		      name: "[name].[ext]",
		      outputPath: './img/roompreviewPics/',
		      useRelativePath: true
		  }}],
  },{
		  test: /[123]\.(jpg|png)/,
		  exclude: [path.resolve(__dirname, "src/img/roompreview")],
		  use:[ {
		    loader: "file-loader",
		    options: {
		      name: "[name].[ext]",
		      outputPath: './img/roomDetailsPics/',
		      useRelativePath: true
		  }}],
  },{
		  test: /usericon\.(jpg|png|svg)$/,
		  exclude: [path.resolve(__dirname, "src/img/roompreview"),path.resolve(__dirname, "src/img/roomdetails")],
		  use:[ {
		    loader: "file-loader",
		    options: {
		      name: "[name].[ext]",
		      outputPath: './img/reviewusericons/',
		      useRelativePath: true
		  }}],
  },
       {
		  test: /\.(jpg|png|svg)$/,
		  exclude: [path.resolve(__dirname, "src/img/roompreview"),path.resolve(__dirname, "src/fonts"),path.resolve(__dirname, "src/img/roomdetails"),path.resolve(__dirname, "src/img/reviewIcons")],
		  use:[ {
		    loader: "file-loader",
		    options: {
		      name: "[name].[ext]",
		      outputPath: './img/',
		      useRelativePath: true
		  }}],
  },]
	},
	plugins:[
		
		new HWP({
			template: './src/index.pug',
			filename: 'index.html'
		}),
		...htmlPlugins,
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery'
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[hash].css',
		}),
		new HtmlWebpackPugPlugin()


	]
}