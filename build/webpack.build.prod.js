const webpack = require('webpack');
const { merge } = require('webpack-merge');
const buildConf = require('./webpack.build');

module.exports = merge(buildConf, {
    mode: 'production',
    plugins: [
        new webpack.DefinePlugin({
            XF_ENV: JSON.stringify('production')
        })
    ]
});
