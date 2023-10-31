/*
 * @Author: Vinson
 * @Date:   2023-08-15 00:04:47
 * @Email: binary_space@126.com
 * @Last Modified by: vinson
 * @Last Modified time: 2023-09-04 14:15:15
 */

// --------------------------------------------------------------------------------------------------------
const path = require('path');
const webpack = require('webpack')
const WebpckMerge = require('webpack-merge');
const MockerApi = require('mocker-api');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// 压缩
const JsonMinimizerWebpackPlugin = require("json-minimizer-webpack-plugin");
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const MiniCssExtractWebpackPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
// const HtmlMinimizerWebpackPlugin = require("html-minimizer-webpack-plugin");
// const ImageMinimizerWebpackPlugin = require("image-minimizer-webpack-plugin");


// const ExtractTextPlugin = require('extract-text-webpack-plugin'); // 老了，不用了
// const UglifyjsPlugin = require('uglifyjs-webpack-plugin'); // 老了，不用了
// const BabelMinifyPlugin = require('babel-minify-webpack-plugin'); // 老了，不用了

// --------------------------------------------------------------------------------------------------------
const gobalWebpackConfig = require("./global.webpack.config.js");
// package 默认全局配置
const globalAppConfig = require("./global.app.config.js");

// --------------------------------------------------------------------------------------------------------
/**
 * 制作通能的 webpack 配置
 * @param {*} env 
 * @param {*} args 
 * @param {*} isDev 是开发，true-开发模式；false-不是开发模式
 */
