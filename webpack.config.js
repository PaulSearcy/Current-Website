const webpack = require('webpack');

module.exports = {
    entry: [
        "./src/index.tsx",
    ],

    output: {
        filename: "./dist/bundle.js",
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add ".ts" and ".tsx" as resolvable extensions.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            { test: /\.js$/, loader: "source-map-loader" },
            { test: /\.tsx?$/, loader: "ts-loader" },
        ]
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ],

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // INFO: Disabled for size and hot-reloading reasons.
    /*
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    */
};
