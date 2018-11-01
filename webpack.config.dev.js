const path = require("path");
const webpack = require("webpack");
const webpackConfig = require("./webpack.config.base");

const webpackConfigDev = {
  ...webpackConfig.baseConfig,
  mode: "development",
  module: {
    rules: [
      webpackConfig.baseLoaders.ts,
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader",
          },
          ...webpackConfig.baseLoaders.scss,
        ],
      },
    ],
  },
  plugins: [
    ...webpackConfig.basePlugins,
    new webpack.HotModuleReplacementPlugin({}),
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: false,
    hot: true,
    https: true,
    noInfo: false,
    proxy: {
      "/artists/*": {
        target: "https://rest.bandsintown.com",
        changeOrigin: true,
      },
    },
  },
};

module.exports = webpackConfigDev;
