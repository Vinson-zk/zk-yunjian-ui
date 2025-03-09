/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2025-01-08 15:48:33
* @Last Modified by: vinson
* @Last Modified time: 2025-01-08 15:48:50
*/

import { zkTools } from 'zkFramework';
const { zkToolsAjax } = zkTools;

// const api = globalAppConfig.apiPrefixSys;

// 取 导航栏目下的所有菜单，树形
export async function getNavMenus(navCode, params) {
	return zkToolsAjax.reqPretreatment(`/${globalAppConfig.apiPrefixSys}/res/getNavMenus/${navCode}`, {method:'GET', data:params});
}


