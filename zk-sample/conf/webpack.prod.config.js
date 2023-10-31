/*
 * @Author: Vinson 
 * @Date: 2020-08-07 09:32:40 
 * @Last Modified by: vinson
 * @Last Modified time: 2023-08-28 22:09:27
 */

const packageWebpack = require('../../zk-package/conf/webpack.package.config.js');
const packagePath = packageWebpack.packagePath;
const webpack = packageWebpack.webpack;
const WebpckMerge = packageWebpack.WebpckMerge;

let globalAppConfig = require('./app.config.js');
// const baseWebpackConfig = require('./webpack.base.config');

module.exports = (env, args, isDev=false) => {
    let packageWebpackConfig = packageWebpack.makePackageWebpackConfig(env, args, isDev);

    let webpackConfig = packageWebpackConfig.packageWebpackConfig;
    webpackConfig.mode = 'production';
    // entry 入口
    webpackConfig.entry['sampleApp'] = packagePath.resolve(__dirname, '../src/app');
    // outout 输出
    webpackConfig.output['path'] = packagePath.resolve(__dirname, '../dist');
    webpackConfig.output['filename'] = '[name].js';

    // externals 扩展 js 包
    webpackConfig.externals['zkJquery'] = 'jQuery'; // 然后就可以使用，import $ from 'jquery';

    // 引入项目架包并给其定义一个别名
    webpackConfig.resolve.alias['zkFramework'] = packagePath.resolve("", '../zk-framework');

    /*** rules ***/
    // 添加需要编译的目录
    packageWebpackConfig.packageDefaultRules.babel_loader.include.push(packagePath.resolve(__dirname, "../src"));
    packageWebpackConfig.packageDefaultRules.babel_loader.include.push(packagePath.resolve(__dirname, "../../zk-framework"));
    webpackConfig.module.rules.push(packageWebpackConfig.packageDefaultRules.babel_loader);
    webpackConfig.module.rules.push(packageWebpackConfig.packageDefaultRules.url_loader);
    webpackConfig.module.rules.push(packageWebpackConfig.packageDefaultRules.css_less_loader);
    webpackConfig.module.rules.push(packageWebpackConfig.packageDefaultRules.css_less_loader_node_modules);


    /*** 插件 ***/
    // plugin 插件 全局变量设置
    let tempPluginObj = packageWebpackConfig.packageDefaultPlugins.DefinePlugin;
    tempPluginObj.definitions['globalAppConfig'] = JSON.stringify(WebpckMerge.merge(packageWebpack.globalAppConfig, globalAppConfig, {
        t1:'t-1', lang:'key_lang', 
    }));
    // "testValue":'测试 webpack 定义全局变量！'; 定义后，可直接使用；
    tempPluginObj.definitions["testValue"] = JSON.stringify('测试 webpack 定义全局变量！');
    tempPluginObj.definitions["testValueObj"] = {"test": JSON.stringify("全局对象")};
    webpackConfig.plugins.push(tempPluginObj);
    // plugin 插件 拷贝文件
    tempPluginObj = packageWebpackConfig.packageDefaultPlugins.CopyWebpackPlugin;
    tempPluginObj.patterns.push({
        from: packagePath.resolve(__dirname, '../public/assets'), to: 'assets', force: true, globOptions: { ignore: [".*", "**/.*"] }
    });
    webpackConfig.plugins.push(tempPluginObj);
    // plugin 插件 html 模版
    tempPluginObj = packageWebpackConfig.packageDefaultPlugins.HtmlWebpackPlugin;
    tempPluginObj.userOptions.template = packagePath.resolve(__dirname, '../public/index.html');
    webpackConfig.plugins.push(tempPluginObj);
    // plugin 插件 清理
    tempPluginObj = packageWebpackConfig.packageDefaultPlugins.CleanWebpackPlugin;
    webpackConfig.plugins.push(tempPluginObj);
    // plugin 插件 css 抽离
    tempPluginObj = packageWebpackConfig.packageDefaultPlugins.MiniCssExtractWebpackPlugin;
    webpackConfig.plugins.push(tempPluginObj);

    return webpackConfig;
};
