/**
 *
 * @Author: Vinson
 * @Date: 2020-08-12 00:08:22
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-02-21 23:57:32
 */

import { zkTools } from 'zkFramework';
const { zkToolsAjax } = zkTools;

// /*** mock 代理取菜单 样例 ***/
// // 同步取 menu item 
// export function getMenusSync(params = {}) {
//     return toolsAjax.reqData('/apiMock/getMenus', {method:'GET', async:false, data:params});
// }

// // 异步取 menu 
// export async function getMenus(params = {}) {
//     // return zkToolsAjax.reqData('/apiMock/getMenus', {method:'GET', data:params});
//     return zkToolsAjax.req('/apiMock/getMenus', {method:'GET', data:params});
// }

/*** 无代理取 sample 菜单 样例 ***/
const sampleMenus = require('../../../mock/data.sample.menus.js');

export function getMenusSync(params = {}) {
    let navCode = params.navCode;
    let resData = { code: 'res.-1', msg: '请求菜单失败!' };
    if (navCode) {
        let navMenus = [];
        for (let menu of sampleMenus.menus) {
            if (menu.navCode == navCode) {
                navMenus.push(menu)
            }
        }
        resData = { code: 'zk.0', msg: '成功!', data: navMenus };
    } else {
        resData = { code: 'res.000001', msg: 'navCode 不能为空!' };
    }

    // 故意延迟设置
    // let sleepTime = (new Date()).getTime() + 5000;
    // let returnFlag = false
    // while(!returnFlag){
    // 	if((new Date()).getTime() > sleepTime){
    // 		returnFlag = true;
    // 	}
    // }
    return resData;
}


