/**
 *
 * @Author: Vinson
 * @Date: 2020-08-10 17:12:12
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-03-09 23:34:03
 */

const webpackPublicConfig = require('../../zk-package/conf/webpack.public.config.js');

const path = webpackPublicConfig.path;
const webpack = webpackPublicConfig['webpack'];
const HtmlWebpackPlugin = webpackPublicConfig['html-webpack-plugin'];
const CopyWebpackPlugin = webpackPublicConfig['copy-webpack-plugin'];
const WebpckMerge = webpackPublicConfig['webpack-merge'];

let globalAppConfig = require('./app.config.js');

module.exports = (env, args)=>{

    const webpackConfigObj = webpackPublicConfig.makeWebpackPublicConfig(env, args);

    // entry 入口
    webpackConfigObj.entry = WebpckMerge(webpackConfigObj.entry, {
        sampleApp: path.resolve(__dirname, '../src/app')
    });

    // outout 输出
    webpackConfigObj.output = WebpckMerge(webpackConfigObj.output, {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
        // library: 'zkFramework'
    });

    // externals 扩展 js 包
    webpackConfigObj.externals = WebpckMerge(webpackConfigObj.externals, {
        zkJquery:'jQuery',   // 然后就可以使用，import $ from 'jquery';
        // externalsJs:'externalsJs',
    });

    // 引入项目架包并给其定义一个别名
    webpackConfigObj.resolve.alias = WebpckMerge(webpackConfigObj.resolve.alias, {
        "zkFramework":path.resolve(__dirname, '../../zk-framework')
    })

    webpackConfigObj.module.rules.forEach(item=>{
        if(/\.(js|jsx)?$/.toString() == item.test.toString()){
            item.include.push(path.resolve(__dirname, "../src"));
        }
    })

    /*** 插件 ***/
    webpackConfigObj.plugins.forEach(item=>{
        /*** 插件 全局变量设置 ***/
        if(item instanceof webpack.DefinePlugin){
            // console.log("[^_^:20210217-1501-001] webpack.DefinePlugin:", item);
            // console.log("[^_^:20210217-1501-001] globalAppConfig:", JSON.parse(item.definitions.globalAppConfig));
            item.definitions.globalAppConfig = JSON.stringify(WebpckMerge(webpackPublicConfig.globalAppConfig, globalAppConfig, {
                t1:'t-1', lang:'key_lang', 
            }));
            // "testValue":'测试 webpack 定义全局变量！'; 定义后，可直接使用；
            item.definitions["testValue"] = JSON.stringify('测试 webpack 定义全局变量！');
            item.definitions["testValueObj"] = {"test": JSON.stringify("全局对象")};
        }
        /*** 插件 html 模版 ***/
        if(item instanceof HtmlWebpackPlugin){
            // console.log("[^_^:20210217-1501-002] HtmlWebpackPlugin:", item);
            item.userOptions.template = path.resolve(__dirname, "../public/index.html");
            item.userOptions.chunks.push("sampleApp");
        }
        /*** 插件 拷贝文件 ***/
        if(item instanceof CopyWebpackPlugin){
            // console.log("[^_^:20210217-1501-003] CopyWebpackPlugin:", item);
            // console.log("[^_^:20210217-1501-003] CopyWebpackPlugin-path:", path.resolve(__dirname, '../public/assets'));
            item.patterns.push({
                from: path.resolve(__dirname, '../public/assets'), to: 'assets', force: true, 
                globOptions: { ignore: [".*", "**/.*"] }
            });
        }

    });

    webpackConfigObj.plugins.push(new webpack.SourceMapDevToolPlugin({}));

    return webpackConfigObj;
}