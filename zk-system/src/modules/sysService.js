/**
 *
 * @Author: Vinson
 * @Date: 2021-02-14 12:23:01
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-11-03 19:17:39
 */

import { zkTools } from 'zkFramework';
const { zkToolsAjax } = zkTools;

const api = globalAppConfig.apiPrefixSys;

// import menus from "../../mock/data.system.menus.js";

// export async function getNavMenus(navCode, params){
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

