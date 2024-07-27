/*
 * @Author: Vinson 
 * @Date: 2020-08-07 09:33:05 
 * @Last Modified by: runoob
 * @Last Modified time: 2024-07-11 15:43:24
 */
// let proxy = {
//     '/apiSys/': {
//         target: "http://127.0.0.1:9092/",
//         // target: "https://other-server.example.com",
//         // secure: false,
//         "changeOrigin": true,
//         "pathRewrite": { "^/apiSys/" : "/zk/v1.0/sys/" }
//     },
//     "/apiBaidu/": {
//         target: "https://www.baidu.com",
//         // secure: false,
//         "changeOrigin": true,
//         "pathRewrite": { "^/apiBaidu/" : "" }
//     },
// }

let proxy = [{
    target: "http://127.0.0.1:9092/",  // 后台接口域名
    // "changeOrigin": true,          // 是否跨域
    // ws: true,                      // 如果要代理 websockets，配置这个参数
    // secure: false,                 // 如果是https接口，需要配置这个参数
    context: ["/apiSys"],
    "pathRewrite": { 
        "^/apiSys/" : "/zk/v1.0/sys/",
    }
},{
    target: "https://www.baidu.com",  
    context: ["/apiBaidu"],
    "pathRewrite": { 
        "^/apiBaidu/" : "",
    }
}]

// export default proxy;
module.exports = proxy
