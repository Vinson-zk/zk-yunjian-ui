/**
 * 1、webpack 的能用配置对象创建函数定义；
 * 2、webpack 编译插件在此统一引入，以解决由于引用 node_modules 路径问题不同而对象类型不同，instanceof 使用起来不准确的问题；
 * 
 * @Author: Vinson
 * @Date: 2020-08-10 16:19:10
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-03-09 23:29:08
 */

const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpckMerge = require('webpack-merge');

const MockerApi = require('mocker-api');

// 生产环境下使用
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// // 压缩
// const uglifyjs = require('uglifyjs-webpack-plugin');
// const MinifyPlugin = require('babel-minify-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const gobalWebpackConfig = require("./global.webpack.config.js");
const mockPublicConfig = require("./mock.public.config.js");

const globalAppConfig = require("./global.app.config.js");

/**
 * 制作通能的 webpack 配置
 * @param {*} env 
 * @param {*} args 
 */
const f_makeWebpackPublicConfig = (env, args) => {

    // console.log("[^_^:20210217-1648-001] f_makeWebpackPublicConfig-path:", path.resolve(__dirname, '../assets/js'));

    /*** 主题设置，可传入编译变量设置 ***/
    let theme = (env && env.theme) ? env.theme : 'zkTheme';

    const NODE_ENV = {
        theme: theme
    };

    const themeConfig = gobalWebpackConfig[theme];
    const lessLoaderModifyVars = {};
    for (let index in themeConfig.color) {
        lessLoaderModifyVars[index] = themeConfig.color[index];
    }

    // const lessLoaderOpt = {
    //     javascriptEnabled: true,
    //     modifyVars: lessLoaderModifyVars // 基于 less-loader 提供的 modifyVars 修改主题
    // }
    // const cssLoaderOpt = {
    //     sourceMap: true,
    //     // '[path][name]---[local]---[hash:base64:5]',
    //     localIdentName: '[name]--[local]--[hash:base64:9]',
    //     modules: true, // css 模块化，可以使用 i
    // }
    
    const lessLoaderOpt = {
        sourceMap: true,
        lessOptions: {
            javascriptEnabled: true,
            strictMath: false,
            modifyVars: lessLoaderModifyVars // 基于 less-loader 提供的 modifyVars 修改主题
        },
    }
    const cssLoaderOpt = {
        modules: {
            // compileType: "module",
            // mode: "local",
            // auto: true,
            // exportGlobals: true,
            localIdentName: "[path][name]__[local]--[hash:base64:5]",
            // localIdentContext: path.resolve(__dirname, "src"),
            // localIdentHashPrefix: "my-custom-hash",
            // namedExport: true,
            // // exportLocalsConvention: "camelCase",
            // exportOnlyLocals: false,
        },
    }

    let webpackConfigObj = {
        entry: {
            // commons:[
            //     "antd",
            //     "dva",
            //     "react",
            //     "react-dom",
            //     "robe-ajax"
            // ]
        },
        output: {
            // path: path.join(__dirname, '../dist'), // 在子项目的 webpack 配置中添加
            publicPath: '',
            filename: '[name].js',
            // chunkFilename: '[name].js'
            // library: 'zkFramework',                // 在子项目的 webpack 配置中添加
            // libraryTarget: 'umd',  // umd  commonjs2
            // umdNamedDefine: true, // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define。
            // globalObject: 'this',  //!!!This line
        },

        optimization: {
            // minimize: true, // 在 production 中定义
            // 防止重复
            splitChunks: {
                /*
                    all: 不管文件是动态还是非动态载入，统一将文件分离。当页面首次载入会引入所有的包
                    async： 将异步加载的文件分离，首次一般不引入，到需要异步引入的组件才会引入。
                    initial：将异步和非异步的文件分离，如果一个文件被异步引入也被非异步引入，那它会被打包两次（注意和all区别），用于分离页面首次需要加载的包。
                */
                // chunks: 'all', // initial; async; all; 默认 async
                // minSize: 30000, // 形成一个新代码块最小的体积
                // maxAsyncRequests: 5, // 按需加载时候最大的并行请求数
                // maxInitialRequests: 3, // 最大初始化请求数
                // automaticNameDelimiter: '~', // 打包分割符
                // name: true,
                // filename:'chunks',
                cacheGroups: {
                    'vendors': {

                        // @babel/runtime|antd|dva|react|react-dom|robe-ajax|react-router|react-router-dom|react-redux|history
                        // test: /[\/]node_modules[\/]/,
                        test: /(antd|dva|react|react-dom|robe-ajax|react-router|react-router-dom|react-redux)/,
                        // test:/[\\/]node_modules[\\/](antd|dva|react|react-dom|robe-ajax|react-router|react-router-dom)[\\/]/,
                        chunks: 'all',
                        name: 'vendors', // 分离包的名字
                        // minChunks: 2, // 引入两次及以上被打包
                        priority: 100,
                        enforce: true
                    },
                    'async.commons': { // 其余，异步加载公共包、组件等
                        chunks: 'async',
                        // minChunks: 2,
                        name: 'async.commons',
                        priority: -90,
                        enforce: true
                    },
                    'commons': { // 其他同步加载公共包
                        // test:/(.)/
                        // test: /[\/]node_modules[\/](.)[\\/]/,
                        chunks: 'all',
                        name: 'commons',
                        // minChunks: 2,
                        priority: -100,
                        enforce: true
                    },
                },
            },
            // runtimeChunk: "single",
            // // 等价于
            // runtimeChunk: {
            //     name: 'manifest'
            // }
            // minimizer:[
            //     new TerserPlugin({
            //         cache: true,
            //         parallel: true,
            //         sourceMap: true, // Must be set to true if using source-maps in production
            //         terserOptions: {
            //           // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
            //         }
            //     }),
            // ],
            /*** 代码压缩，生产环境中使用 ***/
            // minimize: true,
            // minimizer: [
            //     new TerserPlugin({
            //         test: /\.js(\?.*)?$/i,
            //         parallel: true,
            //     }),
            // ],
        },

        /** 
        * externals 扩展 js 包; 引入第三方 js 对象；
        * 对应 js 对象需要在 html 中引入；
        */
        externals: {
            zkJsUtils: 'zkJsUtils',
            zkJsEvent: 'zkJsEvent',
            // zkJsSortTwoArray: 'zkJsSortTwoArray',
            zkJsValidates: 'zkJsValidates',
            // lodash: {
            //     commons:'lodash',
            //     commonjs: 'lodash',
            //     commonjs2: 'lodash',
            //     amd: 'lodash',
            //     root: '_'
            // }
        },
        resolve: {
            modules: [
                // 修改项目 loading 时查找 node_modules 的路径；不设置时，默认从根目录查找，未找到时，递归从上级目录查找；
                // 注意，这里并没有修改 webpack 使用 require 时的 node_modules 的路径；
                path.resolve(__dirname, "../node_modules"),
                // path.resolve("", "node_modules"),
                // , path.resolve("", globalWebpackConfig.lib_nodeModules),
            ],
            extensions: ['.js', '.jsx', '.css', '.less', '.scss'], // 
            alias: {
                "zkPackage": path.resolve(__dirname, '../'),
                // '@babel/runtime': '@babel/runtime-corejs2'
            },
            // modulesDirectories: ["./src", "node_modules"]
        },
        module: {
            rules: [
                {	// js jsx 文件解析
                    test: /\.(js|jsx)?$/,
                    exclude: [
                        // path.resolve(__dirname, "../../node_modules") 
                        path.resolve("", "node_modules")
                    ],
                    include: [
                        // path.resolve(__dirname, "../../framework/src")
                        // , path.resolve(__dirname, "../../framework/example")
                        // , path.resolve(__dirname, "../../framework/es")
                        path.resolve(__dirname, "../../../")
                    ],
                    // exclude: [ // 在子项目的 webpack 配置中添加
                    //     // 'node_modules'
                    //     path.resolve(__dirname, "node_modules"),
                    //     path.resolve(__dirname, "../conf")
                    // ],
                    // include: [ // 在子项目的 webpack 配置中添加
                    //     path.join(process.cwd(), 'src')
                    //     ,path.join(process.cwd(), 'example')
                    // ],
                    use: {
                        loader: 'babel-loader',
                        options: {
                            sourceMap: true,
                            // presets: ['react', 'es2015'],
                            presets: [
                                '@babel/preset-react',
                                '@babel/preset-env'
                            ],
                            plugins: [
                                '@babel/plugin-transform-runtime',
                                "@babel/plugin-syntax-jsx",
                                '@babel/plugin-syntax-dynamic-import',
                                '@babel/plugin-proposal-class-properties', // 解析 class，不加这行时，class 里定义箭头函数时，解析不了
                                ["import", {                       // 按需加载第三方 CSS，需要与 css loader 配合使用。
                                    "libraryName": "antd",
                                    "libraryDirectory": "es",
                                    // "style": "css",
                                    "style": true,       // 如果需要基于 less-loader 提供的 modifyVars 修改主题时 style 必须为 true，而不是css；
                                }]
                            ],
                            // modules: true,
                        },
                    },
                }
                , {  // 图片等文件
                    test: /\.(png|jpe?g|gif|svg|ico)(\?.*)?$/,
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                    }
                }
                , {  // 多媒体 等文件
                    test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                    }
                }
                , {  // 多媒体 等文件
                    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                    }
                }
                , {  // css less 等文件
	            	/* 记录写法；
		             * css 需要安装：style; style-loader; css; css-loader;
		             * less 需要安装：style; style-loader; css; css-loader; less; less-loader;
		             * scss 需要安装：style; style-loader; css; css-loader; sass; sass-loader; node-sass
		             */
                    test: /\.(less|css|scss)$/,
                    include: [/node_modules/],    // 此个 rules 只处理 node_modules 下的 样式文件；为了防止CSS 模块化影响第三方 JS 架包的 CSS
                    use: [
                        'style-loader'
                        , 'css-loader'
                        , {
                            loader: 'less-loader', // compiles Less to CSS
                            options: lessLoaderOpt
                        }
                    ]
                }
                , {  // css less 等文件
                    test: /\.(less|css|scss)$/,
                    // include:[/src/],    // 此个 rules 只处理 项目下的样式文件；CSS 模块化，防止CSS 冲突；
                    exclude: [/node_modules/],
                    use: [
                        'style-loader', 
                        {
                            loader: 'css-loader', // translates CSS into CommonJS
                            options: cssLoaderOpt,
                        }, 
                        {
                            loader: 'less-loader', // compiles Less to CSS
                            options: lessLoaderOpt
                        }
                    ]
                }
            ]
        },
        plugins: [
            /*** 全局变量设置 ***/
            new webpack.DefinePlugin({
                // 应用中直接使用 globalAppConfig.[属性名称] 使用常量；可通过插件覆盖或扩展全局变量；
                "globalAppConfig": JSON.stringify(globalAppConfig),
                // // node scripts webpack 的命令行参数；
                "NODE_ENV": JSON.stringify(NODE_ENV),
            }),

            /*** 拷贝文件 ***/
            /*
            from    定义要拷贝的源目录         from: __dirname + ‘/src/public’
            to      定义要拷贝到的目标目录      from: __dirname + ‘/dist’
            toType  file 或者 dir           可选，默认是文件
            force   强制覆盖先前的插件         可选 默认false
            context                        可选 默认base context可用specific context
            flatten 只拷贝文件不管文件夹       默认是false
            ignore  忽略拷贝指定的文件         可以用模糊匹配
            */
            new CopyWebpackPlugin({
                patterns:[
                    {from: path.resolve(__dirname, '../assets/lib'), to: 'assets/lib', force: true, globOptions: { ignore: [".*", "**/.*"] }},
                    {from: path.resolve(__dirname, '../assets/js'), to: 'assets/js', force: true, globOptions: { ignore: [".*", "**/.*"] }}
                ]
            }),

            // /*** html 模版 ***/

            // /*** 在子项目的 webpack 配置中添加 ***/
            new HtmlWebpackPlugin({
                // template: path.resolve(__dirname, '../public/index.html'),
                // filename: path.join(process.cwd(), 'dist/index.html'),
                // template:'',
                // filename:'',
                filename: 'index.html',
                inject: 'body', // true head false body; 默认 true
                hash: true,
                minify: {
                    removeComments: false,
                    collapseWhitespace: false,
                    removeAttributeQuotes: false
                },
                chunks: ["vendors", "async.commons", "commons"],  // "vendors", "async.commons", "commons", "1.commons"
                // necessary to consistently work with multiple chunks via CommonsChunkPlugin
                // Allows to control how chunks should be sorted before they are included to the HTML. Allowed values are 'none' | 'auto' | 'manual' | {Function}
                chunksSortMode: 'none'
            }),
        ]
    };

    return webpackConfigObj;
}

module.exports = {
    'path': path,
    'webpack': webpack,
    'html-webpack-plugin': HtmlWebpackPlugin,
    'copy-webpack-plugin': CopyWebpackPlugin,
    // 'babel-minify-webpack-plugin': MinifyPlugin,
    'webpack-merge': WebpckMerge,
    'mocker-api': MockerApi,
    'clean-webpack-plugin': CleanWebpackPlugin,
    'terser-webpack-plugin':TerserPlugin,
    // 'extract-text-webpack-plugin':ExtractTextPlugin,
    // 'uglifyjs-webpack-plugin':uglifyjs,
    gobalWebpackConfig: gobalWebpackConfig,
    mockPublicConfig: mockPublicConfig,

    makeWebpackPublicConfig: f_makeWebpackPublicConfig,
    globalAppConfig: globalAppConfig
}


