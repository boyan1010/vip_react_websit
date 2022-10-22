const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
module.exports = {
  mode: "production",
  output: {
    assetModuleFilename: "images/[name].[cotenthash:5].bundle.[ext]",
    filename: "scripts/[name].[contenthash:5].bundle.js",
    publicPath: "/assets",
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
    runtimeChunk: {
      name: "runtime",
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "prod模式",
      filename: "index.html",
      template: resolve(__dirname, "../src/index-prod.html"),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
  ],
};
