/*
* 在 zk-package 中来启动
* @Author: Vinson
* @Date:   2023-06-18 23:18:29
* @Last Modified by: vinson
* @Last Modified time: 2023-08-28 02:18:36
*/



const packageWebpack = require('../../zk-package/conf/webpack.package.config.js');
const packagePath = packageWebpack.packagePath;
const webpack = packageWebpack.webpack;
const WebpckMerge = packageWebpack.WebpckMerge;

// =================================================================================================================
// --- 开发服务配置
let myDevConfig = {
    devtool: false, // eval-source-map eval-cheap-module-source-map
    mode:"development",
    devServer: {
        static: {
          directory: packagePath.resolve(__dirname, '../dist'),
          // publicPath: '/',
        },
        host: '0.0.0.0',
        port: 11102,
        open: ["/"], // true, 打开的断裂面
        hot: true,
        compress: true,
        historyApiFallback: true, // 在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    },
}

// --- 
let myWebpackConfig = {
     // entry 入口
    entry: {
        app: packagePath.resolve(__dirname, '../src/app')
    },

    // outout 输出
    output: {
        path: packagePath.resolve(__dirname, '../dist'),
        filename: '[name].js',
        // library: 'zkFramework'
    },
}

module.exports = (env, args)=>{
    let packageWebpackConfigObj = packageWebpack.makePackageWebpackConfig(env, args);

    let webpackConfig = packageWebpackConfigObj.packageWebpackConfig;

    // entry 入口
    webpackConfig = WebpckMerge.merge(webpackConfig, myWebpackConfig);

    // 开发配置
    webpackConfig = WebpckMerge.merge(webpackConfig, myDevConfig);

    // rules
    packageWebpackConfigObj.packageDefaultRules.babel_loader.include.push(packagePath.resolve(__dirname, "../src"));
    packageWebpackConfigObj.packageDefaultRules.babel_loader.include.push(packagePath.resolve(__dirname, "../src"));
    webpackConfig.module.rules.push(packageWebpackConfigObj.packageDefaultRules.babel_loader);
    webpackConfig.module.rules.push(packageWebpackConfigObj.packageDefaultRules.url_loader);
    webpackConfig.module.rules.push(packageWebpackConfigObj.packageDefaultRules.css_less_loader);

    // 插件
    webpackConfig.plugins.push(packageWebpackConfigObj.packageDefaultPlugins.DefinePlugin);
    packageWebpackConfigObj.packageDefaultPlugins.CopyWebpackPlugin.patterns.push({
        from: packagePath.resolve(__dirname, '../public/assets'), to: 'assets', force: true, 
        globOptions: { ignore: [".*", "**/.*"] }
    });
    webpackConfig.plugins.push(packageWebpackConfigObj.packageDefaultPlugins.CopyWebpackPlugin);
    packageWebpackConfigObj.packageDefaultPlugins.HtmlWebpackPlugin.userOptions.template = packagePath.resolve(__dirname, '../public/index.html');
    packageWebpackConfigObj.packageDefaultPlugins.HtmlWebpackPlugin.userOptions.chunks.push("app");

    
    webpackConfig.plugins.push(packageWebpackConfigObj.packageDefaultPlugins.HtmlWebpackPlugin);

    // console.log("--- ", webpackConfig.optimization.splitChunks.cacheGroups);
    // console.log("--- ", packageWebpackConfigObj.packageDefaultPlugins.HtmlWebpackPlugin);
    
    return webpackConfig;
}














