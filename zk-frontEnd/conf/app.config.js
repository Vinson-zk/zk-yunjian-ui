/**
 *
 * @Author: Vinson
 * @Date: 2020-08-11 16:42:28
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-08-08 11:06:36
 */

/*** 应用的全局常量配置 ***/
module.exports = {
  //basename: "zk-v1.0",             // 会在配置值前面自动加 "/" 前缀；且不要以斜扛结尾；
  basename: "admin", 
  routePath: {                     // 路由样例的 路由地址，不引用 sample 项目时，可以删除
    routerSample: 'router'
  },
  isAuth: true,                   // 是否开启身份认证，默认不开启
  apiPrefixSys: 'apiSys',          // system api 请求前缀
  apiPrefixDevTool: 'apiDevTool',  // 开发工具项目的 api 请求前缀
  apiPrefixWechat: 'apiWechat',    // 微信平台 api 请求前缀
  apiPrefixMail: 'apiMail',    // 邮件 api 请求前缀
}
