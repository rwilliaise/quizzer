
const CopyPlugin = require('copy-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin')
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  entry: './out/index.js',
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public')
    },
    compress: true,
    port: 8000
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'src/**/*.mp3',
          to ({ absoluteFilename }) {
            const ret = absoluteFilename.match(/src[/\\](?<path>.*)/)
            return path.resolve(__dirname, 'out', ret.groups.path)
          }
        },
        {
          from: '**/*',
          context: 'public',
          to: path.resolve(__dirname, 'dist')
        },
        {
          from: 'index.html',
          context: 'public',
          to: path.resolve(__dirname, 'dist', '404.html') // neat lil hack to fix react-router
        }
      ]
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new HtmlMinimizerPlugin(),
      new CssMinimizerPlugin(),
      new TerserPlugin()
    ]
  },
  module: {
    rules: [
      {
        test: /\.mp3$/,
        use: [
          { loader: 'file-loader' }
        ]
      }
    ]
  }
}
