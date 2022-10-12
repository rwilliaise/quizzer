
const CopyPlugin = require('copy-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin')
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const { webpack } = require('webpack')

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
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
          from: '**/*',
          context: 'public',
          to: path.resolve(__dirname, 'dist')
        },
        {
          from: 'index.html',
          context: 'public',
          to: path.resolve(__dirname, 'dist', '404.html') // neat lil hack to fix react-router on gh pages
        }
      ]
    })
  ],
  optimization: {
    minimize: true,
    concatenateModules: true,
    minimizer: [
      new HtmlMinimizerPlugin(),
      new CssMinimizerPlugin()
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    extensionAlias: {
      '.js': ['.js', '.ts'],
      '.cjs': ['.cjs', '.cts'],
      '.mjs': ['.mjs', '.mts']
    }
  },
  module: {
    rules: [
      { test: /\.([cm]?ts|tsx)$/, loader: 'ts-loader' },
      {
        test: /\.mp3$/,
        use: [
          { loader: 'file-loader' }
        ]
      },
      {
        test: /\.css$/,
        include: path.join(__dirname, 'src'),
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  }
}
