/*
* @Author: Vinson
* @Date:   2021-11-11 09:37:37
* @Last Modified by:   Vinson
* @Last Modified time: 2021-11-11 09:39:26
* 
* 
* 
*/


import { zkTools } from 'zkFramework';
const { zkToolsAjax } = zkTools;

// const api = globalAppConfig.apiPrefixSys;

// 取 导航栏目下的所有菜单，树形
export async function getNavMenus(navCode, params) {
	return zkToolsAjax.reqPretreatment(`/${globalAppConfig.apiPrefixSys}/res/getNavMenus/${navCode}`, {method:'GET', data:params});
}

