/*
 * @Author: Vinson 
 * @Date: 2020-08-07 09:33:05 
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-06-16 15:23:23
 */
let proxy = [{
    context: ["/apiSys", "/apiWechat"],
    target: "http://127.0.0.1:8088",
    "pathRewrite": { 
        "^/apiSys/" : "/apiSys/zk/sys/v1.0/",
        "^/apiWechat/" : "/apiWechat/zk/wechat/v1.0/",
    }
}]
// {
//     '/api/': {
//         "changeOrigin": true, // 是否跨域
//         // ws: true,        //如果要代理 websockets，配置这个参数
//         // secure: false,  // 如果是https接口，需要配置这个参数
//         target: "http://127.0.0.1", // 后台接口域名
//         // target: "https://other-server.example.com",
//         // secure: false,
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
//     '/apiDevelopmentTool/': {
//         "changeOrigin": true,
//         target: "http://127.0.0.1:9093/",
//         "pathRewrite": { "^/apiDevelopmentTool/" : "/zk/dt/v1.0/" }
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
