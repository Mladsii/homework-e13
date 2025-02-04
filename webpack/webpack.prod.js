const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'production',
    output: {
        filename: 'main.js'
    },
    devServer: {
      static: './dist',
      port: 3001,
      hot: false,
    },
    devtool: 'inline-source-map',
    stats: {
      children: true
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