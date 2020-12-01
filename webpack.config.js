const path = require('path');
const HWP = require('html-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const fs = require('fs');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

function generateHtmlPlugins(templateDir) {
  const tpldirpath = path.resolve(__dirname, templateDir);
  const templateFiles = fs.readdirSync(tpldirpath);
  return templateFiles
    .map((item) => {
      if (item !== 'templates') {
        const pugFile = fs
          .readdirSync(path.resolve(tpldirpath, item))
          .filter((file) => file.match(/.pug$/))[0];
        const parts = pugFile.split('.');
        const name = parts[0];
        const extension = parts[1];
        return new HWP({
          filename: name === 'index' ? `${name}.html` : `pages/${name}.html`,
          template: path.resolve(
            __dirname,
            `${path.resolve(tpldirpath, item)}/${name}.${extension}`,
          ),
        });
      }
      return 0;
    })
    .filter((item) => !!item);
}
const htmlPlugins = generateHtmlPlugins('./src/pages');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': path.resolve(__dirname, 'src/ui-kit/'),
    },
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: { pretty: true },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.(scss|sass)$/,
        use: [

          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => `${path.relative(path.dirname(resourcePath), context)}/`,
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer()],
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?$)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        exclude: [path.resolve(__dirname, 'src/img')],
        options: {
          outputPath: (url) => `fonts/${url}`,
          useRelativePath: true,
        },
      },
      {
        test: /\.(jpe?g|png|svg)$/,
        exclude: [path.resolve(__dirname, 'src/fonts')],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: (url, resourcePath) => {
                if (/preview/.test(resourcePath)) {
                  return `img/preview/${url}`;
                }
                if (/users/.test(resourcePath)) {
                  return `img/users/${url}`;
                }
                if (/favicons/.test(resourcePath)) {
                  return `${url}`;
                }
                return `img/${url}`;
              },
              useRelativePath: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    ...htmlPlugins,
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',

    }),
    new HtmlWebpackPugPlugin(),
  ],
};