const f_makePackageWebpackConfig = (env, args, isDev=false) => {

    console.log("[^_^:20210217-1648-001] f_makePackageWebpackConfig: ", env, args, isDev);
    // console.log("[^_^:20210217-1648-002] f_makePackageWebpackConfig-path:", path.resolve(__dirname, '../assets/js'));

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

	const lessLoaderOpt = {
	    sourceMap: isDev?true:false,
	    lessOptions: {
	        javascriptEnabled: true,
	        strictMath: false,
	        modifyVars: lessLoaderModifyVars // 基于 less-loader 提供的 modifyVars 修改主题
	    },
	}

    const packageWebpackConfig = {
    	// 入口，在各个项目的 webpack 配置中支配置
        entry: {
            // commons:[
            //     "antd",
            //     "dva",
            //     "react",
            //     "react-dom",
            //     "robe-ajax"
            // ]
        },
        // 输出
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
        // 优化
        optimization: {
            minimize: true, // 在 production 中定义
            minimizer: [
                new TerserWebpackPlugin({
                    // test: /\.js(\?.*)?$/i,
                    // include: /\/includes/,
                    // exclude: /\/excludes/,
                    parallel: true,
                    // minify: TerserWebpackPlugin.uglifyJsMinify,
                    terserOptions: {
                        format: {
                            comments: false, // 默认值： true; 选项指定是否保留注释，false-不保留注释；
                        },
                    },
                    extractComments: false, // 默认值： true; 默认情况下，仅剥离 /^\**!|@preserve|@license|@cc_on/i 正则表达式匹配的注释，其余注释会删除。
                }),
                new JsonMinimizerWebpackPlugin(),
                new CssMinimizerWebpackPlugin({
                    parallel: 4,
                    minimizerOptions: {
                        preset: [ "default",
                            {
                                discardComments: { removeAll: true },
                            },
                        ],
                    },
                }),
            ],
            // 防止重复
            splitChunks: {
                /*
                    all : 不管文件是动态还是非动态载入，统一将文件分离。当页面首次载入会引入所有的包
                    async ： 将异步加载的文件分离，首次一般不引入，到需要异步引入的组件才会引入。
                    initial ：将异步和非异步的文件分离，如果一个文件被异步引入也被非异步引入，那它会被打包两次（注意和all区别），用于分离页面首次需要加载的包。
                */
                chunks: 'async', // 共有三个值可选：initial(初始模块)、async(按需加载模块)和all(全部模块)
                maxAsyncRequests: 30,    // 默认30； 按需加载时的最大并行请求数。<= 
                maxInitialRequests: 30,  // 默认30； 入口点的最大并行请求数。 <=3
                // defaultSizeTypes: ['javascript', 'unknown'],    // 默认 ['javascript', 'unknown']；Sets the size types which are used when a number is used for sizes.
                minChunks: 1,            // 默认为1；拆分前必须共享模块的最小 chunks 数。
                minSize: 30000,          // 默认：20000; 生成 chunk 的最小体积（以 bytes 为单位）。
                minSizeReduction: 1024*1024*2, // 生成 chunk 所需的主 chunk（bundle）的缩减最小体积；即生成 chunk，需要同时满足 minSizeReduction 与 minSize。
                // enforceSizeThreshold: 50000, // 默认：50000；强制执行拆分的体积阈值和其他限制（minRemainingSize，maxAsyncRequests，maxInitialRequests）将被忽略。
                // minRemainingSize: 0, // 默认：0；确保拆分后剩余的最小 chunk 体积超过限制来避免大小为零的模块。仅在剩余单个 chunk 时生效。
                /*
                maxSize: 默认：0; 将大于 maxSize 个字节的 chunk 分割成较小的部分。 这些较小的部分在体积上至少为 minSize（仅次于 maxSize）
                maxSize 比 maxInitialRequest/maxAsyncRequests 具有更高的优先级。实际优先级是 maxInitialRequest/maxAsyncRequests < maxSize < minSize。
                设置 maxSize 的值会同时设置 maxAsyncSize 和 maxInitialSize 的值。
                */
                maxSize: 1024*1024*6, 
                // maxAsyncSize: 1024*1024, 
                // maxInitialSize: 1024*1024, 
                // name: true, // 默认由模块名+hash命名，名称相同时多个模块将合并为1个，可以设置为function
                // filename:'chunks',
                // automaticNameMaxLength: 30,
                // automaticNameDelimiter: '~', // 打包分割符；默认是~
                cacheGroups: {
                    // default: { // 模块缓存规则，设置为false，默认缓存组将禁用
                    //     minChunks: 2, // 模块被引用>=2次，拆分至vendors公共模块
                    //     priority: -20, // 优先级
                    //     reuseExistingChunk: true, // 默认使用已有的模块
                    // },
                    // vendors: {
                    //     test: /[\\/]node_modules[\\/]/, // 表示默认拆分node_modules中的模块
                    //     priority: -10
                    // }
                    'g.commons.lib': { // 其他同步加载公共包
                        // test:/(.)/
                        test: /[\\/]node_modules[\\/]/, // 表示默认拆分node_modules中的模块
                        name: 'commons.lib',
                        priority: 10,
                        chunks: 'all',
                        // minChunks: 2,
                        // enforce: true,         // 忽略 minSize、minChunks、maxAsyncRequests 和 maxInitialRequests 配置；
                        reuseExistingChunk: true, // 默认使用已有的模块
                    },
                    'g.commons.lib.async': { // 其余，异步加载公共包、组件等
                        // test: /[\\/]node_modules[\\/]/, // 表示默认拆分node_modules中的模块
                        name: 'commons.lib.async',
                        priority: 20,
                        chunks: 'async',
                        // enforce: true,
                        // minChunks: 2,
                        reuseExistingChunk: true, 
                    },
                    'g.commons.react': {
                        // test: /(react|react-*)/,
                        test:/[\\/]node_modules[\\/](react|dva|robe-ajax|react-*)[\\/]/,
                        name: 'commons.react', // 分离包的名字
                        priority: 30,
                        chunks: 'all', 
                        // minChunks: 2, // 引入两次及以上被打包
                        // enforce: true
                        reuseExistingChunk: true, 
                    },
                    'g.commons.antd': {
                        // test: /(antd)/,
                        test:/[\\/]node_modules[\\/](antd)[\\/]/,
                        name: 'commons.antd', // 分离包的名字
                        priority: 40,
                        chunks: 'all', 
                        // enforce: true,
                        reuseExistingChunk: true, 
                    },
                    'g.commons.zk.css': {
                        // test: /(dva|robe-ajax)/,
                        test:/\.(s?css|less|sass)$/,
                        name: 'commons.zk.css', // 分离包的名字
                        type: 'css/mini-extract', // 不添加 type 会将 css 会被添加到 html script 中
                        priority: -10,
                        chunks: 'all', 
                        // enforce: true,
                        reuseExistingChunk: true, 
                    },
                    'g.commons.zk.framework': {
                        // test: /(dva|robe-ajax)/,
                        test:/[\\/]zk-framework[\\/]/,
                        name: 'commons.zk.framework', // 分离包的名字
                        priority: -20,
                        chunks: 'all', 
                        // enforce: true,
                        reuseExistingChunk: true, 
                    },
                },
            },
        },
        // 外部扩展 externals 扩展 js 包; 引入第三方 js 对象；对应 js 对象需要在 html 中引入；
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
        // 解析
        resolve: {
            modules: [
                // 修改项目 loading 时查找 node_modules 的路径；不设置时，默认从根目录查找，未找到时，递归从上级目录查找；
                // 注意，这里并没有修改 webpack 使用 require 时的 node_modules 的路径；
                path.resolve("", "node_modules"),
                // , path.resolve("", globalWebpackConfig.lib_nodeModules),
            ],
            extensions: ['.js', '.jsx', '.css', '.less', '.scss'], // 
            alias: {
                "zkPackage": path.resolve(""),
                // '@babel/runtime': '@babel/runtime-corejs2'
            },
            // modulesDirectories: ["./src", "node_modules"]
        },
        module: {
            rules: [ // 因为各项目对 rules 需要自定义处理，在 package 项目中只会对创建对应的 rule 对象，在子项目中引用添加及做自定义修改。 
            ] 
        },
        plugins: [  // 因为各项目对 rules 需要自定义处理，在 package 项目中只会对创建对应的 rule 对象，在子项目中引用添加及做自定义修改。
        ],   
    };
    // 默认的 rules 定义
    const packageDefaultRules = {
        'babel_loader': { // 因为各项目对 rules 需要自定义处理，在 package 项目中只会对创建对应的 rule 对象，在子项目中引用添加及做自定义修改。  
            // js jsx 文件解析
            test: /\.(js|jsx)?$/,
            exclude: [
                path.resolve("", "node_modules"),  
                // path.resolve("", "../zk-package/node_modules")
            ],
            include: [
                // path.resolve(__dirname, "../../"),
                // path.resolve(__dirname, "../../zk-package"),
                // path.resolve(__dirname, "../../zk-framework"),
                // path.resolve(__dirname, "../src"), 
            ],
            use: [{
                loader: 'thread-loader',
                options: {
                    worker: 6,
                },
            },
            {
                loader: 'babel-loader',
                options: {
                    sourceMap: isDev?true:false,
                    // cacheDirectory: true, // 启用缓存，重新打包时，直接读取缓存
                    // presets: ['react', 'es2015'],
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react',
                    ],
                    plugins: [
                        '@babel/plugin-transform-runtime',
                        '@babel/plugin-transform-modules-commonjs',
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
            }],
        },
        'url_loader':{  // 多媒体 解析图片、音频、其他媒体 等文件
            test: /\.(png|jpe?g|gif|ico|mp4|webm|ogg|mp3|wav|flac|aac|svg|woff|woff2?|eot|ttf|tiff|otf|TTF)(\?.*)?$/,
            exclude: [
                path.resolve("", "node_modules"),  
                // path.resolve("", "../zk-package/node_modules"),
            ],
            loader: 'url-loader',
            type: 'javascript/auto',
            options: {
                esModule: false,
                outputPath: 'styles/css/', // 文件输出在: dist/styles/css/ 目录下; 
                limit: 10000,
            },
        },
        'css_less_loader': {  // css less 等文件
            /* 记录写法；
             * css 需要安装：style; style-loader; css; css-loader;
             * less 需要安装：style; style-loader; css; css-loader; less; less-loader;
             * scss 需要安装：style; style-loader; css; css-loader; sass; sass-loader; node-sass
             */
            test: /\.(css|less|scss)$/,
            // include:[/src/],    // 此个 rules 只处理 项目下的样式文件；css 模块化，防止 css 冲突；
            exclude: [/node_modules/],
            sideEffects: true, // 不添加这个配置，MiniCssExtractWebpackPlugin 不会抽离 css 做单独的文件。
            use: [
                // 'style-loader', // 不注释这个加加载器 less 不会被抽离成单独的文件；
                {
                    loader: MiniCssExtractWebpackPlugin.loader,
                    options: {
                        // esModule: false, 
                        publicPath: "/",
                        // hmr: devMode
                    }
                },
                {
                    loader: 'css-loader', // translates CSS into CommonJS
                    options: {
                        modules: {
                            /** 
                            Supported template strings: 支持的内部变量如下
                                [name] the basename of the resource 资源名称
                                [folder] the folder the resource relative to the compiler.context option or modules.localIdentContext option.
                                [path] the path of the resource relative to the compiler.context option or modules.localIdentContext option.
                                [file] - filename and path.
                                [ext] - extension with leading ..
                                [hash] - the hash of the string, generated based on localIdentHashSalt, localIdentHashFunction, localIdentHashDigest, localIdentHashDigestLength, localIdentContext, resourcePath and exportName
                                    [<hashFunction>:hash:<hashDigest>:<hashDigestLength>] - hash with hash settings.
                                [local] - original class.
                            Recommendations:
                                use '[path][name]__[local]' for development
                                use '[hash:base64]' for production; 示例：hash:base64:5
                             */
                            // localIdentName: "[path]_[name]_[local]", 非开发环境时，使用 5 位 hash 值全名，减少 css 文件大小
                            localIdentName: isDev?"[path]_[name]_[local]":"[hash:base64:5]",
                        },
                    }
                }, 
                {
                    loader: 'less-loader', // compiles Less to CSS
                    options: lessLoaderOpt,
                }
            ]
        },
        'css_less_loader_node_modules': {  // css less 等文件
            test: /\.(less|css|scss)$/,
            include: [/node_modules/],    // 此个 rules 只处理 node_modules 下的 样式文件；为了防止CSS 模块化影响第三方 JS 架包的 CSS
            use: [
                'style-loader', 'css-loader', 
                {
                    loader: 'less-loader', // compiles Less to CSS
                    options: lessLoaderOpt,
                }
            ]
        }
    };
    // 默认插件定义
    packageDefaultPlugins = {
        'DefinePlugin': new webpack.DefinePlugin({ /*** 全局变量设置 ***/
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
        'CopyWebpackPlugin': new CopyWebpackPlugin({
            patterns:[
                {from: path.resolve("", 'assets/lib'), to: 'assets/lib', force: true, globOptions: { ignore: [".*", "**/.*"] }},
                {from: path.resolve("", 'assets/js'), to: 'assets/js', force: true, globOptions: { ignore: [".*", "**/.*"] }}
            ]
        }),

        // /*** html 模版 ***/

        /*** 在子项目的 webpack 配置中添加 ***/
        'HtmlWebpackPlugin': new HtmlWebpackPlugin({
            // template: path.resolve(__dirname, '../public/index.html'),
            // filename: path.join(process.cwd(), 'dist/index.html'),
            template:'', // 不能定义为空
            // filename:'',
            filename: 'index.html',
            inject: 'body', // true head false body; 默认 true
            hash: true,
            minify: {
                removeComments: false,
                collapseWhitespace: false,
                removeAttributeQuotes: false
            },
            // chunks: ["commons", "commons.async", "commons.react", "commons.antd", "commons.zk"],  // "commons", "commons.async", "commons.react", "commons.antd", "commons.zk"
            // necessary to consistently work with multiple chunks via CommonsChunkPlugin
            // Allows to control how chunks should be sorted before they are included to the HTML. Allowed values are 'none' | 'auto' | 'manual' | {Function}
            chunksSortMode: 'none'
        }),
        // 
        'CleanWebpackPlugin': new CleanWebpackPlugin.CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                path.resolve(__dirname, '../dist/*'),
            ]
        }),
        // 
        'MiniCssExtractWebpackPlugin': new MiniCssExtractWebpackPlugin({
            filename: 'styles/css/[name].[contenthash:6].css', //  [hash] is now [fullhash] (also consider using [chunkhash] or [contenthash], see documentation for details)
        }),
    }

    return {
    	'packageWebpackConfig': packageWebpackConfig,
    	'packageDefaultRules': packageDefaultRules,
    	'packageDefaultPlugins': packageDefaultPlugins,
    }
}

const packageWebpack = {
    'packagePath': path,
    'webpack': webpack,
	'WebpckMerge': WebpckMerge,
	'MockerApi': MockerApi,
    'pluginsClass': { // 插件对象
    	'HtmlWebpackPlugin': HtmlWebpackPlugin,
	    'CopyWebpackPlugin': CopyWebpackPlugin,
	    'CleanWebpackPlugin': CleanWebpackPlugin,
	    'JsonMinimizerWebpackPlugin': JsonMinimizerWebpackPlugin,
        'TerserWebpackPlugin': TerserWebpackPlugin,
        'CompressionWebpackPlugin': CompressionWebpackPlugin,
        'MiniCssExtractWebpackPlugin': MiniCssExtractWebpackPlugin,
        'CssMinimizerWebpackPlugin': CssMinimizerWebpackPlugin,
        'DefinePlugin': webpack.DefinePlugin,
        'SourceMapDevToolPlugin': webpack.SourceMapDevToolPlugin,
    },
    globalAppConfig: globalAppConfig,
    gobalWebpackConfig: gobalWebpackConfig,
    makePackageWebpackConfig: f_makePackageWebpackConfig,
}

module.exports = packageWebpack;




