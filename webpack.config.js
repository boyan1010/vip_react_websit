const { resolve } = require("path");
const args = require("yargs-parser")(process.argv.slice(2));
console.log("args :>> ", args);
const { merge } = require("webpack-merge");
const _mode = args.mode || "development";
const _customConfig = require(`./config/webpack.${_mode}.config.js`);
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isDevMode = _mode === "development";
console.log("🐻🐻🐻🐻🐻process.env.NODE_ENV :>> ", process.env.NODE_ENV);
const cssLoaders = [
  MiniCssExtractPlugin.loader,
  // isDevMode ? "style-loader" : MiniCssExtractPlugin.loader,
  {
    loader: "css-loader",
  },
  {
    loader: "postcss-loader",
  },
];
const baseConfig = {
  entry: {
    app: resolve("src/index.tsx"),
  },
  output: {
    path: resolve("./dist"),
  },
  module: {
    rules: [
      {
        test: /\.(tsx|jsx|ts|js)/,
        loader: "babel-loader",
        include: [resolve("./src")],
        exclude: /node_modules/,
      },
      {
        test: /\.(css)/,
        use: cssLoaders,
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: isDevMode
        ? "styles/[name].css"
        : "styles/[name].[contenthash:5].css",
    }),
  ],
  // plugins: [].concat(devMode ? [] : [new MiniCssExtractPlugin()]),
};

module.exports = merge(baseConfig, _customConfig);
