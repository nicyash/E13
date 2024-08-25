const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        static: './',
        hot: true,
        open: true,
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            template: 'index.html',
            filename: 'index.html'
        }),
    ],
    output: {
        filename: 'main.js',
    },
};