const path = require('path');
const merge = require('webpack-merge');
const config=require('./webpack.base');
const clientConfig={
    mode: "development",
    entry: "./src/client/index.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "index.js"
    }
}

module.exports=merge(config,clientConfig);