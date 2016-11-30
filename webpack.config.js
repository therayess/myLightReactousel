var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new ExtractTextPlugin('css/main.css');
var autoprefixer = require('autoprefixer');
 
var config = {
  context: path.join(__dirname, 'client/js'),
  entry: [
    './BrowserEntry.jsx',
  ],
  output: {
    path: path.join(__dirname, 'client'),
    filename: 'bundle.js',
    publicPath: '/client/'
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel'],
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      },
      { test: /\.scss$/i, 
        loader: extractCSS.extract(['css','sass']) 
      },
      { test: /\.css$/, loader: "style-loader!css-loader!postcss-loader" }
    ],
    postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
  },
  resolveLoader: {
    root: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  resolve: {
    root: [
      path.join(__dirname, 'node_modules'),
    ],
    extensions: ['', '.js', '.jsx', '.json']
  },
  plugins:[
    extractCSS
  ]
};

module.exports = config;
