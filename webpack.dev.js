const  merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        host: 'localhost',
        port: 3000,
        open: true,
        historyApiFallback: true,
        publicPath: "/",
        proxy: {
            '/api': {
                target: "http://localhost:8000",
                secure: false,
            },
            '/media': {
                target: "http://localhost:8000",
                secure: false,
            },
            '/rest-auth/': {
                target: "http://localhost:8000",
                secure: false,
            },
            '/accounts/': {
                target: "http://localhost:8000",
                secure: false,
            }
        }
    }
})