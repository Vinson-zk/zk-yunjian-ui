/*
 * @Author: Vinson 
 * @Date: 2020-08-07 09:32:40 
 * @Last Modified by: Vinson
 * @Last Modified time: 2021-02-17 20:51:12
 */

const webpackPublicConfig = require('../../zk-package/conf/webpack.public.config.js');

const path = webpackPublicConfig.path;
const WebpckMerge = webpackPublicConfig['webpack-merge'];
const CleanWebpackPlugin = webpackPublicConfig['clean-webpack-plugin'];

const baseWebpackConfig = require('./webpack.base.config');

module.exports = WebpckMerge(baseWebpackConfig(null, null), {
    mode:"production",
    plugins: [
    	// 编译前清理相关目录
    	new CleanWebpackPlugin([
    		path.resolve(__dirname, '../dist'),
    	]),
        // new uglifyjs(), //压缩js
    ]
});
