const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = merge(common, {
    mode: 'development',
    // 打包源代码的时候，追踪代码位置，从打包文件追踪到源文件中
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3000,
        open: true
    },
    plugins: [
        // webpack 自动配置
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': 'development',
        // }),
        new webpack.DefinePlugin({
            'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
        })
    ],
    output: {
        // name是文件名
        // chunk就模块，chunkhash也就是根据模块内容计算出的hash值
        // hash是编译对象计算所得，而不是具体的项目文件计算所得。以上配置的编译输出文件，所有的文件名都会使用相同的hash指纹。
        // 如果有三个js文件，任何一个改动都会影响另外两个文件的最终文件名。上线后，另外两个文件的浏览器缓存也全部失效，所以尽量使用chunkhash
        filename: '[name].dev.js',
        publicPath: ASSET_PATH
    },
    resolve: {
        extensions: ['.js', '.css', '.vue']
    }
})