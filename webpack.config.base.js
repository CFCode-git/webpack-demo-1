const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "XDML - 写代码啦",
            template: "src/assets/template.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.styl$/,
                loader: ['style-loader', 'css-loader', 'stylus-loader'] // 将 stylus => CSS代码 => CSS的js字符串 => style标签
            },
            {
                test: /\.less$/,
                loader: ['style-loader', 'css-loader', 'less-loader'] // 将 Less => CSS代码 => CSS的js字符串 => style标签
            },
            {
                test: /\.scss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('dart-sass'),
                        },
                    },
                ],
            },
        ],
    },
};









