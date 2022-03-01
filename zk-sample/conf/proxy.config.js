/*
 * @Author: Vinson 
 * @Date: 2020-08-07 09:33:05 
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-11-03 18:57:51
 */
let proxy = {
    '/api/': {
        target: "http://127.0.0.1:8080",
        // target: "https://other-server.example.com",
        // secure: false,
        "changeOrigin": true,
        // "pathRewrite": { "^/apiMock/" : "/s/" }
    },
    '/apiSys/': {
        target: "http://127.0.0.1:9092/",
        // target: "https://other-server.example.com",
        // secure: false,
        "changeOrigin": true,
        "pathRewrite": { "^/apiSys/" : "/zk/v1.0/sys/" }
    },
    "/apiBaidu/": {
        target: "https://www.baidu.com",
        // secure: false,
        "changeOrigin": true,
        "pathRewrite": { "^/apiBaidu/" : "" }
    },
    "/apiSys/mock/": {
        target: "http://loclhost:8080",
        // secure: false,
        "changeOrigin": true,
        // "pathRewrite": { "^/apiSys/" : "" }
    },
}

// export default proxy;
module.exports = proxy
