const webpack = require("webpack");

module.exports = {
    entry: [
        "./src/index.tsx",
    ],

    output: {
        filename: "./dist/bundle.js",
    },

    devtool: "source-map",

    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            { test: /\.js$/, loader: "source-map-loader" },
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ],

    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },

};
