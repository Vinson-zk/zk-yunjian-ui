/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2024-07-31 18:32:43
* @Last Modified by: runoob
* @Last Modified time: 2024-07-31 18:37:13
*/


import { zkTools } from 'zkFramework';
const { zkToolsAjax } = zkTools;

const apiSys = globalAppConfig.apiPrefixSys;

// 取 nav item
export async function getNavItems(params) {
	return zkToolsAjax.reqPretreatment(`/${globalAppConfig.apiPrefixSys}/res/getNavItems`, {method:'GET', data:params});
}

export async function loginUserInfo(){
    return zkToolsAjax.reqPretreatment(`/${apiSys}/sec/loginUserInfo`, {method:'GET'});
 //    let resJsonData = { code: 'zk.0', ok: true, msg: 'getUser ok' }
 //    resJsonData.data = { 
	// 	user: { pkId:"test_user_pkId", "loginName": "test", "nickname": "游客", "newMsg": 6 }, 
	// 	platformCode:'_default_platform_code_' 
	// }
 //    return resJsonData;
}

