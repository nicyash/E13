const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        contentBase: './dist',
        hot: true,
        stats:{
            children: false,
            maxModules: 0
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            filename: 'index.html'
        }),
],
    output: {
        filename: 'main.js',
    },
};