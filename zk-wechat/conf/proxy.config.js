/*
 * @Author: Vinson 
 * @Date: 2020-08-07 09:33:05 
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-01-09 17:44:04
 */
let proxy = {
    '/api/': {
        target: "http://127.0.0.1:8080",
        // target: "https://other-server.example.com",
        // secure: false,
        "changeOrigin": true,
        // "pathRewrite": { "^/apiMock/" : "/s/" }
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
