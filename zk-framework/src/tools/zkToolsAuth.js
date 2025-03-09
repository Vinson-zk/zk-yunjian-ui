/**
 * 用户权限判断与处理的一些方法函数
 * @Author: Vinson
 * @Date: 2020-08-11 11:23:00
 * @Last Modified by: vinson
 * @Last Modified time: 2025-01-21 10:04:34
 */

import locales from '../locales';

import zkToolsMsg from './zkToolsMsg.js';
import zkJsEvent from 'zkJsEvent';
// import zkJsUtils from 'zkJsUtils';

/**
 * 取当前用户令牌
 * @return {string} 用户令牌ID
 */
const f_getTicket = () => {
  let tkId = localStorage.getItem(globalAppConfig.localKey.ticket);
  if(tkId){
    // console.log("[^_^:20240627-2339-001] tkId: ", tkId);
    return tkId;
  }else{
    f_removeTicket();
  }
  // return sessionStorage.getItem(globalAppConfig.localKey.ticket); 
}

/**
 * 设置当前用户令牌
 * @param {string} tkId 令牌ID
 * @return void
 */
const f_setTicket = (tkId) => {
  if(tkId){
    localStorage.setItem(globalAppConfig.localKey.ticket, tkId);
  }else{
    if(console)console.error("[>_<:20240627-2339-002] 错误 tkId: ", tkId);
    let msgOpt = { type: "error", msg: zkToolsMsg.msgFormatByLocales(locales, 'global.app.msg.error') }
    zkToolsMsg.alertMsg(null, null, msgOpt);
  }
}

/**
 * 移除当前用户令牌
 * @return void
 */
const f_removeTicket = () => {
  localStorage.removeItem(globalAppConfig.localKey.ticket);
  // sessionStorage.removeItem(globalAppConfig.localKey.ticket);
}

// 设置是否已登录
const f_setLoginFlag = ()=>{
  localStorage.setItem(globalAppConfig.localKey.islogin, "true");
}
const f_getLoginFlag = ()=>{
  let loginFlag = localStorage.getItem(globalAppConfig.localKey.islogin);
  if(loginFlag){
    // console.log("[^_^:20240627-2339-001] loginFlag: ", loginFlag);
    // console.log("[^_^:20240627-2339-001] loginFlag === 'true': ", loginFlag === 'true');
    return loginFlag === 'true';
  }else{
    f_removeLoginFlag();
  }
  return false;
}
const f_removeLoginFlag = () => {
  localStorage.removeItem(globalAppConfig.localKey.islogin);
  // sessionStorage.removeItem(globalAppConfig.localKey.ticket);
}

/**
 * 判断是否已登录;
 * @return {string} 返回 false 未登录；true 已登录；
 */
const f_isLogin = () => {
  if (zkJsUtils.isEmpty(f_getTicket()) || f_getLoginFlag() != true) {
    // f_cleanLoginInfo();
    return false;
  }
  return true;
}

/**
 * 清理用户登录信息，可删除用户信息，cookie 等信息
 * @return void
 */
const f_cleanLoginInfo = () => {
  f_removeTicket();
  f_removeLoginFlag();
}

/**
 * 登出；
 * @param {object} match 
 * @param {object} history 
 * @param {object} location 
 * @return void
 */
const f_logout = (match, history, location) => {
  f_cleanLoginInfo();

  // 原来的代码，优化体检
  // window.location.reload();

  // 优化体检的代码; 触发退出事件；
  zkJsEvent.eventEmitter.emit(globalAppConfig.eventType.logout);

}

/**
 * 判断当前打开的路由地址是否为开放的路由 item
 * @param {string} basename 路由前缀
 * @param {Array.of(string)} publicItems 开放的路由菜单
 * @param {string} currentPath 当前路由地址，注意，不包括路由的 basename
 * @return {boolean} true-是；false-不是；
 */
const f_isPublicItem = (basename, publicItems, currentPath) => {

  if (currentPath.startsWith("/")) {
    currentPath = currentPath.substring(1);
  }

  if (basename && basename.length > 0 && currentPath.startsWith(basename)) {
    currentPath = currentPath.substring(basename.length);
  }

  if (currentPath.startsWith("/")) {
    currentPath = currentPath.substring(1);
  }

  let isPublicItem = false;
  for (let item of publicItems) {
    // if (item.path === currentPath) {
    //   isPublicItem = true;
    //   break;
    // }
    let pathReStr = item.path;
    pathReStr = pathReStr.replace(/:(.*?)\//, "(.*?)\/");
    pathReStr = pathReStr.replace(/:(.*)/, "(.*)");
    let rePath = new RegExp(pathReStr);
    if(rePath.test(currentPath) == true){
      isPublicItem = true;
      break;
    }
    
  }
  return isPublicItem;
}

export default {
  getTicket: f_getTicket,             // 取当前用户令牌
  setTicket: f_setTicket,             // 设置当前用户令牌
  setLoginFlag: f_setLoginFlag,
  getLoginFlag: f_getLoginFlag,
  removeLoginFlag: f_removeLoginFlag,
  removeTicket: f_removeTicket,       // 移除当前用户令牌
  isLogin: f_isLogin,                 // 判断是否已登录；返回 false 未登录；true 已登录；
  cleanLoginInfo: f_cleanLoginInfo,   // 清理用户登录信息，可删除用户信息，cookie 等信息
  logout: f_logout,                   // 登出
  isPublicItem: f_isPublicItem        // 判断当前打开的路由地址是否为开放的路由 item
}

