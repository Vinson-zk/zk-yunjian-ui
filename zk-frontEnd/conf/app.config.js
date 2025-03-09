/*
 * @Author: Vinson
 * @CreateDate: 
 * @LastEditors: Vinson
 * @LastEditTime: 2025-03-09 13:11:12
 * @Description: 
 */
/**
 *
 * @Author: Vinson
 * @Date: 2020-08-11 16:42:28
 * @Last Modified by: vinson
 * @Last Modified time: 2025-01-08 17:14:42
 */

/*** 应用的全局常量配置 ***/
module.exports = {
  basename: "zk/v1.0/admin",             // 会在配置值前面自动加 "/" 前缀；且不要以斜扛结尾；
  isAuth: true,                   // 是否开启身份认证，默认不开启
  apiPrefixSys: 'apiSys',          // system api 请求前缀
  apiPrefixDevTool: 'apiDevTool',  // 开发工具项目的 api 请求前缀
  apiPrefixWechat: 'apiWechat',    // 微信平台 api 请求前缀
  apiPrefixMail: 'apiMail',    // 邮件 api 请求前缀
  apiPrefixFile: 'apiFile',    // 文件 api 请求前缀
  apiPrefixIot: 'apiIot',      // iot api 请求前缀
  localKey: {
  	'defaultLoginType': '_defaultLoginType',
  }
}




