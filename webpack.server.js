const path = require('path');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const config=require('./webpack.base');
const serverConfig={
    mode: "development",
    entry: "./src/server/index.js",
    target:'node',
    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname,"build"),
        filename: "bundle.js"
    }
}

module.exports=merge(config,serverConfig);