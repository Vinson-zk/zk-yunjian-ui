/*
 * @Author: Vinson 
 * @Date: 2020-08-07 09:33:05 
 * @Last Modified by: vinson
 * @Last Modified time: 2023-08-28 22:02:37
 */
let proxy = {
    '/apiSys/': {
        // target: "http://127.0.0.1:9092/",
        // // target: "https://other-server.example.com",
        // // secure: false,
        // "changeOrigin": true,
        // "pathRewrite": { "^/apiSys/" : "/zk/sys/v1.0/" }

        // 转到 mock 
        target: "http://127.0.0.1:11114/",
        // "changeOrigin": true,
        "pathRewrite": { "^/apiSys/" : "/apiMock/" }
    },
    '/apiWechat/': {
        // target: "http://127.0.0.1:9094/",
        target: "http://192.168.1.236:9094/",
        // target: "https://other-server.example.com",
        // secure: false,
        "changeOrigin": true,
        "pathRewrite": { "^/apiWechat/" : "/zk/wechat/v1.0/" }
    },
}

// export default proxy;
module.exports = proxy
