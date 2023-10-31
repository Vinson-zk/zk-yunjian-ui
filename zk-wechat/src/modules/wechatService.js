/**
 *
 * @Author: Vinson
 * @Date: 2021-02-14 12:23:01
 * @Last Modified by: vinson
 * @Last Modified time: 2023-08-28 22:00:33
 */

import { zkTools } from 'zkFramework';
const { zkToolsAjax } = zkTools;

// 取 导航栏目下的所有菜单，树形
export async function getNavMenus(navCode, params) {
	return zkToolsAjax.reqPretreatment(`/${globalAppConfig.apiPrefixSys}/res/getNavMenus/${navCode}`, {method:'GET', data:params});
}

