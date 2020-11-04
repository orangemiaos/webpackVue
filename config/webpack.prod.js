const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'production',
    plugins: [
        // webpack 自动配置
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': ‘production’
        // })
    ],
    output: {
        // name是文件名
        // chunk就模块，chunkhash也就是根据模块内容计算出的hash值
        // hash是编译对象计算所得，而不是具体的项目文件计算所得。以上配置的编译输出文件，所有的文件名都会使用相同的hash指纹。
        // 如果有三个js文件，任何一个改动都会影响另外两个文件的最终文件名。上线后，另外两个文件的浏览器缓存也全部失效，所以尽量使用chunkhash
        filename: '[name].[chunkhash].js'
    },
})