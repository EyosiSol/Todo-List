const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    mode: "development",
    entry: {
      index: "./src/index.js",
    },
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist"),
      clean:true,
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use: ["style-loader","css-loader"],
              },
              {
                test: /\.(png|jpe?g|gif|svg|gif)$/i,       
                type: "asset/resource", 
              },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: "Focus",
          filename: "index.html",
          template: "src/index.html",
        }),
      ],
}