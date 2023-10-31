/*
* @Author: Vinson
* @Date:   2021-03-29 16:26:49
* @Last Modified by: vinson
* @Last Modified time: 2023-08-28 22:25:52
* 
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
 //    let resJsonData = { code: 'zk.0', msg: 'getUser ok' }
 //    resJsonData.data = { 
	// 	user: { pkId:"test_user_pkId", "loginName": "test", "nickname": "游客", "newMsg": 6 }, 
	// 	platformCode:'_default_platform_code_' 
	// }
 //    return resJsonData;
}

export async function accountLogin(params){
    return zkToolsAjax.reqPretreatment(`/${apiSys}/sec/login`, {method:'POST', data: params}); // , dataType:'text'
}

export async function phoneNumberLogin(params){
    return zkToolsAjax.reqPretreatment(`/${apiSys}/sec/phoneNumberLogin`, {method:'POST', data:JSON.stringify(params), contentType:'application/json; charset=utf-8'});
}






