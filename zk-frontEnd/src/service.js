/*
* @Author: Vinson
* @Date:   2021-03-29 16:26:49
* @Last Modified by:   Vinson
* @Last Modified time: 2021-08-23 23:01:10
* 
* 
* 
*/


import { zkTools } from 'zkFramework';
const { zkToolsAjax } = zkTools;

// const api = globalAppConfig.apiPrefixSys;
const api = "apiMock";

import navItems from "../mock/data.front.end.nav.js";

// export async function getNavItems(){
//     return {
//         code: "zk.0",
//         msg: "",
//         data: navItems.navItems
//     }
// }

// 取 nav item
export async function getNavItems(params) {
	return zkToolsAjax.reqPretreatment(`/${globalAppConfig.apiPrefixSys}/res/getNavItems`, {method:'GET', data:params});
}

export async function getUser(params){
    return zkToolsAjax.reqPretreatment(`/${api}/sys/userLogin/getUser`, {method:'POST', data:JSON.stringify(params), contentType:'application/json; charset=utf-8'});
}

export async function accountLogin(params){
    return zkToolsAjax.reqPretreatment(`/${api}/sys/userLogin/accountLogin`, {method:'POST', data:JSON.stringify(params), contentType:'application/json; charset=utf-8'});
}

export async function phoneNumberLogin(params){
    return zkToolsAjax.reqPretreatment(`/${api}/sys/userLogin/phoneNumberLogin`, {method:'POST', data:JSON.stringify(params), contentType:'application/json; charset=utf-8'});
}


