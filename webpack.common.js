const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleTracker = require('webpack-bundle-tracker');
const path = require('path')

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve('./dist'),
        publicPath: "/"
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: ['/node_modules'],
                use: [{ loader: 'babel-loader'}],
            },
            {
                test: /\.s?(a|c)ss$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                },{
                    loader: 'sass-loader'
                }]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {},
                  },
                ],
              },

        ]
    },
    plugins: [
        new HtmlWebPackPlugin({template: 'index.html'}),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([{ from: './public/static', to: 'static'}]),
        new BundleTracker({filename: './webpack-stats.json'})
    ],
}
