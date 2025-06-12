const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  entry: {
    main: './src/index.js',
    clock: './src/js/clock.js'
  },
  output: {
    filename: '[name].bundle.js',
    assetModuleFilename: 'assets/images/[name][hash][ext][query]',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  devServer: {
    static: './dist',
    open: true,
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    }),
    new HtmlWebpackPlugin({
      filename: 'clock.html',
      template: './public/clock.html',
      chunks: ['clock']
    }),
    new webpack.ProgressPlugin()
  ],

  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        type: 'asset/resource'
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  mode: 'development'
};
