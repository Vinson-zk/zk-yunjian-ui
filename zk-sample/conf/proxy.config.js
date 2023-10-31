/*
 * @Author: Vinson 
 * @Date: 2020-08-07 09:33:05 
 * @Last Modified by: vinson
 * @Last Modified time: 2023-08-28 17:07:12
 */
let proxy = {
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
