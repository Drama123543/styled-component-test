const path = require('path')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: `[name].js`,
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'source-map',
  recordsPath: path.resolve(__dirname, 'dist/records.json'),
  optimization: {
    sideEffects: true, // for test set true, in development mode default false, in production mode default true
    usedExports: false, // for test set true, in development mode default false, in production mode default true
  },
  stats: {
    // Display bailout reasons
    // optimizationBailout: true,
  },
  resolve: {
    extensions: ['.jsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new HtmlWebpackPlugin({
      template: './src/template.html'
    }),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: 'static',
    })
  ]
};
