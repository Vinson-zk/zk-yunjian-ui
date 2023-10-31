/*
 * @Author: Vinson 
 * @Date: 2020-08-06 17:23:52 
 * @Last Modified by: vinson
 * @Last Modified time: 2023-08-28 11:14:28
 */

const path = require('path');
const webpack = require('webpack')
// const WebpckMerge = require('webpack-merge');
const MockerApi = require('mocker-api');

const proxyConfig = require('./proxy.config.js'); 

let globalAppConfig = require('./app.config.js');
let openPage = globalAppConfig.basename ? globalAppConfig.basename + "/" : "/"; // 默认打开路径，默认值为 

let webpackConfig = require('./webpack.my.prod.config.js');

// webpackConfig.devtool = true;
webpackConfig.mode = "development";

webpackConfig.optimization.minimize = false;

webpackConfig.devServer = {
    static: {
      directory: path.resolve(__dirname, '../dist'),
      publicPath: path.resolve(__dirname, '../'),
    },
    host: '0.0.0.0',
    port: 11111,
    // open: [openPage], // true, 打开的断裂面
    hot: false,
    compress: true,
    historyApiFallback: true, // 在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    proxy:proxyConfig,      // 代理设置
    onBeforeSetupMiddleware: (devServer)=>{
        if(!devServer){
            console.err("[>_<:20230823-1427-001] webpack-dev-server is not defined");
            throw new Error("[>_<:20230823-1427-001] webpack-dev-server is not defined");
        }
        // mock 数据配置
        MockerApi(devServer.app, path.resolve("", 'mock/mock.config.js'), {});
        // devServer.app.use("*", function (req, res, next) {
        //   res.header('Access-Control-Allow-Origin', '*');
        //   res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
        //   res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
        //   if (req.method === 'OPTIONS') {
        //     res.send(200)
        //   } else {
        //     next()
        //   }
        // });

        // // 跨域设置
        // devServer.app.all('*', function(req, res, next) {
        //     res.header("Access-Control-Allow-Origin", "*");
        //     res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
        //     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
        //     next();
        // });
    }
};
webpackConfig.plugins.push(new webpack.SourceMapDevToolPlugin({}));
// webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

module.exports = webpackConfig;








