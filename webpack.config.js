var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3001',
    'webpack/hot/only-dev-server',
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname + '/temp-hot-loader',
    filename: '../public/bundle.js',
    publicPath: '/'
  },
  resolve: {
    root: __dirname,
    alias: {
      applicationStyles: 'app/styles/app.scss'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loaders: ['react-hot', 'babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-0'],
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss')
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};