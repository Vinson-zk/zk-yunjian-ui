/**
 *
 * @Author: Vinson
 * @Date: 2020-08-11 23:01:20
 * @Last Modified by:   Vinson
 * @Last Modified time: 2023-08-24 14:17:25
 */

import zkJsUtils from "zkJsUtils";
import { zkTools } from 'zkFramework';
const { zkToolsAjax } = zkTools;

/*** mock 代理取导航栏目 样例 ***/
// 同步取 nav item 
export function getNavItems(params) {
	let resData = zkToolsAjax.reqData('/apiMock/getNavItems', { method: 'GET', async: false, data: params });
	// console.log("[^_^:20230824-0701-001] resData: ", resData);
	return resData;
}

// 异步取 nav item 
export async function getNavItems2(params) {
	let resData = zkToolsAjax.reqData('/apiMock/getNavItems', { method: 'GET', data: params })
	// console.log("[^_^:20230824-0701-002] resData: ", resData);
	return resData;
	// return zkToolsAjax.req('/apiMock/getNavItems', {method:'GET', data:{}})
}

// /*** 无代理取导航栏目 样例 ***/
// const sampleMenus = require('../mock/data.sample.menus.js');

// export function getNavItems(params) {
// 	let navItems = [];
// 	for(let item of sampleMenus.menus){
// 		if(zkJsUtils.isEmpty(item.parentId)){
// 			navItems.push(item);
// 		}
// 	}

// 	navItems = zkJsUtils.sort(navItems);

// 	let resData = {
// 		code: 'zk.0',
// 		data: navItems
// 	}

// 	return resData;
// }

