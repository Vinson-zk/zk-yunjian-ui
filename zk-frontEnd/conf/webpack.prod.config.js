/*
 * @Author: Vinson 
 * @Date: 2020-08-07 09:32:40 
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-07-03 00:36:07
 */

const webpackPublicConfig = require('../../zk-package/conf/webpack.public.config.js');

const path = webpackPublicConfig.path;
const WebpckMerge = webpackPublicConfig['webpack-merge'];
// const MinifyPlugin = webpackPublicConfig['babel-minify-webpack-plugin'];
const CleanWebpackPlugin = webpackPublicConfig['clean-webpack-plugin'];

const baseWebpackConfig = require('./webpack.base.config');

module.exports = WebpckMerge(baseWebpackConfig(null, null), {
    mode:"production",
    optimization: {
        minimize: true, // 在 production 中定义
    },
    plugins: [
    	// 编译前清理相关目录
    	new CleanWebpackPlugin([
    		path.resolve(__dirname, '../dist'),
    	]),
        // new uglifyjs(), //压缩js
    ]
});
