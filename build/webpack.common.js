const path = require('path');
const { srcPath, distPath } = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: path.join(srcPath, '/index.ts')
    },
    output: {
        path: distPath,
        // filename: '[name].[contentHash:8].js'
        filename: '[name].js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    { loader: 'babel-loader' },
                    { loader: 'ts-loader' },
                    {
                        options: {
                            formatter: require.resolve('eslint-friendly-formatter'),
                            resolvePluginsRelativeTo: __dirname
                        },
                        loader: 'eslint-loader'
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        // 多入口 - 生成 index.html
        new HtmlWebpackPlugin({
            template: path.join(srcPath, '../', 'index.html'),
            filename: 'index.html',
            // chunks 表示该页面要引用哪些 chunk （即上面的 index 和 other），默认全部引用
            chunks: ['index'] // 要考虑代码分割
        })
    ],
    resolve: {
        extensions: ['.ts', '.js'],
        alias: {
            '@': path.resolve(__dirname, '../src')
        }
    }
};
