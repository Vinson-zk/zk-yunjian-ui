/*
 * @Author: Vinson 
 * @Date: 2020-08-07 09:33:05 
 * @Last Modified by: Vinson
 * @Last Modified time: 2020-10-21 11:11:45
 */
let proxy = {
    '/api/': {
        target: "http://172.16.10.95",
        // target: "https://other-server.example.com",
        // secure: false,
        "changeOrigin": true,
        // "pathRewrite": { "^/apiMock/" : "/service/s/" }
    },
    '/zkApiSys/': {
        target: "http://127.0.0.1:9092/",
        // target: "https://other-server.example.com",
        // secure: false,
        "changeOrigin": true,
        "pathRewrite": { "^/zkApiSys/" : "/zk/v1.0/sys/" }
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
