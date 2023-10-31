/*
 * @Author: Vinson 
 * @Date: 2020-08-06 17:23:52 
 * @Last Modified by: vinson
 * @Last Modified time: 2023-08-28 22:10:55
 */

const packageWebpack = require('../../zk-package/conf/webpack.package.config.js');

const packagePath = packageWebpack.packagePath;
const webpack = packageWebpack.webpack;
// const WebpckMerge = packageWebpack.WebpckMerge;
const MockerApi = packageWebpack.MockerApi;

const proxyConfig = require('./proxy.config.js'); 

let globalAppConfig = require('./app.config.js');
let openPage = globalAppConfig.basename ? globalAppConfig.basename + "/" : "/"; // 默认打开路径，默认值为 

let prodWebpackConfig = require('./webpack.prod.config.js');

module.exports = (env, args) => {
    let webpackConfig = prodWebpackConfig(env, args, true);

    webpackConfig.mode = "development";
    webpackConfig.optimization.minimize = false;
    // plugin 插件 源文件映射
    webpackConfig.plugins.push(new packageWebpack.pluginsClass.SourceMapDevToolPlugin());

    webpackConfig.devServer = {
        static: {
          directory: packagePath.resolve(__dirname, '../dist'),
          // publicPath: '/',
        },
        host: '0.0.0.0',
        port: 11114,
        // open: [openPage], // true, 打开的断裂面
        hot: true,
        compress: true,
        historyApiFallback: true, // 在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        proxy:proxyConfig,      // 代理设置
        onBeforeSetupMiddleware: (devServer)=>{
            if(!devServer){
                console.err("[>_<:20230823-1427-001] webpack-dev-server is not defined");
                throw new Error("[>_<:20230823-1427-001] webpack-dev-server is not defined");
            }
            // mock 数据配置
            MockerApi(devServer.app, packagePath.resolve(__dirname, '../mock/mock.config.js'), {});
        }
    };
    return webpackConfig;
};





