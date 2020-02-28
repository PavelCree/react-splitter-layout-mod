const { resolve } = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: [
    './index.js'
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader']
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'src/stylesheets/*',
        flatten: true
      },
      {
        from: 'src/types/*',
        flatten: true
      }
    ])
  ],
  output: {
    path: resolve(__dirname, 'lib'),
    filename: 'index.js',
    library: 'react-splitter-layout',
    libraryTarget: 'umd'
  },
  externals: {
    react: 'react',
    'prop-types': 'prop-types'
  }
};
