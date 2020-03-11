const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports={
    mode: "development",
    entry: "./src/index.js",
    target:'node',
    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, "server"),
        filename: "bundle.js"
    },
    module:{
        rules:[{
            test: /\.jsx?$/,
            include: [
                path.resolve(__dirname, "src")
              ],
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-react","@babel/preset-env"]
              },
        }]
    }
}