/**
 *
 * @Author: Vinson
 * @Date: 2020-08-11 16:42:28
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-11-11 09:18:09
 */

/*** 应用的全局常量配置 ***/
module.exports = {
  basename: "zk-v1.0/sys",        // 会在配置值前面自动加 "/" 前缀；且不要以斜扛结尾；
  isAuth: false,                  // 是否开启身份认证，默认不开启
  routePath: {                    // 路由样例的 路由地址，不引用 sample 项目时，可以删除
    routerSample: 'router'
  },
  apiPrefixSys: 'apiSys',       // api 请求前缀
}
