/*
 * @Author: Vinson 
 * @Date: 2020-08-07 09:33:05 
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-01-09 17:20:50
 */
let proxy = {
    '/api/': {
        target: "http://127.0.0.1:8080",
        // target: "https://other-server.example.com",
        // secure: false,
        "changeOrigin": true,
        // "pathRewrite": { "^/apiMock/" : "/s/" }
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
