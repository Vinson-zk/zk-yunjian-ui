/**
 *
 * @Author: Vinson
 * @Date: 2020-08-11 16:42:28
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-01-09 16:27:59
 */

/*** 应用的全局常量配置 ***/
module.exports = {
  basename: "zk-v1.0/pdt",        // 会在配置值前面自动加 "/" 前缀；且不要以斜扛结尾；
  isAuth: false,                      // 是否开启身份认证，默认不开启
  apiPrefixSys: 'apiSys',        // system api 请求前缀
  apiPrefixDevelopmentTool: 'apiDevelopmentTool',
  routePath: {         // 路由样例的 路由地址，不引用 sample 项目时，可以删除
    routerSample: 'router'
  }
}
