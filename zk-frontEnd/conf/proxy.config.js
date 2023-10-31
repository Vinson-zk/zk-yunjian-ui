/*
 * @Author: Vinson 
 * @Date: 2020-08-07 09:33:05 
 * @Last Modified by: vinson
 * @Last Modified time: 2023-09-05 00:16:26
 */

/* 直接使用网关路由 */
let proxy = [{
    target: "http://127.0.0.1:8088",  // 后台接口域名
	// "changeOrigin": true,          // 是否跨域
    // ws: true,                      // 如果要代理 websockets，配置这个参数
    // secure: false,                 // 如果是https接口，需要配置这个参数
    context: [
        // "/apiSys", 
        "/apiDevTool", 
        "/apiWechat", 
        // "/apiFile", 
        "/apiMail",
    ],
    // target: "http://192.168.1.105:8088",  
    "pathRewrite": { 
        "^/apiDevTool/" : "/apiDevTool/zk/dt/v1.0/",
        "^/apiSys/" : "/apiSys/zk/sys/v1.0/",
        "^/apiWechat/" : "/apiWechat/zk/wechat/v1.0/",
        // "^/apiFile/" : "/apiFile/zk/f/v1.0/",
        "^/apiMail/" : "/apiMail/zk/mail/v1.0/",
    }
},{
    target: "http://127.0.0.1:11115",  // 后台接口域名
    context: [
        "/apiSys",
        "/apiFile",
    ],
    "pathRewrite": { 
        "^/apiSys/" : "/apiMock/",
        "^/apiFile/" : "/apiMock/",
    }
}]

/* nginx 代理 */
// let proxy = [{
//     "changeOrigin": true,          // 是否跨域
//     context: ["/apiSys", "/apiWechat", "/apiDevTool"],
//     target: "http://gf.zhgxfz.com",  // 后台接口域名
//     // "pathRewrite": { 
//     //     "^/apiSys/" : "/apiSys/",
//     //     "^/apiWechat/" : "/apiWechat/",
//     //     "^/apiDevTool/" : "/apiDevTool/",
//     // }
// }]

// let proxy = [{
//     "changeOrigin": true,          // 是否跨域
//     context: ["/apiSys", "/apiWechat", "/apiDevTool"],
//     target: "http://10.0.34.177:8088",  // 后台接口域名
//     "pathRewrite": { 
//         "^/apiSys/" : "/apiSys/zk/sys/v1.0/",
//         "^/apiWechat/" : "/apiWechat/zk/wechat/v1.0/",
//         "^/apiDevTool/" : "/apiDevTool/zk/dt/v1.0/",
//     }
// }]

////////////////////////////////////////////////
// let proxy = {
//     '/api/': {
//         "changeOrigin": true, // 是否跨域
//         // ws: true,        //如果要代理 websockets，配置这个参数
//         // secure: false,  // 如果是https接口，需要配置这个参数
//         target: "http://127.0.0.1", // 后台接口域名
//         // target: "https://other-server.example.com",
//         // "pathRewrite": { "^/apiMock/" : "/service/s/" }
//     },
//     '/apiSys/': {
//         "changeOrigin": true, // 是否跨域
//         // ws: true,        //如果要代理 websockets，配置这个参数
//         // secure: false,  // 如果是https接口，需要配置这个参数

//         // target: "http://127.0.0.1:9092/", // 后台接口域名
//         // "pathRewrite": { "^/apiSys/" : "/zk/sys/v1.0/" }

//         target: "http://127.0.0.1:8088/",
//         "pathRewrite": { "^/apiSys/" : "/apiSys/zk/sys/v1.0/" }
//     },
//     '/apiDevTool/': {
//         "changeOrigin": true,
//         target: "http://127.0.0.1:9093/",
//         "pathRewrite": { "^/apiDevTool/" : "/zk/dt/v1.0/" }
//     },
//     '/apiWechat/': {
//         "changeOrigin": true,
//         target: "http://127.0.0.1:9094/",
//         "pathRewrite": { "^/apiWechat/" : "/zk/wechat/v1.0/" }
//     },
//     '/apiMail/': {
//         "changeOrigin": true,
//         target: "http://127.0.0.1:9095/",
//         "pathRewrite": { "^/apiMail/" : "/zk/mail/v1.0/" }
//     },
//     "/apiBaidu/": {
//         "changeOrigin": true,
//         target: "https://www.baidu.com",
//         "pathRewrite": { "^/apiBaidu/" : "" }
//     },
// }

// export default proxy;
module.exports = proxy
