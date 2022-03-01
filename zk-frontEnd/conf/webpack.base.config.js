/**
 *
 * @Author: Vinson
 * @Date: 2020-08-10 17:12:12
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-01-09 10:14:27
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
        zkApp: path.resolve(__dirname, '../src/app')
    });

    // outout 输出
    webpackConfigObj.output = WebpckMerge(webpackConfigObj.output, {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
        // library: 'zkFramework'
    });

    // externals 扩展 js 包
    webpackConfigObj.externals = WebpckMerge(webpackConfigObj.externals, {
        zkJquery:'jQuery',   // 然后就可以使用，import $ from 'zkJquery'; 需要在 index.html 中引入 jquery js;
        // externalsJs:'externalsJs',
    });

    // 引入项目架包并给其定义一个别名
    webpackConfigObj.resolve.alias = WebpckMerge(webpackConfigObj.resolve.alias, {
        "zkFramework":path.resolve(__dirname, '../../zk-framework'),
        "zkSample":path.resolve(__dirname, '../../zk-sample'),
        "zkSystem":path.resolve(__dirname, '../../zk-system'),
        "zkDevelopmentTool":path.resolve(__dirname, '../../zk-developmentTool'),
        "zkWechat":path.resolve(__dirname, '../../zk-wechat'),
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
            item.definitions.globalAppConfig = JSON.stringify(WebpckMerge(webpackPublicConfig.globalAppConfig, globalAppConfig));
        }
        /*** 插件 html 模版 ***/
        if(item instanceof HtmlWebpackPlugin){
            item.userOptions.template = path.resolve(__dirname, "../public/index.html");
            item.userOptions.chunks.push("zkApp");
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
    })

    return webpackConfigObj;
}