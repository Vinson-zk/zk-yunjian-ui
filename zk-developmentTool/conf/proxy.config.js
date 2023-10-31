/*
 * @Author: Vinson 
 * @Date: 2020-08-07 09:33:05 
 * @Last Modified by: vinson
 * @Last Modified time: 2023-08-28 21:27:56
 */
let proxy = {
    '/apiSys/': {
        // target: "http://127.0.0.1:9092/",
        // // target: "https://other-server.example.com",
        // // secure: false,
        // "changeOrigin": true,
        // "pathRewrite": { "^/apiSys/" : "/zk/sys/v1.0/" }

        // 转到 mock 
        target: "http://127.0.0.1:11112/",
        // "changeOrigin": true,
        "pathRewrite": { "^/apiSys/" : "/apiMock/" }
    },
    '/apiDevelopmentTool/': {
        target: "http://127.0.0.1:9093/",
        // target: "https://other-server.example.com",
        // secure: false,
        "changeOrigin": true,
        "pathRewrite": { "^/apiDevelopmentTool/" : "/zk/dt/v1.0/" }
    },
}

// export default proxy;
module.exports = proxy
