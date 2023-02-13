const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const yaml = require("yamljs");
const toml = require("toml");
const json5 = require("json5");
const webpack = require("webpack");

const cssRegExp = /\.(css)$/i;
const imageRegExp = /\.(webp|png|svg|gif|jpe?g)$/i;
const jsExtensions = ["*", ".js", ".jsx"];

module.exports = {
  entry: {
    index: "./src/index.js",
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].bundle.js",
    clean: true,
  },

  resolve: {
    extensions: jsExtensions,
  },

  module: {
    rules: [
      {
        test: cssRegExp,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        // the resolve-url-loader should be used between css-loader and sass-loader.
        // it is useful to resolve imported assets not relative to the main entry of scss files.
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "resolve-url-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: imageRegExp,
        type: "asset/resource",
      },
      {
        test: /\.(js|jsx)/,
        exclude: /(node_modules|bower_components)/i,
        loader: "babel-loader",
        options: {
          presets: ["@babel/env"],
        },
      },
      {
        test: /\.toml$/i,
        type: "json",
        parser: {
          parse: toml.parse,
        },
      },
      {
        test: /\.(json|json5)$/i,
        type: "json",
        parser: {
          parse: json5.parse,
        },
      },
      {
        test: /\.yaml$/i,
        type: "json",
        parser: {
          parse: yaml.parse,
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public/index.html"),
    }),
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new MiniCssExtractPlugin(),
  ],

  optimization: {
    minimizer: [new CssMinimizerPlugin()],
    minimize: true,
    splitChunks: {
      chunks: "all", // merge common deps into an entry chunk
    },
  },
};
