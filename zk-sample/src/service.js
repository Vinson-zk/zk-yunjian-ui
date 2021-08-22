/**
 *
 * @Author: Vinson
 * @Date: 2020-08-11 23:01:20
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-06-28 11:47:17
 */

import { zkTools } from 'zkFramework';
const { zkToolsAjax } = zkTools;

/*** mock 代理取导航栏目 样例 ***/
// // 同步取 nav item 
// export function getNavItemSync() {
// 	let resData = zkToolsAjax.reqData('/apiMock/getNavItems', { method: 'GET', async: false, data: {} })
// 	return resData;
// }
// // 异步取 nav item 
// export async function getNavItem() {
// 	return zkToolsAjax.reqData('/apiMock/getNavItems', { method: 'GET', data: {} })
// 	// return zkToolsAjax.req('/apiMock/getNavItems', {method:'GET', data:{}})
// }

/*** 无代理取导航栏目 样例 ***/
const sampleNavs = require('../mock/data.sample.navs.js');

export function getNavItemSync() {

	let resData = {
		code:'zk.0',
		data:sampleNavs.navItems
	}

	return resData;
}

