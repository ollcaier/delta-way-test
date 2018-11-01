const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseConfig = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "script.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".scss"],
  },
  externals: "node_modules",
};

const baseLoaders = {
  ts: {
    test: /\.tsx?$/,
    loader: "ts-loader",
  },
  scss: [
    {
      loader: "css-loader",
      query: {
        modules: true,
        sourceMap: true,
        localIdentName: "[local]",
      },
    },
    {
      loader: "sass-loader",
      options: {
        sourceMap: true,
      },
    },
  ],
};

const basePlugins = [
  new HtmlWebpackPlugin({
    template: "./src/index.html",
  }),
];

const webpackConfig = {
  baseConfig,
  baseLoaders,
  basePlugins,
};

module.exports = webpackConfig;
