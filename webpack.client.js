const path = require('path');
const merge = require('webpack-merge');
const config = require('./webpack.base');
const clientConfig = {
    mode: "development",
    entry: "./src/client/index.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "index.js"
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', {
                loader: 'css-loader',
                options: {
                    importLoaders: 1,
                    modules: true,
                    localIdentName: '[name]__[local]--[hash:base64:5]',
                }
            }],
            include: [
                path.resolve(__dirname, "src")
            ],
        }]
    }
}
module.exports = merge(config, clientConfig);