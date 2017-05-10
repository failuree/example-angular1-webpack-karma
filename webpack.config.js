const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './app/main.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'public/build')
    },
    node: {
        fs: 'empty',
        tls: 'empty',
    },
    devtool: 'source-maps',
    module: {
        rules: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css-loader!sass-loader'),
            },
            {
                test: /\.html/,
                // loader: 'ngtemplate-loader!html-loader',
                loader: 'html-loader',
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin('app.css'),
        // @todo splitting out templates could happen here
    ]
};
