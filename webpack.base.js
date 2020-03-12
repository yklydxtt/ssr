const path = require('path');
module.exports={
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