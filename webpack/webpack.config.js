const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        filename: 'main.js'
    },
    devServer: {
      static: './dist',
      port: 3001,
      hot: true,
      // open: true,
    },
    devtool: 'inline-source-map',
    stats: {
      children: true
    },
    plugins: [      
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.pug',
        minify: false,
        title: 'Development'}),
      new TerserWebpackPlugin(),
      new CssMinimizerWebpackPlugin(),
      new ESLintPlugin(),
    ],
    optimization: {
      minimize: false,
      minimizer: [
        new TerserWebpackPlugin(), 
        new CssMinimizerWebpackPlugin(),
      ]
    },
    module: {
        rules: [
          { test: /\.css$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  esModule: true,
                },
              }, 
              'css-loader'] },
          {
            test: /\.pug$/,
            use: 'pug-loader',
          },
        ]
    }
};