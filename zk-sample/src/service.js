/**
 *
 * @Author: Vinson
 * @Date: 2020-08-11 23:01:20
 * @Last Modified by: runoob
 * @Last Modified time: 2024-07-11 15:48:29
 */

import zkJsUtils from "zkJsUtils";
import { zkTools } from 'zkFramework';
const { zkToolsAjax } = zkTools;

/*** mock 代理取导航栏目 样例 ***/
// // 同步取 nav item 
// export function getNavItems(params) {
// 	let resData = zkToolsAjax.reqData('/apiMock/getNavItems', { method: 'GET', async: false, data: params });
// 	// console.log("[^_^:20230824-0701-001] resData: ", resData);
// 	return resData;
// }

// 异步取 nav item 
export async function getNavItems2(params) {
	let resData = zkToolsAjax.reqData('/apiMock/getNavItems', { method: 'GET', data: params })
	// console.log("[^_^:20230824-0701-002] resData: ", resData);
	return resData;
	// return zkToolsAjax.req('/apiMock/getNavItems', {method:'GET', data:{}})
}

/*** 无代理取导航栏目 样例 ***/
const sampleMockNavs = require('../mock/mock.data.sample.navs.js');

export function getNavItems(params) {
	let navItems = [];
	for(let item of sampleMockNavs.navItems){
		if(zkJsUtils.isEmpty(item.parentId)){
			navItems.push(item);
		}
	}

	navItems = zkJsUtils.sort(navItems);

	let resData = {
		// code: 'zk.0',
		ok: true,	
		data: navItems
	}

	return resData;
}

