/* 
 * 本项目中来启动
 * @Author: Vinson
 * @Date:   2023-08-23 11:05:55
 * @Email: binary_space@126.com
 * @Last Modified by:   Vinson
 * @Last Modified time: 2023-08-23 13:00:54
 */

// =================================================================================================================
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpckMerge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    devtool: false, // eval-source-map eval-cheap-module-source-map
    mode:"development",
    devServer: {
        static: {
          directory: path.resolve(__dirname, '../dist'),
          // publicPath: '/',
        },
        host: '0.0.0.0',
        port: 11102,
        // open: ["/", "/pl-zk"], // true, 打开的断裂面
        hot: true,
        compress: true,
        historyApiFallback: true,                        // 在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html

        // - 2023-07-25
        // contentBase: path.resolve(__dirname, '../dist'), // 默认会以根文件夹提供本地服务器，这里指定文件夹
        // historyApiFallback: true,                        // 在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        // host: "0.0.0.0",
        // port: 11101,                                     // 如果省略，默认8080，也可以在 npm 指令中指定
        // publicPath: "/",
        // open:true,
        // openPage: "/", // 默认打开路径，默认值为 /
        // hot: true,  
    },
    // entry 入口
    entry: {
        app: path.resolve(__dirname, '../src/app')
    },
    // outout 输出
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
        // library: 'zkFramework'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.less', '.scss'], // 
    },
    module: {
        rules: [// 因为各项目对 rules 需要自定义处理，在 package 项目中只会对创建对应的 rule 对象，在子项目中引用添加及做自定义修改。 
            {   // js jsx 文件解析
                test: /\.(js|jsx)?$/,
                exclude: [
                    path.resolve("", "node_modules"),  
                ],
                include: [
                    path.resolve("", "src"), 
                ],
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
            },
            {  // 多媒体文件
                test: /\.(png|jpe?g|gif|svg|ico|mp4|webm|ogg|mp3|wav|flac|aac|woff2?|eot|ttf|otf)(\?.*)?$/,
                exclude: [
                    path.resolve("", "node_modules"), 
                ],
                loader: 'url-loader',
                options: {
                    limit: 10000,
                }
            },
            {  // css less 等文件
                test: /\.(less|css|scss)$/,
                exclude: [
                    path.resolve("", "node_modules"), 
                ],
                use: [
                    'style-loader', 
                    {
                        loader: 'css-loader', // translates CSS into CommonJS
                    }, 
                    {
                        loader: 'less-loader', // compiles Less to CSS
                    }
                ]
            }
        ] 
    },
    plugins: [
        // /*** 在子项目的 webpack 配置中添加 ***/
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
            filename: 'index.html',
        }),
        new CopyWebpackPlugin({
            patterns:[
                // {from: path.resolve(__dirname, '../../zk-package/assets/lib'), to: 'assets/lib', force: true, globOptions: { ignore: [".*", "**/.*"] }},
                // {from: path.resolve(__dirname, '../../zk-package/assets/js'), to: 'assets/js', force: true, globOptions: { ignore: [".*", "**/.*"] }},
                {from: path.resolve(__dirname, '../public/assets'), to: 'assets', force: true, globOptions: { ignore: [".*", "**/.*"] }
            }]
        }),
    ]
}

