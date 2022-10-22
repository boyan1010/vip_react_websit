const { resolve, join } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  output: {
    assetModuleFilename: "images/[name].[ext]",
    filename: "scripts/[name].bundle.js",
  },
  devServer: {
    port: 8002,
    static: join(__dirname, "../dist"),
    open: true,
    historyApiFallback: true,
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      title: "dev模式",
      filename: "index.html",
      template: resolve(__dirname, "../src/index-dev.html"),
    }),
  ],
};
