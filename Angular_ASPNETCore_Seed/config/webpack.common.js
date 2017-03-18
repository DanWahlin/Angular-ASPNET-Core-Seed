const webpack = require('webpack'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      path = require('path'),
      rootDir = path.resolve(__dirname, '..');

module.exports = {
  resolve: {
    extensions: ['.ts', '.js'],
    modules: [ path.resolve(rootDir, 'node_modules') ]      
  },
  entry: {
    app: './wwwroot/app/main.ts',
    vendor: './config/vendor.ts',
    polyfills: './config/polyfills.ts'
  },
  module: {
    loaders: [ 
      { test: /\.html$/, loader: 'raw-loader' }, 
      { test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, loader: 'file?name=assets/[name].[hash].[ext]' }, 
      { test: /\.css$/, loaders: ['to-string-loader', 'css-loader'] }
    ]
  },
  plugins: [
    //List of plugins here: https://github.com/webpack/docs/wiki/list-of-plugins
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    //Get settings here: https://github.com/jantimon/html-webpack-plugin
    //If using a .html page then webpack can update the script bundles in it
    //Not using the feature in this particular app though
    //new HtmlWebpackPlugin({
    //  template: './wwwroot/index.webpack-template.html',
    //  filename: '../index.html'
    //})
  ]
};