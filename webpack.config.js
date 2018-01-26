const path = require("path");

const includePaths = [path.resolve(__dirname, "./src")];

module.exports = {
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true,
    hot: true,
    watchContentBase: true
  },
  entry: ["./src/App.js"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname + "/dist"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: includePaths,
        loader: "babel-loader"
      },
      {
        test: /\.scss?$/,
        include: includePaths,
        loader: [
          "style-loader",
          "css-loader?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]",
          "sass-loader"
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true
            }
          }
        ]
      }
    ]
  }
};
