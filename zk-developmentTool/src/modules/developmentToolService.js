/**
 *
 * @Author: Vinson
 * @Date: 2021-02-14 12:23:01
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-01-25 19:27:48
 */

import { zkTools } from 'zkFramework';
const { zkToolsAjax } = zkTools;

// import menus from "../../mock/data.developmentTool.menus.js";

// export async function getNavMenus(){
//     return {
//         code: "zk.0",
//         msg: "",
//         data: menus.menus
//     }
// }

// 取 导航栏目下的所有菜单，树形
export async function getNavMenus(navCode, params) {
  return zkToolsAjax.reqPretreatment(`/${globalAppConfig.apiPrefixSys}/res/getNavMenus/${navCode}`, {method:'GET', data:params});
}