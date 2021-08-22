/*
 * @Author: Vinson 
 * @Date: 2020-08-10 15:32:40 
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-04-02 14:09:20
 */

const path = require('path');

// // 当前进程的目录：/Users/bs/ws_web/zk-frontEnd/package
// console.log("[^_^:20200806-1650-001-0] ", process.cwd());
// // 当前项目根目录 /Users/bs/ws_web/zk-frontEnd/package
// console.log("[^_^:20200806-1650-001-1] ", path.resolve(""));
// // 根目录 /
// console.log("[^_^:20200806-1650-001-2] ", path.resolve("/"));
// // 当前文件所在目录  /Users/bs/ws_web/zk-frontEnd/package/script
// console.log("[^_^:20200806-1650-001-3] ", path.resolve(__dirname));

// // 当前项目根目录 /Users/bs/ws_web/zk-frontEnd/package
// console.log("[^_^:20200806-1650-002-1] ", path.resolve("", "."));
// // 根目录 /
// console.log("[^_^:20200806-1650-002-2] ", path.resolve("", "/"));
// // 当前文件所在目录  /Users/bs/ws_web/zk-frontEnd/package/script
// console.log("[^_^:20200806-1650-002-3] ", path.resolve("", __dirname));

// // 当前文件所在目录  /Users/bs/ws_web/zk-frontEnd/package/script
// console.log("[^_^:20200806-1650-003-1] ", path.resolve(__dirname, "."));
// // 根目录 /
// console.log("[^_^:20200806-1650-003-2] ", path.resolve(__dirname, "/"));
// // 当前文件所在目录  /Users/bs/ws_web/zk-frontEnd/package/script
// console.log("[^_^:20200806-1650-003-3] ", path.resolve(__dirname, __dirname));

// ===============================================================================
// [^_^:20200806-1650-001-0]  /Users/bs/ws_web/zk-frontEnd/package
// [^_^:20200806-1650-001-1]  /Users/bs/ws_web/zk-frontEnd/package
// [^_^:20200806-1650-001-2]  /
// [^_^:20200806-1650-001-3]  /Users/bs/ws_web/zk-frontEnd/package/script

// [^_^:20200806-1650-002-1]  /Users/bs/ws_web/zk-frontEnd/package
// [^_^:20200806-1650-002-2]  /
// [^_^:20200806-1650-002-3]  /Users/bs/ws_web/zk-frontEnd/package/script

// [^_^:20200806-1650-003-1]  /Users/bs/ws_web/zk-frontEnd/package/script
// [^_^:20200806-1650-003-2]  /
// [^_^:20200806-1650-003-3]  /Users/bs/ws_web/zk-frontEnd/package/script

/*** 取命令行参数 ***/
// console.log("-----------------------------------------------------");
// console.log("-----------------------------------------------------");
// console.log("process ---------------------------------------------");
// console.log(process);
// console.log("-----------------------------------------------------");
// console.log("-----------------------------------------------------");
// console.log("process.argv:", process.argv);
// console.log("process.env.npm_package_name:" + process.env.npm_package_name);
// console.log("process.env.npm_config_argv:" + process.env.npm_config_argv);
// console.log("process.env.npm_lifecycle_event:" + process.env.npm_lifecycle_event);
// console.log("-----------------------------------------------------");
// console.log("-----------------------------------------------------");
// console.log("-----------------------------------------------------");
// console.log("-----------------------------------------------------");


// 取 要执行的命令
// 取命令
const command = process.env.npm_lifecycle_event;

// 取 命令运行命令参数
// const argv = JSON.parse(process.env.npm_config_argv);
const argv = process.argv;
const params = argv.remain || [];
// 取出指定的启动项目
const projectName = argv[2] || '';

if (projectName == '') {
    throw new Error("[>_<:20190322-1804-004] 请输入启动项目名称：");
}

/*** webpack ***/
const webpack = require('webpack');

/*** 根据不同命令处理 ***/
if ("start" == command) {
    // 启动 webpack server 命令

    const webpackDevServer = require('webpack-dev-server');

    /*** 取指定项目的 webpack 配置 ***/
    let webpackConfig = require(`../../${projectName}/conf/webpack.dev.config.js`);

    // 如果配置是函数，调用函数 
    if (webpackConfig instanceof Function) {
        webpackConfig = webpackConfig()
    }
    // console.log("[^_^:20200810-1649-001] ------------------------------");
    // console.log(`启动了项目:${projectName}; webpackConfig:\n`, webpackConfig)

    let webpackServerConfig = webpackConfig.devServer;
    // 设置默认配置或统一设置一些配置
    webpackServerConfig = Object.assign(
        {
            host: 'localhost'
            , port: 8000
            , open: process.env.open && (process.env.open != 'false') || false
            // ,openPage:'/'
        }
        , webpackServerConfig
        , {
            stats: {
                colors: true,
            },
        }
    );

    /*** 启动项目 ***/
    // console.log("[^_^:20200810-1410-001] ------------------------------");
    // console.log(`启动了项目:${projectName}; webpackServerConfig:\n`, webpackServerConfig);
    const compiler = webpack(webpackConfig);
    const server = new webpackDevServer(compiler, webpackServerConfig);

    server.listen(webpackServerConfig.port, webpackServerConfig.host, (err) => {
        if (err) {
            throw err;
        }
        console.log(`[^_^:20190322-1804-003] Starting project [${projectName}] server on http://${webpackServerConfig.host}:${webpackServerConfig.port}`);
    });
} else if ("build" == command) {
    // 编译 webpack server 命令
    /*** 取指定项目的 webpack 配置 ***/
    let webpackConfig = require(`../../${projectName}/conf/webpack.prod.config.js`);
    // 如果配置是函数，调用函数 
    if (webpackConfig instanceof Function) {
        webpackConfig = webpackConfig();
    }

    // console.log("[^_^:20200810-1410-002] ------------------------------");
    // console.log(`启动了项目:${projectName}; webpackConfig:\n`, webpackConfig);
    // console.log(`启动了项目:${projectName}; webpackConfig:\n`, webpackConfig.plugins[2]);

    /*** 编译项目 ***/
    const compiler = webpack(webpackConfig);
    compiler.run((err, stats) => {
        if (err) {
            throw err;
        }

        console.log(`[^_^:20190322-1804-001] build project [${projectName}]. stats:[${stats}]`)
    })
} else {
    throw new Error("[>_<:20190322-1804-002] 示知处理命令：" + command);
}

// node -v
// webpack-dev-server --hot --open --port 11111 --config sample/conf/webpack.dev.config.js

/**
node 命令行参数

1)命令行执行test.js：
a=1 node test.js
console.log(process.env.a); // 能取到值

2)命令行执行test.js：
node test.js a=1
console.log(process.env.a); // test.js能被执行，但获取不到a的值。

*/

