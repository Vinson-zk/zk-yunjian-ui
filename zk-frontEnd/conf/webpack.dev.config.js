/*
 * @Author: Vinson 
 * @Date: 2020-08-06 17:23:52 
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-05-18 11:46:05
 */

const webpackPublicConfig = require('../../zk-package/conf/webpack.public.config.js');

const path = webpackPublicConfig.path;
const WebpckMerge = webpackPublicConfig['webpack-merge'];
const MockerApi = webpackPublicConfig['mocker-api'];

const proxyConfig = require('./proxy.config.js'); 
const baseWebpackConfig = require('./webpack.base.config');

let globalAppConfig = require('./app.config.js');

module.exports = WebpckMerge(baseWebpackConfig(null, null), {
    mode:"development",
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'), // 默认会以根文件夹提供本地服务器，这里指定文件夹
        disableHostCheck: true, // webpack -dev-server 出于安全考虑，默认检查 hostname，如果 hostname 不是配置内的就不能访问。关闭 这个检测
	    historyApiFallback: true,                        // 在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
	    host: "0.0.0.0",
        port: 11110,                                     // 如果省略，默认8080，也可以在 npm 指令中指定
	    publicPath: "/",
        open:true,
        openPage: globalAppConfig.basename ? globalAppConfig.basename + "/" : "/", // 默认打开路径，默认值为 /
        hot: true,              // 是否使用热更新
	    proxy:proxyConfig,      // 代理设置
        before: (app, server)=>{
            // app.use("*", function (req, res, next) {
            //   res.header('Access-Control-Allow-Origin', '*');
            //   res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
            //   res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
            //   if (req.method === 'OPTIONS') {
            //     res.send(200)
            //   } else {
            //     next()
            //   }
            // });

            // mock 数据配置
            MockerApi(app, path.resolve(__dirname, '../mock/mock.config.js'), {});

            // // 跨域设置
            // app.all('*', function(req, res, next) {
            //     res.header("Access-Control-Allow-Origin", "*");
            //     res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type");
            //     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
            //     next();
            // });
        }
    },
    
//     plugins: [
// 　　 　　 
//         new CopyWebpackPlugin([
//             {
//                 from: path.resolve(__dirname, '../public/assets'),
//                 to: 'static',
//                 ignore: ['.*']
//             }
//         ]),
//     ]

});
