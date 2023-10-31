/**
 *
 * @Author: Vinson
 * @Date: 2021-02-14 12:23:01
 * @Last Modified by: vinson
 * @Last Modified time: 2023-08-28 21:35:37
 */

import { zkTools } from 'zkFramework';
const { zkToolsAjax } = zkTools;

const api = globalAppConfig.apiPrefixSys;

// 取 导航栏目下的所有菜单，树形
export async function getNavMenus(navCode, params) {
	return zkToolsAjax.reqPretreatment(`/${globalAppConfig.apiPrefixSys}/res/getNavMenus/${navCode}`, {method:'GET', data:params});
}

