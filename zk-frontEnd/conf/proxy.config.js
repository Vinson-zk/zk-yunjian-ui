/*
 * @Author: Vinson 
 * @Date: 2020-08-07 09:33:05 
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-01-09 17:47:10
 */
let proxy = {
    '/api/': {
        target: "http://127.0.0.1",
        // target: "https://other-server.example.com",
        // secure: false,
        "changeOrigin": true,
        // "pathRewrite": { "^/apiMock/" : "/service/s/" }
    },
    '/apiSys/': {
        target: "http://127.0.0.1:9092/",
        // target: "https://other-server.example.com",
        // secure: false,
        "changeOrigin": true,
        "pathRewrite": { "^/apiSys/" : "/zk/sys/v1.0/" }
    },
    '/apiDevelopmentTool/': {
        target: "http://127.0.0.1:9093/",
        // target: "https://other-server.example.com",
        // secure: false,
        "changeOrigin": true,
        "pathRewrite": { "^/apiDevelopmentTool/" : "/zk/dt/v1.0/" }
    },
    '/apiWechat/': {
        target: "http://127.0.0.1:9094/",
        // target: "https://other-server.example.com",
        // secure: false,
        "changeOrigin": true,
        "pathRewrite": { "^/apiWechat/" : "/zk/wechat/v1.0/" }
    },
    "/apiBaidu/": {
        target: "https://www.baidu.com",
        // secure: false,
        "changeOrigin": true,
        "pathRewrite": { "^/apiBaidu/" : "" }
    },
    "/apiSys/mock/": {
        target: "http://transmit.accessreal.com",
        // secure: false,
        "changeOrigin": true,
        // "pathRewrite": { "^/apiSys/" : "" }
    },
}

// export default proxy;
module.exports = proxy
