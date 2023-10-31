/**
 *
 * @Author: Vinson
 * @Date: 2020-08-12 00:08:22
 * @Last Modified by: vinson
 * @Last Modified time: 2023-08-28 16:07:46
 */

import { zkTools } from 'zkFramework';
import zkJsUtils from 'zkJsUtils';

const { zkToolsAjax } = zkTools;

/*** 无代理取 sample 菜单 样例 ***/
const mockSampleMenus = require('../../../mock/mock.data.sample.menus.sample.js');

export function getMenusSync(params = {}) {

    console.log("[^_^:20230529-1507-001] server -> getMenusSync params: ", params, mockSampleMenus);
    let navCode = params.navCode;
    let resData = { code: 'res.-1', msg: '请求菜单失败!' };
    if (navCode) {
        let menus = [];
        for (let menu of mockSampleMenus.sampleMenus) {
            if (menu.navCode == navCode) {
                menus.push(menu);
            }
        }

        menus = zkJsUtils.makeTree(menus, null);
        menus = zkJsUtils.sort(menus, 1);
        console.log("[^_^:20230529-1507-002] server -> getMenusSync menus: ", menus);
        resData = { code: 'zk.0', msg: '成功!', data: menus };
    } else {
        resData = { code: 'res.000001', msg: 'navId 不能为空!' };
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


