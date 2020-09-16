const webpack = require('webpack');
const webpackCommonConf = require('./webpack.common');
const { merge } = require('webpack-merge');
const { distPath } = require('./paths');

module.exports = merge(webpackCommonConf, {
    mode: 'development',
    module: {
        rules: [
            // 抽离 css
            {
                test: /\.css$/,
                loader: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/,
                loader: [
                    'style-loader',
                    'css-loader',
                    'less-loader',
                    'postcss-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            XF_ENV: JSON.stringify('development')
        })
    ],
    devServer: {
        port: 9090,
        progress: true, // 显示打包的进度条
        contentBase: distPath, // 根目录
        open: true, // 自动打开浏览器
        compress: true // 启动 gzip 压缩
    }
});
