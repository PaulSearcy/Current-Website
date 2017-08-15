const webpack = require('webpack');
const BabiliPlugin = require('babili-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: [
        "./src/index.jsx",
    ],

    output: {
        filename: "./dist/bundle.js",
    },

    devtool: "source-map",

    resolve: {
        extensions: [".webpack.js", ".web.js", ".js", ".jsx"]
    },

    module: {
        loaders: [
            { test: /\.js$/, loader: "source-map-loader" },
            { test: /\.jsx?$/, loader: "babel-loader" }
        ]
    },

    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },

    plugins: [
        new HtmlWebpackPlugin({
                inject: false,
                template: 'index.ejs',
                appMountId: 'react',
                mobile: true,
                links: [
                    'http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.cs',
                    './stylesheets/bootstrap.min.css',
                    './stylesheets/clean-blog.css'
                ],
                scripts: [
                    'https://unpkg.com/react@15.3.1/dist/react.min.js',
                    'https://unpkg.com/react-dom@15.3.1/dist/react-dom.min.js',
                    './dist/bundle.js'
                ],
                title: 'Paul Searcy Website',
                minify: {
                    collapseWhitespace: true,
                    removeAttributeQuotes: true,
                    removeComments: true,
                    removeScriptTypeAttributes: true
                }
            }),
        new BabiliPlugin()
    ]

};
