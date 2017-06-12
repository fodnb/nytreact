var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require('webpack');

module.exports = {
    entry: "./app/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		publicPath: '/'
    },
module: {
    loaders: [
      {
        // Only working with files that in in a .js or .jsx extension
        test: /\.jsx?$/,	
        // Webpack will only process files in our app folder. This avoids processing
        // node modules and server files unnecessarily
        include: /app/,
        loader: "babel-loader",
        query: {
          // These are the specific transformations we'll be using.
          presets: ["react", "env"]
        }
      }
    ]
  },

    devServer: {
        historyApiFallback: true,
    },
    devtool: "eval-source-map",
    plugins: [new HtmlWebpackPlugin({
        template: "public/index.html"
    })]
}

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new webpack.optimize.UglifyJsPlugin()
    )
}
