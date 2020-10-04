const webpack = require("webpack");
const path = require("path");

const config = {
  entry: ["./src/index.tsx"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: "development",
  devtool: "cheap-source-map",
  // devServer: {
  //   publicPath: "/",
  //   contentBase: path.join(__dirname, "dist"),
  //   port: 8080,
  //   historyApiFallback: { index: "index.html" },
  //   compress: true,
  // },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.ts(x)?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".tsx", ".ts"],
    alias: {
      components: path.resolve(__dirname, "src/components"),
      store: path.resolve(__dirname, "src/store"),
      hooks: path.resolve(__dirname, "src/hooks"),
      api: path.resolve(__dirname, "src/api"),
      utils: path.resolve(__dirname, "src/utils"),
      "~": path.resolve(__dirname, "src"),
    },
  },
};

module.exports = config;
