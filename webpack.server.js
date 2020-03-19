const path = require('path');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const config = require('./webpack.base');
const serverConfig = {
    mode: "development",
    entry: "./src/server/index.js",
    target: 'node',
    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['isomorphic-style-loader', {
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

module.exports = merge(config, serverConfig);