const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
      children: false
    },
    plugins: [
      new MiniCssExtractPlugin()
    ],
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
              'css-loader'] }
        ]
    }
}